import React, { useState, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Canvas, useLoader} from 'react-three-fiber';
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
import { GUI } from 'dat.gui';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import Model from './Model';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const pixelDict = [];
const pngIndexDict = [];
const opacityDict = [];
const pixelUtil = new PixelUtil(pixelDict, pngIndexDict, opacityDict, 0x000000, true, true, true, true, true, true, true, true, true, false);
var headVisibility = null;
var leftArmVisibility = null;
var rightArmVisibility = null;
var torsoVisibility = null;
var leftFootisibility = null;
var rightFootVisibility = null;
var innerBodyVisibility = null;
var outerBodyVisibility = null;
var bodyVisibility = null;
var previewVisibility = null;
var guiGlobal = null;
var impBtn = null;
var folder = null;
var pngValues = null;

function setupSkin() {
  return (
    <>
      <group name="body" visible={pixelUtil.load}>
        <group name='innerbody' visible={pixelUtil.innerBody}>
          <Head pixelUtil={pixelUtil} key="head" />
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
  const [body, setBody] = useState(true);
  var model = setupSkin();
  headVisibility.onChange(() => {
    setHeadVisible(pixelUtil.head);
  });
  leftArmVisibility.onChange(() => {
    setLeftArmVisible(pixelUtil.leftArm);
  });
  rightArmVisibility.onChange(() => {
    setRightArmVisible(pixelUtil.rightArm);
  });
  torsoVisibility.onChange(() => {
    setTorsoVisible(pixelUtil.torso);
  });
  leftFootisibility.onChange(() => {
    setLeftFootVisible(pixelUtil.leftFoot);
  });
  rightFootVisibility.onChange(() => {
    setRightFootVisible(pixelUtil.rightFoot);
  });
  innerBodyVisibility.onChange(() => {
    setInnerBodyVisible(pixelUtil.innerBody);
  });
  outerBodyVisibility.onChange(() => {
    setOuterBodyVisible(pixelUtil.outerBody);
  });
  impBtn.onChange(() => {
    Promise.resolve(ImportPng(pixelUtil.pixelDict, pixelUtil.pngIndexDict, pixelUtil.opacityDict)).then(() => {
      pixelUtil.load = false;
      setBody(pixelUtil.load)
      var Load = {
        Load: function () {
          pixelUtil.load = true;
          setBody(pixelUtil.load)
          folder.remove(bodyVisibility)
        }
      };
      bodyVisibility = folder.add(Load, "Load")
    })
  });

  return (
    <>
      {model}
    </>
  );
}

function App() {
  const [editMode, setEditMode] = useState(true);
  var params = {
    color: pixelUtil.color
  };
  const gui = new GUI();
  guiGlobal = gui;
  folder = gui.addFolder('Edit Skin');
  gui.addFolder(folder);
  var color = folder.addColor(params, "color").onChange(() => {
    pixelUtil.color = params.color;
  });
  var erase = {
    erase: function () {
      pixelUtil.clearColor();
    }
  };
  var colorPicker = {
    colorPicker: function () {
      pixelUtil.activatePicker(color);
    }
  };
  folder.add(erase, 'erase');
  folder.add(colorPicker, 'colorPicker');
  headVisibility = folder.add(pixelUtil, "head", true);
  leftArmVisibility = folder.add(pixelUtil, "leftArm", true)
  rightArmVisibility = folder.add(pixelUtil, "rightArm", true)
  torsoVisibility = folder.add(pixelUtil, "torso", true)
  leftFootisibility = folder.add(pixelUtil, "leftFoot", true)
  rightFootVisibility = folder.add(pixelUtil, "rightFoot", true)
  innerBodyVisibility = folder.add(pixelUtil, "innerBody", true)
  outerBodyVisibility = folder.add(pixelUtil, "outerBody", true)
  folder.open();
  var mint = {
    mint: function () {
      var value = ExportPng(pixelUtil.pixelDict, pixelUtil.pngIndexDict, pixelUtil.opacityDict);
      var win = window.open();
      win.document.write('<img src="' + value + '">');
    }
  };
  gui.add(mint, 'mint');
  var imp = {
    import: function () {

    }
  };
  impBtn = gui.add(imp, 'import');
  var preview = {
    preview: function () {
      pngValues = ExportPng(pixelUtil.pixelDict, pixelUtil.pngIndexDict, pixelUtil.opacityDict);
      console.log(pngValues)
      setEditMode(false)      
    }
  };
  var previewBtn = gui.add(preview, 'preview');
  var edit = {
    edit: function () {
      setEditMode(true)
    }
  };
  var editBtn = gui.add(edit, 'edit');
  const gltf = useLoader(GLTFLoader, '/steve.gltf');
  return (
    <>
    <Canvas camera={{ position: [10, 10, 25] }} style={{ height: '80vh', width: '100vw' }}>
        <ambientLight />
        <pointLight position={[10, 0, 10]} intensity={1} />
        <Suspense fallback={null}>
        {editMode?<Skin />:null}
        {editMode?null:<Model values={pngValues}/>}
        {/* <Model /> */}
        </Suspense>
        <Orbit />
    </Canvas>
    <div style={{'height': '100', 'width': '100vw', 'background':'black'}}>

    </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/render" element={<Model values={pngValues} />} />
    </Routes>
  </Router>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
