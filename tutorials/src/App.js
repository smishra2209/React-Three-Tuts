import logo from './logo.svg';
import './App.css';
import {Canvas, useFrame, extend, useThree} from 'react-three-fiber';
import React, {useRef} from 'react';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {DoubleSide} from 'three';
import * as THREE from 'three' ;
//import * as PNGlib from 'node-pnglib';
extend({OrbitControls});

//UV MAPPING
//On Pointer Down
//usememo
//useloader, gltfloader
//window.activeMesh

const pixelDict = []
const pngIndexDict = []
var children = [];

const Orbit = () => {
  const {camera, gl} = useThree();
  useFrame(state => { 
    children = state.scene.children;
  });
  return (
    <orbitControls args = {[camera, gl.domElement]}/>
  )
}

const Box = props => {
  const ref = useRef();
  useFrame(state => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  })
  return (
    <mesh ref={ref} {...props}>
          <boxBufferGeometry/>
          <meshPhysicalMaterial color = 'blue'/>
        </mesh>
  );
}

const Floor = props => {
  return (
    <mesh {...props}>
      <boxBufferGeometry args = {[20, 1, 10]}/>
      <meshPhysicalMaterial />
    </mesh>
  )
}

const PixelPlane = props => {
  const ref = useRef();
  //const color = new THREE.Color( 0xffffff );
  const color = new THREE.Color( props.color );
  //color.setHex( Math.random() * 0xffffff );
  useFrame(state => {    
    ref.current.color = color;
  })
  return (
    <mesh {...props}>
      <boxGeometry args={props.args}/>
      <meshPhysicalMaterial ref={ref} side={DoubleSide}/>
    </mesh>
  );
}

const pixelClick = e => {
  e.stopPropagation();
  console.log(e.object.position)
  //console.log(e.object.material.color);
  e.object.material.color.setHex(0x000000);
  //console.log(e.object.material.color);
}

function hex2rgb(hex)
{
    var aRgbHex = hex.match(/.{1,2}/g);
    var rgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return rgb;
}

