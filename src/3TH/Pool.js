import {
    Texture, TextureLoader, sRGBEncoding, RepeatWrapping, NearestFilter, EquirectangularReflectionMapping
} from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';
import { LZMA } from '../libs/lzma.js';

import { GlbTool } from './utils/GlbTool.js';

/** __
*    _)_|_|_
*   __) |_| | 2023
* @author lo.th / https://github.com/lo-th
*/

export const Pool = {
    msg:'',
    inLoad:false,
    clip:[],
    data: new Map(),
    tmp: [],
    extraTexture: [],
    dracoLoader: null,
    dracoLoaderType:'js',

    dispose:() => {

        //console.log('clear extra texture !!')
        let i = Pool.extraTexture.length
        while(i--){
            Pool.get( Pool.extraTexture[i], 'T' ).dispose();
            Pool.delete( Pool.extraTexture[i], 'T' )
        }
        Pool.extraTexture = [];
    
    },
    
    createElementNS: ( name ) => ( document.createElementNS( 'http://www.w3.org/1999/xhtml', name ) ),
    exist: ( name, type = '' ) => ( Pool.get( name, type ) ? true : false ),
    delete: ( name, type = '' ) => ( Pool.data.delete( Pool.prefix( type ) + name ) ),
    get: ( name, type = '' ) => ( Pool.data.get( Pool.prefix( type ) + name ) ),

    set: ( name, node, type = '' ) => {
        if( node.isMaterial ){ 
            type = 'material';
            node.name = name;
        }
        if( node.isTexture ) type = 'texture';
        if( node.isObject3D ) type = 'object3d'
        
        if( Pool.get( name, type ) ) return
        Pool.data.set( Pool.prefix( type ) + name, node );
    },

    getScript: ( name ) => ( Pool.data.get( Pool.prefix( 'js' ) + name ) ),

    getMaterials:( obj, toArray ) => {
        if( typeof obj === 'string' ) obj = Pool.get( obj, 'O' );
        return GlbTool.getMaterial( obj, toArray )
    },

    getMesh:( obj ) => {
        if( typeof obj === 'string' ) obj = Pool.get( obj, 'O' );
        return GlbTool.getMesh( obj )
    },

    getGroup:( obj, autoMesh, autoMaterial ) => {
        if( typeof obj === 'string' ) obj = Pool.get( obj, 'O' );
        return GlbTool.getGroup( obj, autoMesh, autoMaterial )
    },

    add: ( name, node, type ) => {
        Pool.set( name, node, type );
        Pool.next();
        //console.log( name, type )
    },

    getMaterial:( name ) => ( Pool.data.get( 'M_' + name ) ),

    //getMap:( name, o = {} ) => ( Pool.getTexture(name, o) ),

    directTexture:( url, o = {} ) => {

        if( !Pool.loaderMap ) Pool.loaderMap = new TextureLoader();

        let name = url.substring( url.lastIndexOf('/')+1, url.lastIndexOf('.') );

        if( Pool.exist( name, 'texture') ) return Pool.get( name, 'texture' );
            
        return Pool.loaderMap.load( url, function ( txt ) { 

            Pool.setTextureOption( txt, o );
            //Pool.set( name , txt );
            Pool.data.set( 'T_' + name, txt );
            Pool.extraTexture.push( name );
            if( o.callback ) o.callback()
            return txt
            
        })

    },

    getTexture:( name, o = {} ) => {

        let t = Pool.get( name, 'texture' )
        if(!t){
            let im = Pool.data.get( 'I_' + name )
            if(!im) return null
            t = new Texture( im )
            if( name.search('_c') !== -1) o.encoding = true
        }
        Pool.setTextureOption( t, o )
        return t
    },

    setTextureOption:( t, o = {} ) => {
        if( o.encoding ) t.encoding = sRGBEncoding;
        t.flipY = ( o.flipY || o.flip ) !== undefined ? o.flipY : false
        if( o.anisotropy !== undefined ) t.anisotropy = o.anisotropy
        if( o.generateMipmaps !== undefined ) t.generateMipmaps = o.generateMipmaps
        if( o.repeat ){
            t.repeat.fromArray( o.repeat );
            t.wrapS = t.wrapT = RepeatWrapping;
        }
        if( o.filter ){
            if( o.filter === 'near' ){
                t.minFilter = NearestFilter;
                t.magFilter = NearestFilter;
            }
        }
        t.needsUpdate = true;
    },

    prefix:( type ) => {
        let p = ''
        switch( type ){
            case 'S': case 'sound': case 'mp3': case 'wav': case 'ogg': p = 'S_';  break;
            case 'I': case 'image': case 'jpg': case 'png': p = 'I_';  break;
            case 'E': case 'hdr': case 'env': p = 'T_';  break;
            case 'J': case 'json': p = 'J_';  break;
            case 'JS': case 'js': p = 'JS_';  break;
            
            case 'O': case 'object3d': p = 'O_';  break;
            case 'M': case 'material': p = 'M_';  break;
            case 'T': case 'texture': p = 'T_';  break;
        }
        return p
    },

    ///

    log: ( msg ) => {},

    ///

    load: ( Urls, Callback, Path = '', msg = '' ) => {

        Pool.msg = msg;

        let urls = [];
        let callback = Callback || function(){};
        let start = ( typeof performance === 'undefined' ? Date : performance ).now();

        if ( typeof Urls === 'string' || Urls instanceof String ) urls.push( Urls );
        else urls = urls.concat( Urls );

        Pool.tmp.push( { urls:urls, path:Path, callback:callback, start:start } );

        if( !Pool.inLoad ) Pool.loadOne();

    },

    loadOne: () => {

        Pool.inLoad = true;

        let url = Pool.tmp[0].path + Pool.tmp[0].urls[0];
        let name = url.substring( url.lastIndexOf('/')+1, url.lastIndexOf('.') );
        let type = url.substring( url.lastIndexOf('.')+1 ).toLowerCase();

        if( Pool.exist( name, type ) ) Pool.next();
        else Pool.loading( url, name, type );

    },

    next: () => {

        Pool.tmp[0].urls.shift();

        if( Pool.tmp[0].urls.length === 0 ){

            let end = Math.floor(( typeof performance === 'undefined' ? Date : performance ).now() - Pool.tmp[0].start);

            //if( end !== 0 ) console.log( 'pool load time:', end, 'ms' );
            
            Pool.tmp[0].callback();
            Pool.tmp.shift();

            if( Pool.tmp.length > 0 ) Pool.loadOne();
            else Pool.inLoad = false;

        } else {

            Pool.loadOne();

        }

    },

    loading: ( url, name, type ) => {

        Pool.log( Pool.msg )

        switch( type ){
            case 'glb': case 'gltf': Pool.load_GLTF( url, name );  break;
            case 'fbx': case 'FBX': Pool.load_FBX( url, name ); break;
            case 'hdr': Pool.load_RGBE( url, name ); break;
            default: Pool.extand( url, name, type );
        }

    },

    extand: ( url, name, type ) => {

        if( !Pool.XHTTP ) Pool.XHTTP = new XMLHttpRequest();
        const xml = Pool.XHTTP;

        xml.open('GET', url, true );
        if(type === "json") xml.overrideMimeType( "application/json");

        switch( type ){

            case 'hex': case 'wasm': case 'mp3': case 'wav': case 'ogg': case 'jpg': case 'png': xml.responseType = "arraybuffer"; break;
            case 'bvh': case 'glsl': case 'js':  case 'json': xml.responseType = 'text'; break;

        }

        xml.onreadystatechange = function () {

            if ( xml.readyState === 4 ) {
            	if (xml.status >= 300) {
                    console.log("Error, status code = " + xml.status)
                } else {
                	Pool.direct( xml.response, name, type )
                    //Pool.add( name, JSON.parse( xhr.responseText ), 'json' )
                }
                //if ( Pool.XML.status === 200 || Pool.XML.status === 0 ) Pool.load_direct( Pool.XML.response, name, type );
                //else console.error( "Couldn't load ["+ name + "] [" + Pool.XML.status + "]" );
            }

        }

        if ('onprogress' in xml){
            xml.onprogress = function(e) {
                //console.log( parseInt((e.loaded / e.total) * 100) );
            }
        }

        xml.send(null);

    },

    direct: ( response, name, type ) => {

        switch( type ){
        	case 'jpg': case 'png':
        	    let img = Pool.createElementNS('img');
	            img.src = window.URL.createObjectURL( new Blob([response]) );
	            Pool.add( name, img, 'image' );
        	break;
            case 'mp3': case 'wav': case 'ogg':
                AudioContext.getContext().decodeAudioData(
                    response.slice( 0 ),
                    function( buffer ){ Pool.add( name, buffer, 'sound' ); },
                    function( error ){ console.error('decodeAudioData error', error); }
                );
            break;
            case 'hex': LzmaUnpack.parse( response, function ( result ) { Pool.add( name, result, type ); }); break;
            case 'wasm': Pool.add( name, new Uint8Array( response ), type ); break;
            case 'json': Pool.add( name, JSON.parse( response ), type ); break;
            case 'js': Pool.add( name, response, type ); break;
            default: Pool.add( name, response, type );

        }

    },

    //////////////////////////////////

    loaderDRACO: () => {

        if( !Pool.dracoLoaderType ){
            if ( navigator.userAgentData ) Pool.dracoLoaderType = 'wasm'
            else {
              let ua = navigator.userAgent.toLowerCase()
              Pool.dracoLoaderType = (ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1) ? 'js' : 'wasm'
            }
        }

        Pool.dracoLoader = new DRACOLoader().setDecoderPath( './src/libs/draco/' )
        Pool.dracoLoader.setDecoderConfig( { type: Pool.dracoLoaderType } )
        return Pool.dracoLoader

    },

    loaderGLTF: () => {

        if( !Pool.GLTF ) Pool.GLTF = new GLTFLoader()
        return Pool.GLTF

    },

    loaderFBX: () => {

        if( !Pool.FBX ) Pool.FBX = new FBXLoader()
        return Pool.FBX

    },

    loaderRGBE: () => {

        if( !Pool.RGBE ) Pool.RGBE = new RGBELoader()
        return Pool.RGBE

    },

    //////////////////////////////////

    load_GLTF: ( url, name ) => {

        Pool.loaderGLTF().setDRACOLoader( Pool.loaderDRACO() ).load( url, function ( gltf ) { 
            Pool.add( name, gltf.scene )
            Pool.dracoLoader.dispose()
        })

    },

    load_FBX: ( url, name ) => {

        Pool.loaderFBX().load( url, function ( node ) { Pool.add( name, node ) })

    },

    load_RGBE: ( url, name ) => {

        Pool.loaderRGBE().load( url, function ( texture ) {
            texture.mapping = EquirectangularReflectionMapping; 
            Pool.add( name, texture ) 
        })

    }

}