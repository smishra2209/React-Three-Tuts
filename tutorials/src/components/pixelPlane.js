import {DoubleSide} from 'three';
import * as THREE from 'three' ;
import {useRef} from 'react';
import {useFrame} from 'react-three-fiber';

const pixelClick = e => {
  e.stopPropagation();
  e.object.material.color.setHex(0x000000);
}

const PixelPlane = props => {
    const ref = useRef();
    const color = new THREE.Color( props.color );
    useFrame(state => {    
      ref.current.color = color;
    })
    return (
      <mesh {...props} scale={[1,1,1]} onClick={pixelClick}>
        <boxGeometry args={props.args}/>
        <meshPhysicalMaterial ref={ref} side={DoubleSide}/>
      </mesh>
    );
  }

export default PixelPlane;