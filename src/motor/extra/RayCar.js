import { Object3D, Vector3, Quaternion, Euler, Matrix4, CylinderGeometry, Mesh } from 'three';
import { root, Utils } from '../root.js';



//https://forum.babylonjs.com/t/havok-raycastvehicle/40314 

//https://sketches.isaacmason.com/sketch/p2-es/marching-cubes-goo
//https://github.com/isaac-mason/sketches/tree/main

//https://playground.babylonjs.com/#8WQIA8
//https://github.com/Jaagrav/raycast-vehicle-engine

//https://asawicki.info/Mirror/Car%20Physics%20for%20Games/Car%20Physics%20for%20Games.html


const directions = [
    new Vector3(1, 0, 0),
    new Vector3(0, 1, 0),
    new Vector3(0, 0, 1)
];

const calcRollingFriction_vel1 = new Vector3();
const calcRollingFriction_vel2 = new Vector3();
const calcRollingFriction_vel = new Vector3();

const updateFriction_surfNormalWS_scaled_proj = new Vector3();
const updateFriction_forwardWS = [];
const sideFrictionStiffness2 = 1;
const updateFriction_axle = [];

const tmpVec4 = new Vector3();
const tmpVec5 = new Vector3();
const tmpVec6 = new Vector3();

const tmpMtx = new Matrix4();

export class RayCar {
	
	constructor( o = {} ){

		this.tmp = {
			forwardForce : 0,
			steerValue : 0,
			steerDirection : 0,
			brakeForce : 0,
		}

		this.maxSpeed = 70
		this.maxForce = 1500
		this.maxBrakeForce = 45
		this.maxSteerValue = 0.4//0.6 
		this.steeringIncrement = 0.15
		this.steerRecover = 0.15

		this.name = o.name || 'car';
		this.mass = o.mass || 1000//200;
		this.size = o.size || [2, 1, 4];
		this.pos = o.pos || [0,4,0];
		this.rot = o.rot || [0,0,0];
		this.friction = o.friction || 0.2;
		this.restitution = o.restitution || 0.3;
		this.massCenter = o.massCenter || [0,-0.2,0];

		/*this.body = root.motor.add({ 

			type:'box',
			name:this.name,  
	        size:this.size, 
	        pos:this.pos, 
	        rot:this.rot,
	        friction:this.friction, 
	        restitution:this.restitution,
	        neverSleep:true,
	        mass:this.mass,
	        massCenter:this.massCenter,
	        radius: 0.02,

	    });*/

        this.body = root.motor.add({ 

            type:'compound',
            shapes:[ { type:'box', pos:this.massCenter, size:this.size, radius: 0.02 } ],
            name:this.name,
            pos:this.pos,
            rot:this.rot,
            friction:this.friction,
            restitution:this.restitution,
            mass:this.mass,
            neverSleep:true,
            massInfo:true,

        });

	    //this.body.inertia.set( 1.416666865348816, 1.666666865348816, 0.416666716337204 );
        this.body.inertia.set( 283.33331298828125, 333.33331298828125, 83.33332824707031 );

	    this.vehicle = new RaycastVehicle({
	        chassis: this.body,
	    })

	    const wheelPositions = [
	        new Vector3(-0.95,0,-1.8),
	        new Vector3(0.95,0,-1.8),
	        new Vector3(-0.95,0,1.8),
	        new Vector3(0.95,0,1.8)
	    ]

	    const options = {
	        radius: 0.5,
	        directionLocal: new Vector3(0, -1, 0),
	        suspensionStiffness: 30,
	        suspensionRestLength: 0.8,
            suspensionMaxLength: 2,//2
            maxSuspensionTravel: 0.8,//0.3,
	        frictionSlip: 4,
	        dampingRelaxation: 2.3,
	        dampingCompression: 4.4,
	        maxSuspensionForce: 100000,
	        rollInfluence: 0,//0.001,
	        axleLocal: new Vector3(1, 0, 0),
	        chassisConnectionPointLocal: new Vector3(1, 1, 0),
	        
	    }

	    wheelPositions.forEach( positionLocal => {
	        options.chassisConnectionPointLocal.copy( positionLocal )
	        this.vehicle.addWheel( options )
	    })


	    let wgeo = new CylinderGeometry( options.radius, options.radius, 0.2 );
	    wgeo.rotateZ( Math.PI * 0.5 );
	    let mat = root.motor.getMat('debug');

	    let m = new Mesh( wgeo, mat );
	    m.matrixAutoUpdate = false;

	    this.vehicle.wheelMeshes = [
	        root.motor.add(m),
	        root.motor.add(m.clone()),
	        root.motor.add(m.clone()),
	        root.motor.add(m.clone())
	    ]
	
	}

