import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Controls, useControl } from 'react-three-gui';
import {useFrame} from 'react-three-fiber';
import Orbit from './components/orbit';
import Head from './components/head';
import Torso from './components/torso';
import LeftArm from './components/leftArm';
import RightArm from './components/rightArm';
import LeftFoot from './components/leftFoot';
import RightFoot from './components/rightFoot';
import ExportPng from './util/skinUtil';

const GROUP = 'Edit';
const pixelDict = [];
const pngIndexDict = [];

function setupSkin(){return (
    <>
      <Head pixelDict={pixelDict} pngIndexDict={pngIndexDict}/>
      <Torso pixelDict={pixelDict} pngIndexDict={pngIndexDict}/>
      <LeftArm pixelDict={pixelDict} pngIndexDict={pngIndexDict}/>
      <RightArm pixelDict={pixelDict} pngIndexDict={pngIndexDict}/>
      <LeftFoot pixelDict={pixelDict} pngIndexDict={pngIndexDict}/>
      <RightFoot pixelDict={pixelDict} pngIndexDict={pngIndexDict}/>
    </>
  );
}

//set(s => !s)
function Skin() {
  const [show, set] = useState(false);
  var children = [];
  useFrame(state => { 
    children = state.scene.children;
  });
  useControl('Toggle cube', {
    type: 'button',
    onClick: () => ExportPng(children, pixelDict, pngIndexDict),
  });
  return (
    <>
      {setupSkin()}
      {show}
    </>
  );
}

function App() {
  return (
    <Controls.Provider >
      <Controls.Canvas camera = {{position: [10,-5,25]}} style={{height: '100vh', width: '100vw'}}>
        <ambientLight />
        <pointLight position={[10, 0, 10]} intensity={1} />
        <Skin/>
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
