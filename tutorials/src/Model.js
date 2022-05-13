import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three'

export default function Model(props) {
    const group = useRef()

    const headMaterials = [
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['head_right']) }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['head_left']) }), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['head_top']) }), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['head_bottom']) }), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['head_front']) }), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['head_back']) }), //back side
    ];
    const torsoMaterials = [
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['torso_right']) }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['torso_left']) }), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['torso_top']) }), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['torso_bottom']) }), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['torso_front']) }), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['torso_back']) }), //back side
    ];
    const leftArmMaterials = [
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_arm_right']) }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_arm_left']) }), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_arm_top']) }), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_arm_bottom']) }), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_arm_front']) }), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_arm_front']) }), //back side
    ];
    const rightArmMaterials = [
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_arm_right']) }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_arm_left']) }), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_arm_top']) }), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_arm_bottom']) }), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_arm_front']) }), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_arm_back']) }), //back side
    ];
    const leftLegMaterials = [
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_leg_right']) }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_leg_left']) }), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_leg_top']) }), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_leg_bottom']) }), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_leg_front']) }), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_leg_back']) }), //back side
    ];
    const rightLegMaterials = [
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_leg_right']) }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_leg_left']) }), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_leg_top']) }), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_leg_bottom']) }), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_leg_front']) }), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_leg_back']) }), //back side
    ];
    const headMaterials_outer = [
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['head_right_outer']), transparent: true }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['head_left_outer']), transparent: true }), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['head_top_outer']), transparent: true }), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['head_bottom_outer']), transparent: true }), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['head_front_outer']), transparent: true }), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['head_back_outer']), transparent: true }), //back side
    ];
    const torsoMaterials_outer = [
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['torso_right_outer']), transparent: true }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['torso_left_outer']), transparent: true }), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['torso_top_outer']), transparent: true }), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['torso_bottom_outer']), transparent: true }), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['torso_front_outer']), transparent: true }), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['torso_back_outer']), transparent: true }), //back side
    ];
    const leftArmMaterials_outer = [
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_arm_right_outer']), transparent: true }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_arm_left_outer']), transparent: true }), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_arm_top_outer']), transparent: true }), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_arm_bottom_outer']), transparent: true }), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_arm_front_outer']), transparent: true }), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_arm_front_outer']), transparent: true }), //back side
    ];
    const rightArmMaterials_outer = [
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_arm_right_outer']), transparent: true }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_arm_left_outer']), transparent: true }), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_arm_top_outer']), transparent: true }), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_arm_bottom_outer']), transparent: true }), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_arm_front_outer']), transparent: true }), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_arm_back_outer']), transparent: true }), //back side
    ];
    const leftLegMaterials_outer = [
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_leg_right_outer']), transparent: true }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_leg_left_outer']), transparent: true }), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_leg_top_outer']), transparent: true }), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_leg_bottom_outer']), transparent: true }), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_leg_front_outer']), transparent: true }), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['left_leg_back_outer']), transparent: true }), //back side
    ];
    const rightLegMaterials_outer = [
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_leg_right_outer']), transparent: true }), //right side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_leg_left_outer']), transparent: true }), //left side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_leg_top_outer']), transparent: true }), //top side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_leg_bottom_outer']), transparent: true }), //bottom side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_leg_front_outer']), transparent: true }), //front side
        new THREE.MeshPhongMaterial({ map: getTexture(props.values['right_leg_back_outer']), transparent: true }), //back side
    ];
    const head = useRef();
    const torso = useRef();
    const leftArm = useRef();
    const rightArm = useRef();
    const leftLeg = useRef();
    const rightLeg = useRef();

    var rot = 0.015;
    var addA = true;
    var addB = false;

    useFrame(() => {

        if (addA) {
            rightLeg.current.rotation.x += rot
            leftArm.current.rotation.x += rot
            if (rightLeg.current.rotation.x >= 0.2) {
                addA = false
            }
        } else {
            rightLeg.current.rotation.x -= rot
            leftArm.current.rotation.x -= rot
            if (rightLeg.current.rotation.x <= -0.2) {
                addA = true
            }
        }
        if (addB) {
            leftLeg.current.rotation.x += rot
            rightArm.current.rotation.x += rot
            if (leftLeg.current.rotation.x >= 0.2) {
                addB = false
            }
        } else {
            leftLeg.current.rotation.x -= rot
            rightArm.current.rotation.x -= rot
            if (leftLeg.current.rotation.x <= -0.2) {
                addB = true
            }
        }
    })
    return (
        <>
            <group ref={group} {...props} dispose={null}>
                <group ref={head}>
                    <mesh scale={[8, 8, 8]} material={headMaterials} position={[0, 10, 0]}>
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    </mesh>
                    <mesh scale={[8.3, 8.3, 8.3]} material={headMaterials_outer} position={[0, 10, 0]}>
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    </mesh>
                </group>

                <group ref={torso}>
                    <mesh scale={[8, 12, 4]} material={torsoMaterials} position={[0, 0, 0]}>
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    </mesh>
                    <mesh scale={[8.3, 12.3, 4.3]} material={torsoMaterials_outer} position={[0, 0, 0]}>
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    </mesh>
                </group>

                <group ref={leftArm}>
                    <mesh scale={[4, 12, 4]} material={leftArmMaterials} position={[-6, 0, 0]}>
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    </mesh>
                    <mesh scale={[4.3, 12.3, 4.3]} material={leftArmMaterials_outer} position={[-6, 0, 0]}>
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    </mesh>
                </group>

                <group ref={rightArm}>
                    <mesh scale={[4, 12, 4]} material={rightArmMaterials} position={[6, 0, 0]}>
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    </mesh>
                    <mesh scale={[4.3, 12.3, 4.3]} material={rightArmMaterials_outer} position={[6, 0, 0]}>
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    </mesh>
                </group>

                <group ref={leftLeg}>
                    <mesh scale={[4, 12, 4]} material={leftLegMaterials} position={[-2, -12, 0]}>
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    </mesh>
                    <mesh scale={[4.3, 12.3, 4.3]} material={leftLegMaterials_outer} position={[-2, -12, 0]}>
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    </mesh>
                </group>

                <group ref={rightLeg}>
                    <mesh scale={[4, 12, 4]} material={rightLegMaterials} position={[2, -12, 0]}>
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    </mesh>
                    <mesh scale={[4.3, 12.3, 4.3]} material={rightLegMaterials_outer} position={[2, -12, 0]} >
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                    </mesh>
                </group>






            </group>
        </>
    )
}

function getTexture(url) {
    var texture = THREE.ImageUtils.loadTexture(url);
    texture.encoding = THREE.sRGBEncoding;
    texture.magFilter = THREE.NearestFilter;
    return texture;
}