	step(){

		this.tmp.forwardForce = 0
	    this.tmp.brakeForce = 0
	    this.tmp.steerDirection = 0

	    let delta = root.motor.getDelta()
	    let r = root.motor.getAzimut()
	    let key = root.motor.getKey()

	    this.tmp.forwardForce = key[1];
	    this.tmp.steerDirection = key[0]*-1;
	    this.tmp.brakeForce = key[4]===1 ? this.maxBrakeForce : 0;

	    this.tmp.steerValue += this.tmp.steerDirection*this.steeringIncrement;
	    this.tmp.steerValue = Math.min(Math.max(this.tmp.steerValue, -this.maxSteerValue), this.maxSteerValue);
	    this.tmp.steerValue *= 1-(1-Math.abs(this.tmp.steerDirection))*this.steerRecover;

	    let speed = Math.abs(this.vehicle.currentVehicleSpeedKmHour)
	    speed = Math.min(speed, this.maxSpeed)
	    const prog = (speed/this.maxSpeed)*100
	    const acceleration = 1.0//accelerationCurve.evaluate(prog)
	    const force = acceleration*this.tmp.forwardForce*this.maxForce;

	    const slip = 0.1//0.1//skidCurve.evaluate(prog)
	    const slipForce = 8//-(slip*4)

	    /*this.vehicle.applyEngineForce(0, 0)
	    this.vehicle.applyEngineForce(0, 1)
	    this.vehicle.applyEngineForce(force, 2)
	    this.vehicle.applyEngineForce(force, 3)*/

        this.vehicle.applyEngineForce(force, 0)
        this.vehicle.applyEngineForce(force, 1)
        this.vehicle.applyEngineForce(force, 2)
        this.vehicle.applyEngineForce(force, 3)

	    this.vehicle.setSteeringValue(this.tmp.steerValue, 2)
	    this.vehicle.setSteeringValue(this.tmp.steerValue, 3)

	    this.vehicle.setBrake(this.tmp.brakeForce, 0)
	    this.vehicle.setBrake(this.tmp.brakeForce, 1)
	    this.vehicle.setBrake(0, 2)
	    this.vehicle.setBrake(0, 3)

	    this.vehicle.wheelInfos[0].frictionSlip = slipForce
	    this.vehicle.wheelInfos[1].frictionSlip = slipForce
	    this.vehicle.wheelInfos[2].frictionSlip = slipForce
	    this.vehicle.wheelInfos[3].frictionSlip = slipForce

	    this.vehicle.updateVehicle(delta);//0.016

	}

}




class RaycastVehicle {

    constructor( o ){

        this.chassisBody = o.chassis;
        this.wheelInfos = [];
        this.sliding = false;
        this.world = null;
        this.indexRightAxis = typeof(o.indexRightAxis) !== 'undefined' ? o.indexRightAxis : 0;
        this.indexForwardAxis = typeof(o.indexForwardAxis) !== 'undefined' ? o.indexForwardAxis : 2;
        this.indexUpAxis = typeof(o.indexUpAxis) !== 'undefined' ? o.indexUpAxis : 1;
        //this.rays = []
        this.wheelMeshes = [];

    }

    addWheel ( o = {} ){
    
        let info = new WheelInfo(o);
        let index = this.wheelInfos.length-1;

        info.chassisBody = this.chassisBody;

        let raylen = info.suspensionRestLength + info.radius
        
        info.ray = root.motor.add({
            type:'ray', 
            name:this.chassisBody.name + '_wheel_' + index, 
            begin:info.chassisConnectionPointLocal.toArray(), 
            end:[info.chassisConnectionPointLocal.x,-raylen, info.chassisConnectionPointLocal.z], 
            callback:function(r){ info.castRay(r) }, 
            visible:true, 
            parent:this.chassisBody 
        });

        this.wheelInfos.push(info);

        return index;

    }

    setSteeringValue( value, wheelIndex ){

        let wheel = this.wheelInfos[wheelIndex];
        wheel.steering = value;

    }

    applyEngineForce(value, wheelIndex){
        this.wheelInfos[wheelIndex].engineForce = value;
    }

    setBrake(brake, wheelIndex){
        this.wheelInfos[wheelIndex].brake = brake;
    }

    getVehicleAxisWorld(axisIndex, result){
        result.set(
            axisIndex === 0 ? 1 : 0,
            axisIndex === 1 ? 1 : 0,
            axisIndex === 2 ? 1 : 0
        );
        TransformCoordinatesToRef(result, bodyTransform(this.chassisBody, new Matrix4()), result);
        return result;
    }

