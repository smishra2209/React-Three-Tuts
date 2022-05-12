import React, { useRef, useEffect, useFrame, Suspense } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Canvas, useLoader } from 'react-three-fiber'
import testImg from './testimage2.png'
import * as THREE from 'three'
import Orbit from './components/orbit';
import {BrightnessContrast, EffectComposer} from "@react-three/postprocessing";
import { useParams } from 'react-router-dom'

const loader = new THREE.TextureLoader();

export default function Model(props) {
    console.log("Inside Model")
    console.log(props)
    var params = useParams();
    console.log(params)
    const group = useRef()
    //const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/steve.gltf")
    const canvas = document.createElement('canvas');
    canvas.height = 64;
    canvas.width = 64;
    const ctx = canvas.getContext('2d');
    var image = new Image();
    var renderer = new THREE.WebGLRenderer( { antialias: true } );
    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
    console.log(group)
        
    const headMaterials = [
        //new THREE.MeshPhongMaterial
        new THREE.MeshPhongMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/head_right.png') }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/head_left.png')}), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/head_top.png')}), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/head_bottom.png')}), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/head_front.png')}), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/head_back.png')}), //back side
    ];
    const torsoMaterials = [
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/torso_right.png') }), //right side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/torso_left.png')}), //left side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/torso_top.png')}), //top side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/torso_bottom.png')}), //bottom side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/torso_front.png')}), //front side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/torso_back.png')}), //back side
    ];
    const leftArmMaterials = [
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/left_arm_right.png') }), //right side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/left_arm_left.png')}), //left side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/left_arm_top.png')}), //top side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/left_arm_bottom.png')}), //bottom side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/left_arm_front.png')}), //front side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/left_arm_front.png')}), //back side
    ];
    const rightArmMaterials = [
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/right_arm_right.png') }), //right side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/right_arm_left.png')}), //left side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/right_arm_top.png')}), //top side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/right_arm_bottom.png')}), //bottom side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/right_arm_front.png')}), //front side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/right_arm_back.png')}), //back side
    ];
    const leftLegMaterials = [
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/left_leg_right.png') }), //right side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/left_leg_left.png')}), //left side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/left_leg_top.png')}), //top side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/left_leg_bottom.png')}), //bottom side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/left_leg_front.png')}), //front side
        new THREE.MeshBasicMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/left_leg_back.png')}), //back side
    ];
    const rightLegMaterials = [
        new THREE.MeshPhongMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/right_leg_right.png') }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/right_leg_left.png')}), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/right_leg_top.png')}), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/right_leg_bottom.png')}), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/right_leg_front.png'), metal: false}), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(process.env.PUBLIC_URL + 'skin/right_leg_back.png')}), //back side
    ];
    return (
        <>        
            <group ref={group} {...props} dispose={null}>
                <mesh scale={[8,8,8]} material={headMaterials} position={[0,10,0]}>
                    <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                </mesh>
                <mesh scale={[8,12,4]} material={torsoMaterials} position={[0,0,0]}>
                    <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                </mesh>
                <mesh scale={[4,12,4]} material={leftArmMaterials} position={[-6,0,0]}>
                    <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                </mesh>
                <mesh scale={[4,12,4]} material={rightArmMaterials} position={[6,0,0]}>
                    <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                </mesh>
                <mesh scale={[4,12,4]} material={leftLegMaterials} position={[-2,-12,0]}>
                    <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                </mesh>
                <mesh scale={[4,12,4]} material={rightLegMaterials} position={[2,-12,0]}>
                    <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                </mesh>
            </group>            
      </>
    )
}

function getTexture(url){
    var texture = loader.load(url);
    texture.encoding = THREE.sRGBEncoding;
    texture.magFilter = THREE.NearestFilter;
    return texture;
}

//useGLTF.preload(process.env.PUBLIC_URL + "/steve.gltf")