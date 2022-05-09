import React, { useState, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Controls, useControl, withControls } from 'react-three-gui';
import { Canvas, useFrame } from 'react-three-fiber';
import Orbit from './components/orbit';
import Head from './components/head';
import Torso from './components/torso';
import LeftArm from './components/leftArm';
import RightArm from './components/rightArm';
import LeftFoot from './components/leftFoot';
import RightFoot from './components/rightFoot';
import ExportPng, { ImportPng } from './util/skinUtil';
import HeadOuter from './components/head-outer';
import LeftArmOuter from './components/leftArm-outer';
import TorsoOuter from './components/torso-outer';
import RightArmOuter from './components/rightArm-outer';
import LeftFootOuter from './components/leftFoot-outer';
import RightFootOuter from './components/rightFoot-outer';
import PixelUtil from './util/pixelUtil';
import {GUI} from 'dat.gui';

const GROUP = 'Edit';
const pixelDict = [];
const pngIndexDict = [];
const opacityDict = [];
const pixelUtil = new PixelUtil(pixelDict, pngIndexDict, opacityDict, 0x000000, true, true, true, true, true, true, true, true, true);
var headVisibility = null;
var leftArmVisibility = null;
var rightArmVisibility = null;
var torsoVisibility = null;
var leftFootisibility = null;
var rightFootVisibility = null;
var innerBodyVisibility = null;
var outerBodyVisibility = null;
var bodyVisibility = null;
var guiGlobal = null;
var impBtn = null;

function setupSkin() {
  console.log("Rendering....")
  //console.log(pixelUtil.pixelDict)
  return (
    <>
    <group name="body" visible={pixelUtil.load}>
        <group name='innerbody' visible={pixelUtil.innerBody}>
          <Head pixelUtil={pixelUtil} key="head"/>
          <Torso pixelUtil={pixelUtil} key="torso" />
          <LeftArm pixelUtil={pixelUtil} key="leftArm" />
          <RightArm pixelUtil={pixelUtil} key="rightArm" />
          <LeftFoot pixelUtil={pixelUtil} key="leftFoot" />
          <RightFoot pixelUtil={pixelUtil} key="rightFoot" />
        </group>
        <group name='outerbody' visible={pixelUtil.outerBody}>
          <HeadOuter pixelUtil={pixelUtil} key="head" />
          <TorsoOuter pixelUtil={pixelUtil} key="torso" />
          <LeftArmOuter pixelUtil={pixelUtil} key="leftArm" />
          <RightArmOuter pixelUtil={pixelUtil} key="rightArm" />
          <LeftFootOuter pixelUtil={pixelUtil} key="leftFoot" />
          <RightFootOuter pixelUtil={pixelUtil} key="rightFoot" />
        </group>
      </group>
    </>
  );
}


//set(s => !s)
function Skin() {
  const [headVisible, setHeadVisible] = useState(pixelUtil.head);
  const [torsoVisible, setTorsoVisible] = useState(pixelUtil.torso);
  const [leftArmVisible, setLeftArmVisible] = useState(pixelUtil.leftArm);
  const [rightArmVisible, setRightArmVisible] = useState(pixelUtil.rightArm);
  const [leftFootVisible, setLeftFootVisible] = useState(pixelUtil.leftFoot);
  const [rightFootVisible, setRightFootVisible] = useState(pixelUtil.rightFoot);
  const [innerBodyVisible, setInnerBodyVisible] = useState(pixelUtil.innerBody);
  const [outerBodyVisible, setOuterBodyVisible] = useState(pixelUtil.outerBody);
  const [body, setBody] = useState(pixelUtil.body);
  console.log(pixelUtil.pixelDict);
  var model = setupSkin();
  headVisibility.onChange(() =>{
    setHeadVisible(pixelUtil.head);
  });
  leftArmVisibility.onChange(() =>{
    setLeftArmVisible(pixelUtil.leftArm);
  });
  rightArmVisibility.onChange(() =>{
    setRightArmVisible(pixelUtil.rightArm);
  });
  torsoVisibility.onChange(() =>{
    setTorsoVisible(pixelUtil.torso);
  });
  leftFootisibility.onChange(() =>{
    setLeftFootVisible(pixelUtil.leftFoot);
  });
  rightFootVisibility.onChange(() =>{
    setRightFootVisible(pixelUtil.rightFoot);
  });
  innerBodyVisibility.onChange(() =>{
    setInnerBodyVisible(pixelUtil.innerBody);
  });
  outerBodyVisibility.onChange(() =>{
    setOuterBodyVisible(pixelUtil.outerBody);
  });
  bodyVisibility.onChange(() =>{
    setBody(pixelUtil.load)
  })
  impBtn.onChange(() => {
    // setHeadVisible(false);
    // setLeftArmVisible(false);
    // setRightArmVisible(false);
    // setTorsoVisible(false);
    // setLeftFootVisible(false);
    // setRightFootVisible(false);
    // setInnerBodyVisible(false);
    // setOuterBodyVisible(false);
    console.log("again")
    //ImportPng(pixelUtil.pixelDict, pixelUtil.pngIndexDict); 
    // setHeadVisible(true);
    // setLeftArmVisible(true);
    // setRightArmVisible(true);
    // setTorsoVisible(true);
    // setLeftFootVisible(true);
    // setRightFootVisible(true);
    // setInnerBodyVisible(true);
    // setOuterBodyVisible(true);
    //model = setupSkin();
    Promise.resolve(ImportPng(pixelUtil.pixelDict, pixelUtil.pngIndexDict, pixelUtil.opacityDict)).then(()=>{
      console.log("Rendering model")
      //model = setupSkin();
      pixelUtil.load = false;
      setBody(pixelUtil.load);
    })
  });
  
  return (
    <>
      {model}      
    </>
  );
}

function App() {
  var params = {
    color: pixelUtil.color
  };
  const gui = new GUI();
  guiGlobal = gui;
  var folder = gui.addFolder( 'Edit Skin' );
  gui.addFolder(folder);
  folder.addColor(params, "color").onChange(()=>{
    pixelUtil.color = params.color;
  });
  headVisibility = folder.add(pixelUtil, "head", true);
  leftArmVisibility = folder.add(pixelUtil, "leftArm", true)
  rightArmVisibility = folder.add(pixelUtil, "rightArm", true)
  torsoVisibility = folder.add(pixelUtil, "torso", true)
  leftFootisibility = folder.add(pixelUtil, "leftFoot", true)
  rightFootVisibility = folder.add(pixelUtil, "rightFoot", true)
  innerBodyVisibility = folder.add(pixelUtil, "innerBody", true)
  outerBodyVisibility = folder.add(pixelUtil, "outerBody", true)
  bodyVisibility = folder.add(pixelUtil, "load", true)
  folder.open();
  var mint = { mint:function()
    { 
      console.log("clicked")
      ExportPng(pixelUtil.pixelDict, pixelUtil.pngIndexDict, pixelUtil.opacityDict); 
    }
  };
  gui.add(mint,'mint');
  var imp = { import:function()
    { 
      console.log("clicked")
      //ImportPng(pixelUtil.pixelDict, pixelUtil.pngIndexDict); 
    }
  };
  impBtn = gui.add(imp,'import');
  
  return (
    <>
      {/* <Controls.Provider > */}
      <Canvas camera={{ position: [10, 10, 25] }} style={{ height: '100vh', width: '100vw' }}>
        <ambientLight />
        <pointLight position={[10, 0, 10]} intensity={1} />
        <Skin />
        <Orbit />
      </Canvas>

      {/* <Controls /> */}
      {/* </Controls.Provider> */}

    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