    updateVehicle( timeStep ) {

        let wheelInfos = this.wheelInfos;
        let numWheels = wheelInfos.length;
        let chassisBody = this.chassisBody;

        for ( let i = 0; i < numWheels; i++ ) {
            this.updateWheelTransform(i);
        }

        const cVel = bodyLinearVelocity(chassisBody, new Vector3());
        const cVelLocal = TransformNormalToRef(cVel, bodyTransform(chassisBody, new Matrix4()).invert(),new Vector3());
        this.currentVehicleSpeedKmHour = cVelLocal.z;

        var forwardWorld = new Vector3();
        this.getVehicleAxisWorld(this.indexForwardAxis, forwardWorld);

        //if (Dot(forwardWorld,bodyLinearVelocity(chassisBody, new Vector3())) < 0){
        if ( forwardWorld.dot( chassisBody.velocity ) < 0 ){
            this.currentVehicleSpeedKmHour *= -1;
        }

        // simulate suspension
        // auto on ray result
        //for (var i = 0; i < numWheels; i++) {
            //this.castRay(wheelInfos[i]);
        //}

        

        this.updateSuspension(timeStep);


        var impulse = new Vector3();
        var repos = new Vector3();
        for (var i = 0; i < numWheels; i++) {
            //apply suspension force
            var wheel = wheelInfos[i];
            var suspensionForce = wheel.suspensionForce;
            if (suspensionForce > wheel.maxSuspensionForce) {
                suspensionForce = wheel.maxSuspensionForce;
            }
            //impulse.copyFrom(wheel.raycastResult.hitNormalWorld).scaleInPlace(suspensionForce * timeStep)
            impulse.copy( wheel.raycastResult.hitNormalWorld ).multiplyScalar(suspensionForce * timeStep)
            //console.log(suspensionForce * timeStep)
            
            addImpulseAt( chassisBody, impulse, wheel.raycastResult.hitPointWorld )
            
            //repos.copy( wheel.raycastResult.hitPointWorld ).sub( chassisBody.position );
            //addImpulseAt( chassisBody, impulse, repos );
        }

        this.updateFriction(timeStep);
 
        var hitNormalWorldScaledWithProj = new Vector3();
        var fwd  = new Vector3();
        var vel = new Vector3();
        for (i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            velocityAt(chassisBody, wheel.chassisConnectionPointWorld, vel)
            // Hack to get the rotation in the correct direction
            var m = 1;
            switch(this.indexUpAxis){
            case 1:
                m = -1;
                break;
            }

            if (wheel.isInContact) {

                this.getVehicleAxisWorld(this.indexForwardAxis, fwd);
                var proj = Dot(fwd, wheel.raycastResult.hitNormalWorld);
                //hitNormalWorldScaledWithProj.copyFrom(wheel.raycastResult.hitNormalWorld).scaleInPlace(proj)
                hitNormalWorldScaledWithProj.copy(wheel.raycastResult.hitNormalWorld).multiplyScalar(proj)

                //fwd.subtractToRef(hitNormalWorldScaledWithProj, fwd);
                fwd.sub(hitNormalWorldScaledWithProj)

                var proj2 = Dot(fwd, vel);
                wheel.deltaRotation = m * proj2 * timeStep / wheel.radius;
            }

            if((wheel.sliding || !wheel.isInContact) && wheel.engineForce !== 0 && wheel.useCustomSlidingRotationalSpeed){
                // Apply custom rotation when accelerating and sliding
                wheel.deltaRotation = (wheel.engineForce > 0 ? 1 : -1) * wheel.customSlidingRotationalSpeed * timeStep;
            }

            // Lock wheels
            if(Math.abs(wheel.brake) > Math.abs(wheel.engineForce)){
                wheel.deltaRotation = 0;
            }

            //wheel.rotation += wheel.deltaRotation; // Use the old value
            wheel.rotation -= wheel.deltaRotation; // Use the old value
            wheel.deltaRotation *= 0.99; // damping of rotation when not in contact
        }
    }


    updateSuspension( deltaTime ) {

        var chassisBody = this.chassisBody;
        var chassisMass = bodyMass(chassisBody);
        var wheelInfos = this.wheelInfos;
        var numWheels = wheelInfos.length;


        for (var w_it = 0; w_it < numWheels; w_it++){
            var wheel = wheelInfos[w_it];

            if (wheel.isInContact){
                var force;

                // Spring
                var susp_length = wheel.suspensionRestLength;
                var current_length = wheel.suspensionLength;
                var length_diff = (susp_length - current_length);

                force = wheel.suspensionStiffness * length_diff * wheel.clippedInvContactDotSuspension;

                // Damper
                var projected_rel_vel = wheel.suspensionRelativeVelocity;
                var susp_damping;
                if (projected_rel_vel < 0) {
                    susp_damping = wheel.dampingCompression;
                } else {
                    susp_damping = wheel.dampingRelaxation;
                }
                force -= susp_damping * projected_rel_vel;

                wheel.suspensionForce = force * chassisMass;
                if (wheel.suspensionForce < 0) {
                    wheel.suspensionForce = 0;
                }
            } else {
                wheel.suspensionForce = 0;
            }
        }

    }

