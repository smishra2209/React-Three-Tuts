import { DoubleSide } from 'three';
import * as THREE from 'three';
import { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { Edges } from "@react-three/drei"

var pixelUtil = null;

const pixelClick = e => {
  if (e.object.visible) {
    if(pixelUtil.colorPicker){
      pixelUtil.setColor(parseInt("0x" + e.object.material.color.getHexString(), 16))
      pixelUtil.colorPicker = false;
    } else {
      if(pixelUtil.color=="" && pixelUtil.color!="0"){
        e.object.material.color.setHex("FFFFFF");
        e.object.material.opacity = 0;
      } else {
        e.object.material.color.setHex(pixelUtil.color);
        e.object.material.opacity = 1;  
      }
      pixelUtil.pixelDict[e.object.position.x + "," + e.object.position.y + "," + e.object.position.z] = e.object.material.color.getHexString()
      pixelUtil.opacityDict[e.object.position.x + "," + e.object.position.y + "," + e.object.position.z] = 255;
    }
    e.stopPropagation();
  }
}

const PixelPlane = props => {
  const ref = useRef();
  var opacity = 1;
  var color = null;
  if(props.color==""){
    color = parseInt("0xFFFFFF", 16)
    if(props.pixelUtil.opacityDict[props.position[0] + "," + props.position[1] + "," + props.position[2]] == 0){
      opacity = 0;
    }
  } else {
    color = parseInt("0x" + props.color, 16);
  }
  const scale = [1, 1, 1]
  pixelUtil = props.pixelUtil;
  return (
    <mesh {...props} scale={scale} onClick={pixelClick} visible={props.visible}>
      <boxGeometry args={props.args} />
      <meshPhysicalMaterial ref={ref} side={DoubleSide} color={new THREE.Color(color)} transparent={true} transmission={0} opacity={opacity}/>
      <Edges />
    </mesh>
  );
}

export default PixelPlane;