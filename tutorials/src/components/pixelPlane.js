import {DoubleSide} from 'three';
import * as THREE from 'three' ;
import {useRef} from 'react';
import {useFrame} from 'react-three-fiber';

const pixelClick = e => {
  e.stopPropagation();
  console.log(e.object.material.color)
  e.object.material.color.setHex("0x000000");
  console.log(e.object.material.color)
  //e.object.material.transmission = 0;
}

const PixelPlane = props => {
    const ref = useRef();
    const color = parseInt ("0x" + props.color, 16);
    // useFrame(state => {    
    //   ref.current.color.setHex(color);
    // })
    const scale = props.outer?[2,2,2]:[1,1,1]
    return (
      <mesh {...props} scale={scale} onClick={pixelClick}>
        <boxGeometry args={props.args}/>
        <meshPhongMaterial ref={ref} side={DoubleSide} color={new THREE.Color(color)}/>
      </mesh>
    );
  }

export default PixelPlane;