    updateFriction(timeStep){

        var surfNormalWS_scaled_proj = updateFriction_surfNormalWS_scaled_proj;

        //calculate the impulse, so that the wheels don't move sidewards
        var wheelInfos = this.wheelInfos;
        var numWheels = wheelInfos.length;
        var chassisBody = this.chassisBody;
        var forwardWS = updateFriction_forwardWS;
        var axle = updateFriction_axle;

        var numWheelsOnGround = 0;

        for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];

            var groundObject = wheel.raycastResult.body;
            if (groundObject){
                numWheelsOnGround++;
            }

            wheel.sideImpulse = 0;
            wheel.forwardImpulse = 0;
            if(!forwardWS[i]){
                forwardWS[i] = new Vector3();
            }
            if(!axle[i]){
                axle[i] = new Vector3();
            }
        }

     
        
        for (var i = 0; i < numWheels; i++){
            var wheel = wheelInfos[i];
    
            var groundObject = wheel.raycastResult.body;
    
            if (groundObject) {

                var axlei = axle[i];
                var wheelTrans = this.getWheelTransformWorld(i);
    
                // Get world axle
                TransformNormalToRef( directions[this.indexRightAxis], wheelTrans, axlei );
        
                var surfNormalWS = wheel.raycastResult.hitNormalWorld;
                var proj = Dot(axlei, surfNormalWS);
                
                //surfNormalWS.scaleToRef(proj, surfNormalWS_scaled_proj);
                //axlei.subtractToRef(surfNormalWS_scaled_proj, axlei);

                surfNormalWS_scaled_proj.copy(surfNormalWS).multiplyScalar(proj);
                axlei.sub(surfNormalWS_scaled_proj).normalize();
               
                CrossToRef(surfNormalWS, axlei, forwardWS[i]);
                forwardWS[i].normalize();
                //console.log(forwardWS[i])

                wheel.sideImpulse = resolveSingleBilateral(
                    chassisBody,
                    wheel.raycastResult.hitPointWorld,
                    groundObject,
                    wheel.raycastResult.hitPointWorld,
                    axlei
                );
                //if(i == 0) console.log(wheel.sideImpulse)
                wheel.sideImpulse *= sideFrictionStiffness2;
            }
        }



        var sideFactor = 1;
        var fwdFactor = 0.5;

        this.sliding = false;
        for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            var groundObject = wheel.raycastResult.body;

            var rollingFriction = 0;

            wheel.slipInfo = 1;
            if ( groundObject ) {
                var defaultRollingFrictionImpulse = 0;
                var maxImpulse = wheel.brake ? wheel.brake : defaultRollingFrictionImpulse;

                // btWheelContactPoint contactPt(chassisBody,groundObject,wheelInfraycastInfo.hitPointWorld,forwardWS[wheel],maxImpulse);
                // rollingFriction = calcRollingFriction(contactPt);
                rollingFriction = calcRollingFriction(chassisBody, groundObject, wheel.raycastResult.hitPointWorld, forwardWS[i], maxImpulse);

                rollingFriction += wheel.engineForce * timeStep;
                //rollingFriction *= 10

                // rollingFriction = 0;
                var factor = maxImpulse / rollingFriction;
                wheel.slipInfo *= factor;

                //console.log(rollingFriction)
            }

            //switch between active rolling (throttle), braking and non-active rolling friction (nthrottle/break)

            wheel.forwardImpulse = 0;
            wheel.skidInfo = 1;

            if ( groundObject ) {
                wheel.skidInfo = 1;

                let maximp = wheel.suspensionForce * timeStep * wheel.frictionSlip;
                let maximpSide = maximp;

                let maximpSquared = maximp * maximpSide;

                wheel.forwardImpulse = rollingFriction;//wheelInfo.engineForce* timeStep;

                let x = (wheel.forwardImpulse * fwdFactor) / wheel.forwardAcceleration;
                let y = (wheel.sideImpulse * sideFactor) / wheel.sideAcceleration;

                let impulseSquared = x * x + y * y;

                ///console.log(impulseSquared)

                wheel.sliding = false;
                if ( impulseSquared > maximpSquared ) {
                    this.sliding = true;
                    wheel.sliding = true;

                    let factor = maximp / Math.sqrt( impulseSquared );

                    wheel.skidInfo *= factor;
                }
            }
        }

        if (this.sliding) {
            for (let i = 0; i < numWheels; i++) {
                const wheel = wheelInfos[i];
                if (wheel.sideImpulse !== 0) {
                    if (wheel.skidInfo < 1){
                        wheel.forwardImpulse *= wheel.skidInfo;
                        wheel.sideImpulse *= wheel.skidInfo;
                    }
                }
            }
        }

        
        // apply the impulses // TODO !!!
        for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
    
            var rel_pos = new Vector3();
            rel_pos.copy( wheel.raycastResult.hitPointWorld ).sub( bodyPosition(chassisBody, new Vector3()) )
            //wheel.raycastResult.hitPointWorld.subtractToRef(bodyPosition(chassisBody, new Vector3()), rel_pos);
           
            if (wheel.forwardImpulse !== 0) {
                var impulse = new Vector3();
                impulse.copy(forwardWS[i]).multiplyScalar(wheel.forwardImpulse)
                //impulse.copyFrom(forwardWS[i]).scaleInPlace(wheel.forwardImpulse)
                addImpulseAt(chassisBody, impulse, wheel.raycastResult.hitPointWorld)
            
            }
    
            if (wheel.sideImpulse !== 0){
                var groundObject = wheel.raycastResult.body;
    
                var rel_pos2 = new Vector3();
               
                rel_pos2.copy(wheel.raycastResult.hitPointWorld).sub(bodyPosition(groundObject, new Vector3()))
                //wheel.raycastResult.hitPointWorld.subtractToRef(bodyPosition(groundObject, new Vector3()), rel_pos2);
                var sideImp = new Vector3();
                sideImp.copy(axle[i]).multiplyScalar(wheel.sideImpulse)
                //sideImp.copyFrom(axle[i]).scaleInPlace(wheel.sideImpulse)
    
                TransformNormalToRef(rel_pos, bodyTransform(chassisBody, new Matrix4()).invert(), rel_pos);
                rel_pos['xyz'[this.indexUpAxis]] *= wheel.rollInfluence;
                
                TransformNormalToRef(rel_pos, bodyTransform(chassisBody, new Matrix4()), rel_pos);
                addImpulseAt(chassisBody, sideImp, bodyPosition(chassisBody, new Vector3()).add(rel_pos));
            
                //sideImp.scaleToRef(-1, sideImp);
                sideImp.multiplyScalar(-1);

                // add impulse on staic object ???
                addImpulseAt(groundObject, sideImp, wheel.raycastResult.hitPointWorld);
                
            }
        }

    }


    updateWheelTransformWorld( wheel ){

        //wheel.isInContact = false;
        var chassisBody = this.chassisBody;
        const transform = bodyTransform( chassisBody, new Matrix4() )
      
        TransformCoordinatesToRef( wheel.chassisConnectionPointLocal, transform, wheel.chassisConnectionPointWorld )
        TransformNormalToRef( wheel.directionLocal, transform, wheel.directionWorld )
        TransformNormalToRef( wheel.axleLocal, transform, wheel.axleWorld )
        
    }

    updateWheelTransform( wheelIndex ){

        var up = tmpVec4;
        var right = tmpVec5;
        var fwd = tmpVec6;

        var wheel = this.wheelInfos[wheelIndex];
        this.updateWheelTransformWorld(wheel);

        up.copy( wheel.directionLocal ).multiplyScalar(-1)
        right.copy(wheel.axleLocal);
        CrossToRef( up, right, fwd );
        fwd.normalize();
        right.normalize();

        // Rotate around steering over the wheelAxle
        var steering = wheel.steering;
        var steeringOrn = new Quaternion();
        RotationAxisToRef( up, steering, steeringOrn )

        var rotatingOrn = new Quaternion();
        RotationAxisToRef(right, wheel.rotation, rotatingOrn)

        // World rotation of the wheel
        var q = wheel.quaternion;
        bodyOrientation( this.chassisBody, q )
        q.multiply(steeringOrn).multiply(rotatingOrn).normalize();

        // world position of the wheel
        var p = wheel.position;
        p.copy( wheel.directionWorld )
        p.multiplyScalar( wheel.suspensionLength );
        p.add( wheel.chassisConnectionPointWorld );

        this.wheelMeshes[wheelIndex].position.copy(wheel.position)
        this.wheelMeshes[wheelIndex].quaternion.copy(wheel.quaternion)
        this.wheelMeshes[wheelIndex].updateMatrix();

    }

    getWheelTransformWorld(wheelIndex) {
        return this.wheelMeshes[wheelIndex].matrixWorld ;
    }



}




