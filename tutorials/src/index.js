import React, { useState, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Controls, useControl } from 'react-three-gui';
import { useFrame } from 'react-three-fiber';
import Orbit from './components/orbit';
import Head from './components/head';
import Torso from './components/torso';
import LeftArm from './components/leftArm';
import RightArm from './components/rightArm';
import LeftFoot from './components/leftFoot';
import RightFoot from './components/rightFoot';
import ExportPng, { SaveModelPixels } from './util/skinUtil';

const GROUP = 'Edit';
const pixelDict = [];
const pngIndexDict = [];

// const headRef = null;
// const torsoRef = null;
// const leftArmRef = null;
// const rightArmRef = null;
// const leftFootRef = null;
// const rightFootRef = null;

function setupSkin(headVisible, torsoVisible, leftArmVisible, rightArmVisible, leftFootVisible, rightFootVisible, innerBodyVisible, outerBodyVisible) {
  return (
    <>
      <group name='innerbody' visible={innerBodyVisible}>
        {headVisible ? <Head pixelDict={pixelDict} pngIndexDict={pngIndexDict} key="head" /> : null}
        {torsoVisible ? <Torso pixelDict={pixelDict} pngIndexDict={pngIndexDict} key="torso" /> : null}
        {leftArmVisible ? <LeftArm pixelDict={pixelDict} pngIndexDict={pngIndexDict} key="leftArm" /> : null}
        {rightArmVisible ? <RightArm pixelDict={pixelDict} pngIndexDict={pngIndexDict} key="rightArm" /> : null}
        {leftFootVisible ? <LeftFoot pixelDict={pixelDict} pngIndexDict={pngIndexDict} key="leftFoot" /> : null}
        {rightFootVisible ? <RightFoot pixelDict={pixelDict} pngIndexDict={pngIndexDict} key="rightFoot" /> : null}
      </group>
      <group name='outerbody' visible={outerBodyVisible}>

      </group>
    </>
  );
}


//set(s => !s)
function Skin() {
  const [show, set] = useState(false);
  const [headVisible, setHeadVisible] = useState(true);
  const [torsoVisible, setTorsoVisible] = useState(true);
  const [leftArmVisible, setLeftArmVisible] = useState(true);
  const [rightArmVisible, setRightArmVisible] = useState(true);
  const [leftFootVisible, setLeftFootVisible] = useState(true);
  const [rightFootVisible, setRightFootVisible] = useState(true);
  const [innerBodyVisible, setInnerBodyVisible] = useState(true);
  const [outerBodyVisible, setOuterBodyVisible] = useState(true);
  const model = setupSkin(headVisible, torsoVisible, leftArmVisible, rightArmVisible, leftFootVisible, rightFootVisible, innerBodyVisible, outerBodyVisible);
  var children = [];
  useFrame(state => {
    children = state.scene.children;
  });
  useControl('Head', {
    type: 'button',
    onClick: () => {
      Promise.resolve(SaveModelPixels(children, pixelDict)).then(setHeadVisible(headVisible => !headVisible))
    }
  });
  useControl('Torso', {
    type: 'button',
    onClick: () => {
      Promise.resolve(SaveModelPixels(children, pixelDict)).then(setTorsoVisible(torsoVisible => !torsoVisible))
    }
  });
  useControl('Left Arm', {
    type: 'button',
    onClick: () => {
      Promise.resolve(SaveModelPixels(children, pixelDict)).then(setLeftArmVisible(leftArmVisible => !leftArmVisible))
    }
  });
  useControl('Right Arm', {
    type: 'button',
    onClick: () => {
      Promise.resolve(SaveModelPixels(children, pixelDict)).then(setRightArmVisible(rightArmVisible => !rightArmVisible))
    }
  });
  useControl('Left Foot', {
    type: 'button',
    onClick: () => {
      Promise.resolve(SaveModelPixels(children, pixelDict)).then(setLeftFootVisible(leftFootVisible => !leftFootVisible))
    }
  });
  useControl('Right Foot', {
    type: 'button',
    onClick: () => {
      Promise.resolve(SaveModelPixels(children, pixelDict)).then(setRightFootVisible(rightFootVisible => !rightFootVisible))
    }
  });
  useControl('Inner Body', {
    type: 'button',
    onClick: () => {
      Promise.resolve(SaveModelPixels(children, pixelDict)).then(setInnerBodyVisible(innerBodyVisible => !innerBodyVisible))
    }
  });

  useControl('Mint', {
    type: 'button',
    onClick: () => {
      setHeadVisible(true);
      setTorsoVisible(true);
      setLeftArmVisible(true);
      setRightArmVisible(true);
      setLeftFootVisible(true);
      setRightFootVisible(true);
      SaveModelPixels(children, pixelDict);
      setTimeout(() => {
        ExportPng(children, pixelDict, pngIndexDict);
      }, 4000);

    }
  });
  return (
    <>
      {model}
      {show}
    </>
  );
}

function App() {
  return (
    <Controls.Provider >
      <Controls.Canvas camera={{ position: [10, 10, 25] }} style={{ height: '100vh', width: '100vw' }}>
        <ambientLight />
        <pointLight position={[10, 0, 10]} intensity={1} />
        <Suspense><Skin /></Suspense>
        <Orbit />
      </Controls.Canvas>
      <Controls />
    </Controls.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
