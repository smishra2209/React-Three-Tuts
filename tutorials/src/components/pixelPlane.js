import { DoubleSide } from 'three';
import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Edges } from "@react-three/drei"

var pixelUtil = null;

const pixelClick = e => {
  if (e.object.visible) {
    e.object.material.color.setHex(pixelUtil.color);
    e.object.material.transmission = 0;
    pixelUtil.pixelDict[e.object.position.x + "," + e.object.position.y + "," + e.object.position.z] = e.object.material.color.getHexString()
    e.stopPropagation();
  }

}

const PixelPlane = props => {
  const ref = useRef();
  const color = parseInt("0x" + props.color, 16);
  console.log(color)
  // useFrame(state => {    
  //   ref.current.color.setHex(color);
  // })
  //const scale = props.outer?[2,2,2]:[1,1,1]
  const scale = [1, 1, 1]
  pixelUtil = props.pixelUtil;
  return (
    <mesh {...props} scale={scale} onClick={pixelClick} visible={props.visible}>
      <boxGeometry args={props.args} />
      <meshPhysicalMaterial ref={ref} side={DoubleSide} color={new THREE.Color(color)} transparent={true} transmission={0} />
      <Edges />
    </mesh>
  );
}

export default PixelPlane;