const Utilsdefaults = (options, defaults) => {
    options = options || {};

    for(var key in defaults){
        if(!(key in options)){
            options[key] = defaults[key];
        }
    }

    return options;
};


var chassis_velocity_at_contactPoint = new Vector3();
var relpos = new Vector3();

class WheelInfo {
    constructor( options ){

        options = Utilsdefaults(options, {
            chassisConnectionPointLocal: new Vector3(),
            chassisConnectionPointWorld: new Vector3(),
            directionLocal: new Vector3(),
            directionWorld: new Vector3(),
            axleLocal: new Vector3(),
            axleWorld: new Vector3(),
            suspensionRestLength: 1,
            suspensionMaxLength: 2,
            radius: 1,
            suspensionStiffness: 100,
            dampingCompression: 10,
            dampingRelaxation: 10,
            frictionSlip: 10000,
            forwardAcceleration: 1,
            sideAcceleration: 1,
            steering: 0,
            rotation: 0,
            deltaRotation: 0,
            rollInfluence: 0.01,
            maxSuspensionForce: Number.MAX_VALUE,
            isFrontWheel: true,
            clippedInvContactDotSuspension: 1,
            suspensionRelativeVelocity: 0,
            suspensionForce: 0,
            skidInfo: 0,
            suspensionLength: 0,
            maxSuspensionTravel: 1,
            useCustomSlidingRotationalSpeed: false,
            customSlidingRotationalSpeed: -0.1
        });

        this.maxSuspensionTravel = options.maxSuspensionTravel;
        this.customSlidingRotationalSpeed = options.customSlidingRotationalSpeed;
        this.useCustomSlidingRotationalSpeed = options.useCustomSlidingRotationalSpeed;
        this.sliding = false;
        this.chassisConnectionPointLocal = options.chassisConnectionPointLocal.clone();
        this.chassisConnectionPointWorld = options.chassisConnectionPointLocal.clone();
        this.directionLocal = options.directionLocal.clone();
        this.directionWorld = options.directionLocal.clone();
        this.axleLocal = options.axleLocal.clone();
        this.axleWorld = options.axleLocal.clone();
        this.suspensionRestLength = options.suspensionRestLength;
        this.suspensionMaxLength = options.suspensionMaxLength;
        this.radius = options.radius;
        this.suspensionStiffness = options.suspensionStiffness;
        this.dampingCompression = options.dampingCompression;
        this.dampingRelaxation = options.dampingRelaxation;
        this.frictionSlip = options.frictionSlip;
        this.forwardAcceleration = options.forwardAcceleration;
        this.sideAcceleration = options.sideAcceleration;
        this.steering = 0;
        this.rotation = 0;
        this.deltaRotation = 0;
        this.rollInfluence = options.rollInfluence;
        this.maxSuspensionForce = options.maxSuspensionForce;
        this.engineForce = 0;
        this.brake = 0;
        this.isFrontWheel = options.isFrontWheel;
        this.clippedInvContactDotSuspension = 1;
        this.suspensionRelativeVelocity = 0;
        this.suspensionForce = 0;
        this.skidInfo = 0;
        this.suspensionLength = 0;
        this.sideImpulse = 0;
        this.forwardImpulse = 0;
        this.raycastResult = new RaycastResult();
        //this.raycastDirectionWorld = new Vector3()
        //this.worldTransform = new TransformNode("")
        //this.worldTransform.rotationQuaternion = new THREE.Quaternion()

        this.position = new Vector3().copy(this.chassisConnectionPointLocal)
        this.quaternion = new Quaternion()

        this.isInContact = false;
        this.chassisBody = null;
        this.ray = null;

    }

