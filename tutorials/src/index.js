import React, { useState, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Canvas, useThree } from 'react-three-fiber';
import Orbit from './components/orbit';
import Head from './components/head';
import Torso from './components/torso';
import LeftArm from './components/leftArm';
import RightArm from './components/rightArm';
import LeftFoot from './components/leftFoot';
import RightFoot from './components/rightFoot';
import ExportPng, { ImportPng, getPngValue } from './util/skinUtil';
import HeadOuter from './components/head-outer';
import LeftArmOuter from './components/leftArm-outer';
import TorsoOuter from './components/torso-outer';
import RightArmOuter from './components/rightArm-outer';
import LeftFootOuter from './components/leftFoot-outer';
import RightFootOuter from './components/rightFoot-outer';
import PixelUtil from './util/pixelUtil';
import { GUI } from 'dat.gui';
import Model from './Model';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

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
var editFolder = null;
var visibilityFolder = null;
var finalizeFolder = null;
var pngValues = null;
var setEditModeGlobal = null;
var refreshFlag = false;

function WireFrame(props) {
  return (
    <>
      <group name="body" visible={pixelUtil.load} refresh={props.refresh}>
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

function Skin() {
  const [refresh, setRefresh] = useState(true);
  var params = {
    color: (pixelUtil.color == "") ? pixelUtil.prevColor : pixelUtil.color
  };
  console.log(params);
  const gui = new GUI({ hideable: true });
  if (!refreshFlag) {
    editFolder = gui.addFolder('Edit Skin');
    var color = editFolder.addColor(params, "color").onChange(() => {
      pixelUtil.color = params.color;
    });
    color.name("Color");
    var erase = {
      erase: function () {
        pixelUtil.clearColor();
      }
    };
    var paint = {
      paint: function () {
        pixelUtil.activateColor();
      }
    };
    var colorPicker = {
      colorPicker: function () {
        pixelUtil.activatePicker(color);
      }
    };
    editFolder.add(paint, 'paint').name("Brush");
    editFolder.add(erase, 'erase').name("Eraser");
    editFolder.add(colorPicker, 'colorPicker').name("Color Picker");
    visibilityFolder = gui.addFolder('Show/Hide');
    headVisibility = visibilityFolder.add(pixelUtil, "head", true).name("Head");
    leftArmVisibility = visibilityFolder.add(pixelUtil, "leftArm", true).name("Right Hand");
    rightArmVisibility = visibilityFolder.add(pixelUtil, "rightArm", true).name("Left Hand");
    torsoVisibility = visibilityFolder.add(pixelUtil, "torso", true).name("Torso");
    leftFootisibility = visibilityFolder.add(pixelUtil, "leftFoot", true).name("Right Foot");
    rightFootVisibility = visibilityFolder.add(pixelUtil, "rightFoot", true).name("Left Foot");
    innerBodyVisibility = visibilityFolder.add(pixelUtil, "innerBody", true).name("Inner Body");
    outerBodyVisibility = visibilityFolder.add(pixelUtil, "outerBody", true).name("Outer Body");
    editFolder.open();
    visibilityFolder.open();
  }
  finalizeFolder = gui.addFolder('Actions');
  var mint = {
    mint: function () {
      var inputArr = new Array();
      for (var i = 0; i < (64 * 64); i++) {
        inputArr.push(i);
      }
      var value = getPngValue(pixelUtil.pixelDict, pixelUtil.pngIndexDict, pixelUtil.opacityDict, 64, 64, inputArr);
      var win = window.open();
      win.document.write('<img src="' + value + '">');
    }
  };
  finalizeFolder.add(mint, 'mint').name("Mint");

  if (!refreshFlag) {
    var imp = {
      import: function () {
        gui.hide();
        Promise.resolve(ImportPng(pixelUtil.pixelDict, pixelUtil.pngIndexDict, pixelUtil.opacityDict)).then(() => {
          console.log(pixelUtil.pixelDict)
          console.log("Refreshing now")
          pixelUtil.innerBody = !(pixelUtil.innerBody);
          pixelUtil.outerBody = !(pixelUtil.outerBody);
          setRefresh(!refresh)
          refreshFlag = true;
        })
      }
    };
    finalizeFolder.add(imp, 'import').name("Import Skin");;
    var preview = {
      preview: function () {
        pngValues = ExportPng(pixelUtil.pixelDict, pixelUtil.pngIndexDict, pixelUtil.opacityDict);
        gui.hide();
        setEditModeGlobal(false)
      }
    };
    finalizeFolder.add(preview, 'preview').name("Preview");;
  }
  if (refreshFlag) {
    var Load = {
      Load: function () {
        gui.hide();
        pixelUtil.innerBody = !(pixelUtil.innerBody);
        pixelUtil.outerBody = !(pixelUtil.outerBody);
        finalizeFolder.remove(bodyVisibility)
        refreshFlag = false;
        setRefresh(!refresh);
      }
    };
    bodyVisibility = finalizeFolder.add(Load, "Load").name("Refresh Skin");
  }

  finalizeFolder.open();
  const [headVisible, setHeadVisible] = useState(pixelUtil.head);
  const [torsoVisible, setTorsoVisible] = useState(pixelUtil.torso);
  const [leftArmVisible, setLeftArmVisible] = useState(pixelUtil.leftArm);
  const [rightArmVisible, setRightArmVisible] = useState(pixelUtil.rightArm);
  const [leftFootVisible, setLeftFootVisible] = useState(pixelUtil.leftFoot);
  const [rightFootVisible, setRightFootVisible] = useState(pixelUtil.rightFoot);
  const [innerBodyVisible, setInnerBodyVisible] = useState(pixelUtil.innerBody);
  const [outerBodyVisible, setOuterBodyVisible] = useState(pixelUtil.outerBody);

  //var skin = WireFrame();
  headVisibility.onChange(() => {
    gui.hide();
    setHeadVisible(pixelUtil.head);
  });
  leftArmVisibility.onChange(() => {
    gui.hide();
    setLeftArmVisible(pixelUtil.leftArm);
  });
  rightArmVisibility.onChange(() => {
    gui.hide();
    setRightArmVisible(pixelUtil.rightArm);
  });
  torsoVisibility.onChange(() => {
    gui.hide();
    setTorsoVisible(pixelUtil.torso);
  });
  leftFootisibility.onChange(() => {
    gui.hide();
    setLeftFootVisible(pixelUtil.leftFoot);
  });
  rightFootVisibility.onChange(() => {
    gui.hide();
    setRightFootVisible(pixelUtil.rightFoot);
  });
  innerBodyVisibility.onChange(() => {
    gui.hide();
    setInnerBodyVisible(pixelUtil.innerBody);
  });
  outerBodyVisibility.onChange(() => {
    gui.hide();
    setOuterBodyVisible(pixelUtil.outerBody);
  });

  return (
    <>
      <WireFrame refresh={refresh} />
    </>
  );
}

function App() {
  const [editMode, setEditMode] = useState(true);
  setEditModeGlobal = (flag => {
    setEditMode(flag);
  });
  const gui = new GUI({ hideable: true });
  var finalizeFolder = gui.addFolder('Actions');
  var edit = {
    edit: function () {
      gui.hide();
      setEditMode(true)
    }
  };
  finalizeFolder.add(edit, 'edit').name('Edit');
  var mint = {
    mint: function () {
      var inputArr = new Array();
      for (var i = 0; i < (64 * 64); i++) {
        inputArr.push(i);
      }
      var value = getPngValue(pixelUtil.pixelDict, pixelUtil.pngIndexDict, pixelUtil.opacityDict, 64, 64, inputArr);
      var win = window.open();
      win.document.write('<img src="' + value + '">');
    }
  };
  finalizeFolder.add(mint, 'mint').name("Mint");
  finalizeFolder.open();
  if (editMode) {
    gui.hide();
  }
  return (
    <>
      <Canvas camera={{ position: [10, 10, 25] }} style={{ height: '100vh', width: '100vw', cursor: 'url(assets/cursor.png)' }}>
        <ambientLight />
        <pointLight position={[10, 0, 10]} intensity={1} />
        <Suspense fallback={null}>
          {editMode ? <Skin /> : <Model values={pngValues} setEditMode={setEditModeGlobal} />}
        </Suspense>
        <Orbit />
      </Canvas>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <div className='app'>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/render" element={<Model values={pngValues} />} /> */}
      </Routes>
    </Router>
  </div>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