function App() {
  
  const headFront = [];
  const headLeft = [];
  const headRight = [];
  const headBack = [];
  const headTop = [];
  const headBottom = [];
  const torsoTop = [];
  const torsoFront = [];
  const torsoLeft = [];
  const torsoRight = [];
  const torsoBack = [];
  const torsoBottom = [];
  const leftArmTop = [];
  const leftArmFront = [];
  const leftArmLeft = [];
  const leftArmRight = [];
  const leftArmBack = [];
  const leftArmBottom = [];
  const rightArmTop = [];
  const rightArmFront = [];
  const rightArmLeft = [];
  const rightArmRight = [];
  const rightArmBack = [];
  const rightArmBottom = [];
  const leftFootTop = [];
  const leftFootFront = [];
  const leftFootLeft = [];
  const leftFootRight = [];
  const leftFootBack = [];
  const leftFootBottom = [];
  const rightFootTop = [];
  const rightFootFront = [];
  const rightFootLeft = [];
  const rightFootRight = [];
  const rightFootBack = [];
  const rightFootBottom = [];
  const adjstmnt = 0.5;

  var len = 64;
  var line = 15;
  var skipLen = 8;
  for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
      headFront.push([i, j, adjstmnt])
      pixelDict[i+","+j+","+adjstmnt] = ""
      pngIndexDict[i+","+j+","+adjstmnt] = (len*(line-j))+skipLen+i;
    }
  }

  line = 15;
  skipLen = 7;
  for(var i=0; i<8; i++){
    for(var j=0; j>-8; j--){
      headLeft.push([-adjstmnt, i, j])
      pixelDict[-adjstmnt+","+i+","+j] = ""
      pngIndexDict[-adjstmnt+","+i+","+j] = (len*(line-i))+skipLen+j;
    }
  }

  line = 15;
  skipLen = 16;
  for(var i=0; i<8; i++){
    for(var j=0; j>-8; j--){
      headRight.push([7+adjstmnt, i, j])
      pixelDict[(7+adjstmnt)+","+i+","+j] = ""
      pngIndexDict[(7+adjstmnt)+","+i+","+j] = (len*(line-i))+skipLen-j;
    }
  }

  line = 15;
  skipLen = 31;
  for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
      headBack.push([i, j, -7-adjstmnt])
      pixelDict[i+","+j+","+(-7-adjstmnt)] = ""
      pngIndexDict[i+","+j+","+(-7-adjstmnt)] = (len*(line-j))+skipLen-i;
    }
  }

  line = 7;
  skipLen = 8;
  for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
      headTop.push([i, 7, -j])
      pixelDict[i+",7,"+(-j)] = ""
      pngIndexDict[i+",7,"+(-j)] = (len*(line-j))+skipLen+i;
    }
  }

  line = 7;
  skipLen = 23;
  for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
      headBottom.push([i, 0, -j])
      pixelDict[i+",0,"+(-j)] = ""
      pngIndexDict[i+",0,"+(-j)] = (len*(line-j))+skipLen-i;
    }
  }

  line = 19;
  skipLen = 20;  
  var torsoAdj = 2;
  for(var i=0; i<8; i++){
    for(var j=0; j<4; j++){
      torsoTop.push([i, -0.55, -j-torsoAdj])
      pixelDict[i+",-0.55,"+(-j-torsoAdj)] = ""
      pngIndexDict[i+",-0.55,"+(-j-torsoAdj)] = (len*(line-j))+skipLen+i;
    }
  }

  line = 20;
  skipLen = 20;  
  torsoAdj = 1.5;
  for(var i=0; i<8; i++){
    for(var j=0; j<12; j++){
      torsoFront.push([i, -j-1.05, -torsoAdj])
      pixelDict[i+","+(-j-1.05)+","+(-torsoAdj)] = ""
      pngIndexDict[i+","+(-j-1.05)+","+(-torsoAdj)] = (len*(line+j))+skipLen+i;
    }
  }

  line = 20;
  skipLen = 19;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      torsoLeft.push([-0.5, (-j-1.05), -i-torsoAdj])
      pixelDict["-0.5,"+(-j-1.05)+","+(-i-torsoAdj)] = ""
      pngIndexDict["-0.5,"+(-j-1.05)+","+(-i-torsoAdj)] = (len*(line+j))+skipLen-i;
    }
  }

  line = 20;
  skipLen = 28;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      torsoRight.push([7.5, (-j-1.05), -i-torsoAdj])
      pixelDict["7.5,"+(-j-1.05)+","+(-i-torsoAdj)] = ""
      pngIndexDict["7.5,"+(-j-1.05)+","+(-i-torsoAdj)] = (len*(line+j))+skipLen+i;
    }
  }

  line = 20;
  skipLen = 39;  
  torsoAdj = 5.5;
  for(var i=0; i<8; i++){
    for(var j=0; j<12; j++){
      torsoBack.push([i, (-j-1.05), -torsoAdj])
      pixelDict[i+","+(-j-1.05)+","+(-torsoAdj)] = ""
      pngIndexDict[i+","+(-j-1.05)+","+(-torsoAdj)] = (len*(line+j))+skipLen-i;
    }
  }

  line = 19;
  skipLen = 28;  
  torsoAdj = 2;
  for(var i=0; i<8; i++){
    for(var j=0; j<4; j++){
      torsoBottom.push([i, -12.55, -j-torsoAdj])
      pixelDict[i+","+(-12.55)+","+(-j-torsoAdj)] = ""
      pngIndexDict[i+","+(-12.55)+","+(-j-torsoAdj)] = (len*(line-j))+skipLen+i;
    }
  }

  line = 19;
  skipLen = 47;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
      leftArmTop.push([-i-1.05, -0.55, -j-torsoAdj])
      pixelDict[(-i-1.05)+","+(-0.55)+","+(-j-torsoAdj)] = ""
      pngIndexDict[(-i-1.05)+","+(-0.55)+","+(-j-torsoAdj)] = (len*(line-j))+skipLen-i;
    }
  }

  line = 20;
  skipLen = 47;  
  torsoAdj = 1.5;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      leftArmFront.push([-i-1.05, -j-1.05, -torsoAdj])
      pixelDict[(-i-1.05)+","+(-j-1.05)+","+(-torsoAdj)] = ""
      pngIndexDict[(-i-1.05)+","+(-j-1.05)+","+(-torsoAdj)] = (len*(line+j))+skipLen-i;
    }
  }

  line = 20;
  skipLen = 48;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      leftArmRight.push([-0.55, -j-1.05, -i-torsoAdj])
      pixelDict[(-0.55)+","+(-j-1.05)+","+(-i-torsoAdj)] = ""
      pngIndexDict[(-0.55)+","+(-j-1.05)+","+(-i-torsoAdj)] = (len*(line+j))+skipLen+i;
    }
  }

  line = 20;
  skipLen = 52;  
  torsoAdj = 5.5;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      leftArmBack.push([-i-1.05, -j-1.05, -torsoAdj])
      pixelDict[(-i-1.05)+","+(-j-1.05)+","+(-torsoAdj)] = ""
      pngIndexDict[(-i-1.05)+","+(-j-1.05)+","+(-torsoAdj)] = (len*(line+j))+skipLen+i;
    }
  }

  line = 20;
  skipLen = 43;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      leftArmLeft.push([-4.55, -j-1.05, -i-torsoAdj])
      pixelDict[(-4.55)+","+(-j-1.05)+","+(-i-torsoAdj)] = ""
      pngIndexDict[(-4.55)+","+(-j-1.05)+","+(-i-torsoAdj)] = (len*(line+j))+skipLen-i;
    }
  }

  line = 19;
  skipLen = 51;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
      leftArmBottom.push([-i-1.05, -12.55, -j-torsoAdj])
      pixelDict[(-i-1.05)+","+(-12.55)+","+(-j-torsoAdj)] = ""
      pngIndexDict[(-i-1.05)+","+(-12.55)+","+(-j-torsoAdj)] = (len*(line-j))+skipLen-i;
    }
  }

  line = 51;
  skipLen = 39; 
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
      rightArmTop.push([-i+11.05, -0.55, -j-torsoAdj])
      pixelDict[(-i+11.05)+","+(-0.55)+","+(-j-torsoAdj)] = ""
      pngIndexDict[(-i+11.05)+","+(-0.55)+","+(-j-torsoAdj)] = (len*(line-j))+skipLen-i;
    }
  }

  line = 52;
  skipLen = 39;  
  torsoAdj = 1.5;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      rightArmFront.push([-i+11.05, -j-1.05, -torsoAdj])
      pixelDict[(-i+11.05)+","+(-j-1.05)+","+(-torsoAdj)] = ""
      pngIndexDict[(-i+11.05)+","+(-j-1.05)+","+(-torsoAdj)] = (len*(line+j))+skipLen-i;
    }
  }

  line = 52;
  skipLen = 40;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      rightArmRight.push([11.55, -j-1.05, -i-torsoAdj])
      pixelDict[(11.55)+","+(-j-1.05)+","+(-i-torsoAdj)] = ""
      pngIndexDict[(11.55)+","+(-j-1.05)+","+(-i-torsoAdj)] = (len*(line+j))+skipLen+i;
    }
  }

  line = 52;
  skipLen = 44;  
  torsoAdj = 5.5;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      rightArmBack.push([-i+11.05, -j-1.05, -torsoAdj])
      pixelDict[(-i+11.05)+","+(-j-1.05)+","+(-torsoAdj)] = ""
      pngIndexDict[(-i+11.05)+","+(-j-1.05)+","+(-torsoAdj)] = (len*(line+j))+skipLen+i;
    }
  }

  line = 52;
  skipLen = 32;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      rightArmLeft.push([7.55, -j-1.05, -i-torsoAdj])
      pixelDict[(7.55)+","+(-j-1.05)+","+(-i-torsoAdj)] = ""
      pngIndexDict[(7.55)+","+(-j-1.05)+","+(-i-torsoAdj)] = (len*(line+j))+skipLen+i;
    }
  }

  line = 51;
  skipLen = 43;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
      rightArmBottom.push([-i+11.05, -12.55, -j-torsoAdj])
      pixelDict[(-i+11.05)+","+(-12.55)+","+(-j-torsoAdj)] = ""
      pngIndexDict[(-i+11.05)+","+(-12.55)+","+(-j-torsoAdj)] = (len*(line-j))+skipLen-i;
    }
  }

  line = 19;
  skipLen = 7;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
      leftFootTop.push([i, -12.60, -j-torsoAdj])
      pixelDict[i+","+(-12.60)+","+(-j-torsoAdj)] = ""
      pngIndexDict[i+","+(-12.60)+","+(-j-torsoAdj)] = (len*(line-j))+skipLen-i;
    }
  }

  line = 20;
  skipLen = 7;  
  torsoAdj = 1.5;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      leftFootFront.push([i, -j-13.05, -torsoAdj])
      pixelDict[i+","+(-j-13.05)+","+(-torsoAdj)] = ""
      pngIndexDict[i+","+(-j-13.05)+","+(-torsoAdj)] = (len*(line+j))+skipLen-i;
    }
  }

  line = 20;
  skipLen = 8;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      leftFootRight.push([3.45, -j-13.05, -i-torsoAdj])
      pixelDict[(3.45)+","+(-j-13.05)+","+(-i-torsoAdj)] = ""
      pngIndexDict[(3.45)+","+(-j-13.05)+","+(-i-torsoAdj)] = (len*(line+j))+skipLen+i;
    }
  }

  line = 20;
  skipLen = 12;  
  torsoAdj = 5.5;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      leftFootBack.push([i, -j-13.05, -torsoAdj])
      pixelDict[i+","+(-j-13.05)+","+(-torsoAdj)] = ""
      pngIndexDict[i+","+(-j-13.05)+","+(-torsoAdj)] = (len*(line+j))+skipLen+i;
    }
  }

  line = 20;
  skipLen = 3;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      leftFootLeft.push([-0.5, -j-13.05, -i-torsoAdj])
      pixelDict[(-0.5)+","+(-j-13.05)+","+(-i-torsoAdj)] = ""
      pngIndexDict[(-0.5)+","+(-j-13.05)+","+(-i-torsoAdj)] = (len*(line+j))+skipLen-i;
    }
  }

  line = 19;
  skipLen = 11;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
      leftFootBottom.push([i, -24.6, -j-torsoAdj])
      pixelDict[i+","+(-24.6)+","+(-j-torsoAdj)] = ""
      pngIndexDict[i+","+(-24.6)+","+(-j-torsoAdj)] = (len*(line-j))+skipLen-i;
    }
  }

  line = 51;
  skipLen = 23;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
      rightFootTop.push([i+4, -12.60, -j-torsoAdj])
      pixelDict[(i+4)+","+(-12.60)+","+(-j-torsoAdj)] = ""
      pngIndexDict[(i+4)+","+(-12.60)+","+(-j-torsoAdj)] = (len*(line-j))+skipLen-i;
    }
  }

  line = 52;
  skipLen = 23;  
  torsoAdj = 1.5;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      rightFootFront.push([(i+4), -j-13.05, -torsoAdj])
      pixelDict[(i+4)+","+(-j-13.05)+","+(-torsoAdj)] = ""
      pngIndexDict[(i+4)+","+(-j-13.05)+","+(-torsoAdj)] = (len*(line+j))+skipLen-i;
    }
  }

  line = 52;
  skipLen = 24;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      rightFootRight.push([7.45, -j-13.05, -i-torsoAdj])
      pixelDict[(7.45)+","+(-j-13.05)+","+(-i-torsoAdj)] = ""
      pngIndexDict[(7.45)+","+(-j-13.05)+","+(-i-torsoAdj)] = (len*(line+j))+skipLen+i;
    }
  }

  line = 52;
  skipLen = 28;  
  torsoAdj = 5.5;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      rightFootBack.push([(i+4), -j-13.05, -torsoAdj])
      pixelDict[(i+4)+","+(-j-13.05)+","+(-torsoAdj)] = ""
      pngIndexDict[(i+4)+","+(-j-13.05)+","+(-torsoAdj)] = (len*(line+j))+skipLen+i;
    }
  }

  line = 52;
  skipLen = 19;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<12; j++){
      rightFootLeft.push([3.5, -j-13.05, -i-torsoAdj])
      pixelDict[(3.5)+","+(-j-13.05)+","+(-i-torsoAdj)] = ""
      pngIndexDict[(3.5)+","+(-j-13.05)+","+(-i-torsoAdj)] = (len*(line+j))+skipLen-i;
    }
  }

  line = 51;
  skipLen = 27;  
  torsoAdj = 2;
  for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
      rightFootBottom.push([(i+4), -24.6, -j-torsoAdj])
      pixelDict[(i+4)+","+(-24.6)+","+(-j-torsoAdj)] = ""
      pngIndexDict[(i+4)+","+(-24.6)+","+(-j-torsoAdj)] = (len*(line-j))+skipLen-i;
    }
  }

  var exportPng = () => {
    for(var i=0; i<children.length; i++){
      if(children[i]["type"] == "Mesh" && children[i]["material"]["type"] == "MeshPhysicalMaterial"){
        pixelDict[children[i].position.x+","+children[i].position.y+","+children[i].position.z] = children[i].material.color.getHexString();
      }
    } 
    var canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    var context = canvas.getContext("2d");
    var imageData=context.createImageData(64, 64);
    var data=imageData.data;
    for (var i=0; i<data.length; i+=4) {
      data[i+3]=0; // alpha (transparency)
    }
    // for (var i=0; i<8; i++) {
    //   for(var j=0; j<8; j++){
    //     data[i*j]=hex2rgb("d67cd2")
    //   }        
    // }
    Object.keys(pngIndexDict).forEach(element => {
      var rgb = hex2rgb(pixelDict[element])
      var actualIndex = pngIndexDict[element]*4
      data[actualIndex + 0]= rgb[0]
      data[actualIndex + 1]= rgb[1]
      data[actualIndex + 2]= rgb[2]
      data[actualIndex + 3]= 255
      //console.log(pngIndexDict[element] +"="+ data[pngIndexDict[element] + 0]+","+data[pngIndexDict[element] + 1]+","+data[pngIndexDict[element] + 2])
      //console.log(rgb)
    });
    //console.log(data)
      
    context.putImageData(imageData, 0, 0); // at coords 0,0
    //context.drawImage(imageData, 0, 0, 0, 0, 64, 64);
    var value=canvas.toDataURL("image/png");
    var win = window.open();
    //win.document.write('<iframe src="' + value  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
    

    // let png = new PNGlib(64, 64);
    
    // for(var i=0; i<8; i++){
    //   for(var j=0; j<8; j++){
    //     png.setPixel(i, j, '#' + pixelDict[i][j][adjstmnt]);
    //   }
    // }
    // console.log(png.getBase64());
    //win.document.write('<img src="data:image/png;base64,'+png.getBase64()+'">');
    win.document.write('<img src="'+value+'">');
  }

  
  return (
    <div style={{height: '100vh', width: '100vw'}}>
      <button type='button' onClick={exportPng}>Export</button>
      <Canvas camera = {{position: [10,10,10]}}>
        <axesHelper args = {[5]}/>
        {headFront.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 1, 0.01]} onClick={pixelClick} color={0x641E16}/>
        ))}
        {headLeft.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[0.01, 1, 1]} onClick={pixelClick} color={0x512E5F}/>
        ))}
        {headRight.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[0.01, 1, 1]} onClick={pixelClick} color={0x0B5345}/>
        ))}
        {headBack.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 1, 0.01]} onClick={pixelClick} color={0x7D6608}/>
        ))}
        {headTop.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} onClick={pixelClick} color={0xF7DC6F}/>
        ))}
        {headBottom.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} onClick={pixelClick} color={0xA9CCE3}/>
        ))}
        {torsoTop.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 0.01, 1]} onClick={pixelClick} color={0xF5B041}/>
        ))}
        {torsoFront.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 1, 0.01]} onClick={pixelClick} color={0x7D6608}/>
        ))}
        {torsoLeft.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[0.01, 1, 1]} onClick={pixelClick} color={0x0B5345}/>
        ))}
        {torsoRight.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[0.01, 1, 1]} onClick={pixelClick} color={0x512E5F}/>
        ))}
        {torsoBack.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 1, 0.01]} onClick={pixelClick} color={0x641E16}/>
        ))}
        {torsoBottom.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 0.01, 1]} onClick={pixelClick} color={0xF5B041}/>
        ))}
        {leftArmTop.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 0.01, 1]} onClick={pixelClick} color={0xF5B041}/>
        ))}
        {leftArmFront.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 1, 0.01]} onClick={pixelClick} color={0x641E16}/>
        ))}
        {leftArmRight.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[0.01, 1, 1]} onClick={pixelClick} color={0x512E5F}/>
        ))}
        {leftArmBack.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 1, 0.01]} onClick={pixelClick} color={0x7D6608}/>
        ))}
        {leftArmLeft.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[0.01, 1, 1]} onClick={pixelClick} color={0x512E5F}/>
        ))}
        {leftArmBottom.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 0.01, 1]} onClick={pixelClick} color={0xF5B041}/>
        ))}
        {rightArmTop.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 0.01, 1]} onClick={pixelClick} color={0xF5B041}/>
        ))}
        {rightArmFront.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 1, 0.01]} onClick={pixelClick} color={0x641E16}/>
        ))}
        {rightArmRight.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[0.01, 1, 1]} onClick={pixelClick} color={0x512E5F}/>
        ))}
        {rightArmBack.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 1, 0.01]} onClick={pixelClick} color={0x7D6608}/>
        ))}
        {rightArmLeft.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[0.01, 1, 1]} onClick={pixelClick} color={0x0B5345}/>
        ))}
        {rightArmBottom.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 0.01, 1]} onClick={pixelClick} color={0xF5B041}/>
        ))}
        {leftFootTop.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 0.01, 1]} onClick={pixelClick} color={0x641E16}/>
        ))}
        {leftFootFront.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 1, 0.01]} onClick={pixelClick} color={0x7D6608}/>
        ))}
        {leftFootLeft.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[0.01, 1, 1]} onClick={pixelClick} color={0x0B5345}/>
        ))}
        {leftFootRight.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[0.01, 1, 1]} onClick={pixelClick} color={0x512E5F}/>
        ))}
        {leftFootBack.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 1, 0.01]} onClick={pixelClick} color={0x641E16}/>
        ))}
        {leftFootBottom.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 0.01, 1]} onClick={pixelClick} color={0xF5B041}/>
        ))}
        {rightFootTop.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 0.01, 1]} onClick={pixelClick} color={0x641E16}/>
        ))}
        {rightFootFront.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 1, 0.01]} onClick={pixelClick} color={0x7D6608}/>
        ))}
        {rightFootLeft.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[0.01, 1, 1]} onClick={pixelClick} color={0x0B5345}/>
        ))}
        {rightFootRight.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[0.01, 1, 1]} onClick={pixelClick} color={0x512E5F}/>
        ))}
        {rightFootBack.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 1, 0.01]} onClick={pixelClick} color={0x641E16}/>
        ))}
        {rightFootBottom.map(headPixel => (
          <PixelPlane position={headPixel} scale={[1, 1, 1]} args={[1, 0.01, 1]} onClick={pixelClick} color={0xF5B041}/>
        ))}
        <Orbit />
        <ambientLight/>
      </Canvas>
    </div>
  );
}

export default App;