    castRay( r ){

        if(r.hit){

            this.isInContact = true;
            //if( this.isInContact ){
            let hitDistance = r.distance
            this.raycastResult.hitPointWorld.fromArray( r.point )
            this.raycastResult.hitNormalWorld.fromArray( r.normal )
            this.raycastResult.body = root.motor.byName( r.body )

            this.suspensionLength = hitDistance - this.radius
            // clamp on max suspension travel
            let minSuspensionLength = this.suspensionRestLength - this.maxSuspensionTravel;
            let maxSuspensionLength = this.suspensionRestLength + this.maxSuspensionTravel;
            if (this.suspensionLength < minSuspensionLength) {
                this.suspensionLength = minSuspensionLength;
            }
            if (this.suspensionLength > maxSuspensionLength) {
                this.suspensionLength = maxSuspensionLength;
                this.raycastResult.reset();
            }
            let denominator = Dot(this.raycastResult.hitNormalWorld,this.directionWorld);

            //var chassis_velocity_at_contactPoint = new Vector3();
            velocityAt( this.chassisBody, this.raycastResult.hitPointWorld, chassis_velocity_at_contactPoint )
            var projVel = Dot(this.raycastResult.hitNormalWorld, chassis_velocity_at_contactPoint )
            //let projVel = this.raycastResult.hitNormalWorld.dot( chassis_velocity_at_contactPoint )

            if (denominator >= -0.1) {
                this.suspensionRelativeVelocity = 0;
                this.clippedInvContactDotSuspension = 1 / 0.1;
            } else {
                let inv = -1 / denominator;
                this.suspensionRelativeVelocity = projVel * inv;
                this.clippedInvContactDotSuspension = inv;
            }

        } else {

            this.isInContact = false;

            //put wheel info as in rest position
            this.suspensionLength = this.suspensionRestLength + 0 * this.maxSuspensionTravel;
            this.suspensionRelativeVelocity = 0.0;
            this.raycastResult.hitNormalWorld.copy( this.directionWorld ).multiplyScalar(-1)
            this.clippedInvContactDotSuspension = 1.0;

        }

        // change ray lenght on next frame ?
        /*let raylen = this.suspensionRestLength + this.radius;
        this.ray.setRay({end:[  this.chassisConnectionPointLocal.x, -raylen, this.chassisConnectionPointLocal.z ]})
        */

    }

