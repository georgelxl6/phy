import { root, math } from './root.js';


let Nb = 0

export class Button {

	constructor ( o={} ) {

		this.down = false



		this.time = o.time || 250

		this.p = o.pos || [0,0,0]

		this.type = o.type || 'box'
		this.name = o.name || 'button' + Nb++
		this.pos = o.pos || [0,0,0]
		this.size = o.size || [1,1,1];
		this.radius = o.radius || 0;
		this.axe = o.axe !== undefined ? o.axe : 1 


		this.decal = this.type === 'sphere'? this.size[1]*0.5 : (this.size[1]*0.5) - this.radius

		if( this.type !== 'sphere' ) this.pos[this.axe]+=this.decal


		this.origin = this.pos[this.axe]

		this.range = [ this.origin-this.decal - (this.radius*2), this.origin ]

		this.value = this.origin
		this.target = this.origin

		this.speed = (this.size[this.axe]/3) / (this.size[this.axe])

	

		this.callback = function(){ 
			console.log("action down") 
		}

		if( o.callback ){ 
			this.callback = o.callback 
			delete o.callback
		}

		o.button = true
		o.pos = this.pos 
		if(!o.material) o.material = 'button'
		o.kinematic = true
		o.mask = 1

		this.timeout = null

		this.b = root.motor.add( o )

		this.b.userData['action'] = this.action.bind(this)
		this.b.userData['out'] = this.out.bind(this)

	}

	action( p ){

		if(this.down) return// this.out()
		this.down = true

	    this.target = this.range[0]//this.origin - this.decal

	    
	    root.motor.explosion( p || this.p, this.size[0]*2, 0.01 )
	   // this.pos[this.axe] -= this.decal
		//root.motor.change( { name:this.b.name, pos:this.pos } );
		this.callback()
		

		//this.timeout =  setTimeout( this.out.bind(this), this.time )

	}

	out(){
		if(!this.down) return
		this.down = false
	    this.target = this.range[1]//this.origin + this.decal
	    root.motor.explosion( this.p, this.size[0]*2, 0.01 )

	    //this.pos[this.axe] += this.decal
		//root.motor.change( {name:this.b.name, pos:this.pos} );
	}

	dispose(){
		//if( this.timeout ) clearTimeout( this.timeout );
	}

	update(){

		if( this.value !== this.target ){

			//let side = this.target > this.value ? 1 : -1

			this.value = math.lerp( this.value, this.target, this.speed )

			//this.value += 0.1 * side

			let t = math.nearEquals( this.value, this.target, 0.01)

			if(!t){
			    this.pos[this.axe] = this.value
			    root.motor.change( {name:this.b.name, pos:this.pos} );
			} else {
				this.value = this.target
			}


		}


	}

}