    updateWheel( chassis ){

        let raycastResult = this.raycastResult;
    
        if (this.isInContact){
            let project = raycastResult.hitNormalWorld.dot(raycastResult.directionWorld);
            //var project = Dot(raycastResult.hitNormalWorld, raycastResult.directionWorld);
            relpos.copy( raycastResult.hitPointWorld ).sub( chassis.position )
            //raycastResult.hitPointWorld.subtractToRef( bodyPosition(chassis, new Vector3()), relpos);
            velocityAt( chassis, relpos, chassis_velocity_at_contactPoint );
           // velocityAt(chassis, raycastResult.hitPointWorld, relpos);
            //var projVel = Dot(raycastResult.hitNormalWorld, chassis_velocity_at_contactPoint );
            let projVel = raycastResult.hitNormalWorld.dot( chassis_velocity_at_contactPoint );
            if (project >= -0.1) {
                this.suspensionRelativeVelocity = 0.0;
                this.clippedInvContactDotSuspension = 1.0 / 0.1;
            } else {
                let inv = -1 / project;
                this.suspensionRelativeVelocity = projVel * inv;
                this.clippedInvContactDotSuspension = inv;
            }
    
        } else {
            // Not in contact : position wheel in a nice (rest length) position
            raycastResult.suspensionLength = this.suspensionRestLength;
            this.suspensionRelativeVelocity = 0.0;
            raycastResult.hitNormalWorld.copy(raycastResult.directionWorld).scaleInPlace(-1)
            this.clippedInvContactDotSuspension = 1.0;
        }
    }
}






class RaycastResult {
    constructor(){
        this.body = null;
        this.hitPointWorld = new Vector3()
        this.hitNormalWorld = new Vector3()
        this.directionWorld = new Vector3()
    }
    reset(){
        this.body = null;
        this.hitPointWorld = new Vector3()
        this.hitNormalWorld = new Vector3()
        this.directionWorld = new Vector3()
    }
}


const bodyMass = (body) => ( body.mass )
const bodyInvMass = (body) => ( body.mass > 0 ? 1.0 / body.mass : 0 )

const bodyPosition = (body, res) => ( res.copy( body.position ) )
const bodyLinearVelocity = (body, res) => ( res.copy( body.velocity ) )
const bodyAngularVelocity = (body, res) => ( res.copy( body.angular ) )
const bodyTransform = (body, res) => ( res.copy( body.matrixWorld ) )
const bodyOrientation = (body, res) => ( res.copy( body.quaternion ) )



// The force applies the given energy overtime, while the impulse applies the given energy immediately


const addImpulseAt = ( body, impulse, point ) => {

    //impulse = body.worldToLocal( impulse )
    //root.motor.change({ name:body.name, impulse:impulse.toArray() })
    //point = body.worldToLocal( point )
    //impulse = body.localToWorld( impulse )
    //point = body.localToWorld( point )
    //root.motor.change({ name:body.name, worldForce
    //console.log({ name:body.name, impulse:impulse.toArray(), impulseCenter:point.toArray() })
    root.motor.change({ name:body.name, impulse:impulse.toArray(), impulseCenter:point.toArray() })
}

const addForceAt = (body, force, point) => {
    root.motor.change({ name:body.name, force:force.toArray(), location:point.toArray() })
}

const velocityAt = (body, pos, res) => {
    
    res.copy( pos ).sub( body.position );
    res.crossVectors( body.angular, res );
    res.add( body.velocity )
    return res;

}

const bodyInertiaWorld = ( body, res ) => {

    res.copy( body.inertia )//.applyNormalMatrix( body.matrixWorld );
    //console.log(res)
    TransformNormalToRef(res, body.matrixWorld, res)
    res.x = res.x > 0 ? 1.0 / res.x : 0
    res.y = res.y > 0 ? 1.0 / res.y : 0
    res.z = res.z > 0 ? 1.0 / res.z : 0
    return res
}


// vector3 function 

const Dot = ( v, w ) => ( v.x * w.x + v.y * w.y + v.z * w.z )

const CrossToRef = ( left, right, result ) => {
    const x = left.y * right.z - left.z * right.y;
    const y = left.z * right.x - left.x * right.z;
    const z = left.x * right.y - left.y * right.x;
    result.set( x, y, z );
    return result
}

const TransformCoordinatesToRef = ( v, t, result ) => {

    //result.copy(v).applyMatrix4(t)

    const x = v.x, y = v.y, z = v.z;
    const m = t.elements;
    const rx = x * m[0] + y * m[4] + z * m[8] + m[12];
    const ry = x * m[1] + y * m[5] + z * m[9] + m[13];
    const rz = x * m[2] + y * m[6] + z * m[10] + m[14];
    const rw = 1 / (x * m[3] + y * m[7] + z * m[11] + m[15]);

    result.x = rx * rw;
    result.y = ry * rw;
    result.z = rz * rw;
    return result;

}

const TransformNormalToRef = ( v, t, result ) => {

    const x = v.x, y = v.y, z = v.z;
    const m = t.elements;
    result.x = x * m[0] + y * m[4] + z * m[8];
    result.y = x * m[1] + y * m[5] + z * m[9];
    result.z = x * m[2] + y * m[6] + z * m[10];
    return result//.normalize();

}

// Quaternion function 

const RotationAxisToRef = ( axis, angle, result ) => {

    const sin = Math.sin(angle / 2);
    axis.normalize();
    result.w = Math.cos(angle / 2);
    result.x = axis.x * sin;
    result.y = axis.y * sin;
    result.z = axis.z * sin;
    return result;

}









function calcRollingFriction(body0, body1, frictionPosWorld, frictionDirectionWorld, maxImpulse) {
    var j1 = 0;
    var contactPosWorld = frictionPosWorld;

    var vel1 = calcRollingFriction_vel1;
    var vel2 = calcRollingFriction_vel2;
    var vel = calcRollingFriction_vel;
   
    velocityAt(body0, contactPosWorld, vel1);
    velocityAt(body1, contactPosWorld, vel2);
    //vel1.subtractToRef(vel2, vel);
    //vel1.sub(vel2)
    vel.copy(vel1).sub(vel2)

    var vrel = Dot(frictionDirectionWorld, vel);

    var denom0 = computeImpulseDenominator(body0, frictionPosWorld, frictionDirectionWorld);
    var denom1 = computeImpulseDenominator(body1, frictionPosWorld, frictionDirectionWorld);
    var relaxation = 1;
    var jacDiagABInv = relaxation / (denom0 + denom1);

    // calculate j that moves us to zero relative velocity
    j1 = -vrel * jacDiagABInv;

    if (maxImpulse < j1) {
        j1 = maxImpulse;
    }
    if (j1 < -maxImpulse) {
        j1 = -maxImpulse;
    }

    return j1;
}



var computeImpulseDenominator_r0 = new Vector3();
var computeImpulseDenominator_c0 = new Vector3();
var computeImpulseDenominator_vec = new Vector3();
var computeImpulseDenominator_m = new Vector3();

function computeImpulseDenominator(body, pos, normal) {

    var r0 = computeImpulseDenominator_r0;
    var c0 = computeImpulseDenominator_c0;
    var vec = computeImpulseDenominator_vec;
    var m = computeImpulseDenominator_m;

    //pos.subtractToRef(bodyPosition(body, new Vector3()), r0);
    r0.copy(pos).sub(bodyPosition(body, new Vector3()))
    CrossToRef(r0, normal, c0);
    // ???
    //bodyInertiaWorld(body, new Vector3()).multiplyToRef(c0, m)
    //bodyInertiaWorld( body, m ).multiply(c0)
    m.copy( bodyInertiaWorld(body, new Vector3()) ).multiply(c0)
    

    CrossToRef(m, r0, vec);

    return bodyInvMass(body) + Dot(normal, vec);
}



var resolveSingleBilateral_vel1 = new Vector3();
var resolveSingleBilateral_vel2 = new Vector3();
var resolveSingleBilateral_vel = new Vector3();



function resolveSingleBilateral(body1, pos1, body2, pos2, normal){

    var normalLenSqr = normal.lengthSq()
    if (normalLenSqr > 1.1){
        return 0; // no impulse
    }
    var vel1 = resolveSingleBilateral_vel1;
    var vel2 = resolveSingleBilateral_vel2;
    var vel = resolveSingleBilateral_vel;
   
    velocityAt(body1, pos1, vel1)
    velocityAt(body2, pos2, vel2)
    
    //vel1.sub(vel2);
    vel.copy(vel1).sub(vel2);

    var rel_vel = Dot(normal, vel);

    var contactDamping = 0.1;
    var massTerm = 1 / (bodyInvMass(body1) + bodyInvMass(body2));
    var impulse = - contactDamping * rel_vel * massTerm;

    //console.log(bodyInvMass(body1) + bodyInvMass(body2))

    return impulse;
}