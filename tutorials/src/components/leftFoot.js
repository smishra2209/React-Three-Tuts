import PixelPlane from "./pixelPlane";

const defaultColor = "343cca";
function LeftFoot(props) {
  const top = [];
  const front = [];
  const left = [];
  const right = [];
  const back = [];
  const bottom = [];

  var len = 64;
  var line = 19;
  var skipLen = 7;
  var adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      top.push([i - 4.5, -7, -j + adjstmnt])
      if (props.pixelUtil.pixelDict[i - 4.5 + "," + (-7) + "," + (-j + adjstmnt)] == undefined)
        props.pixelUtil.pixelDict[i - 4.5 + "," + (-7) + "," + (-j + adjstmnt)] = defaultColor
      props.pixelUtil.pngIndexDict[i - 4.5 + "," + (-7) + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 20;
  skipLen = 7;
  adjstmnt = 2.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      front.push([i - 4.5, -j - 7.5, adjstmnt])
      if (props.pixelUtil.pixelDict[i - 4.5 + "," + (-j - 7.5) + "," + (adjstmnt)] == undefined)
        props.pixelUtil.pixelDict[i - 4.5 + "," + (-j - 7.5) + "," + (adjstmnt)] = defaultColor
      props.pixelUtil.pngIndexDict[i - 4.5 + "," + (-j - 7.5) + "," + (adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 20;
  skipLen = 8;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      right.push([-1, -j - 7.5, -i + adjstmnt])
      if (props.pixelUtil.pixelDict[(-1) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] == undefined)
        props.pixelUtil.pixelDict[(-1) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = defaultColor
      props.pixelUtil.pngIndexDict[(-1) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 20;
  skipLen = 12;
  adjstmnt = 1.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      back.push([i - 4.5, -j - 7.5, -adjstmnt])
      if (props.pixelUtil.pixelDict[i - 4.5 + "," + (-j - 7.5) + "," + (-adjstmnt)] == undefined)
        props.pixelUtil.pixelDict[i - 4.5 + "," + (-j - 7.5) + "," + (-adjstmnt)] = defaultColor
      props.pixelUtil.pngIndexDict[i - 4.5 + "," + (-j - 7.5) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 20;
  skipLen = 3;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      left.push([-5, -j - 7.5, -i + adjstmnt])
      if (props.pixelUtil.pixelDict[(-5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] == undefined)
        props.pixelUtil.pixelDict[(-5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = defaultColor
      props.pixelUtil.pngIndexDict[(-5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 19;
  skipLen = 11;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      bottom.push([i - 4.5, -19, -j + adjstmnt])
      if (props.pixelUtil.pixelDict[i - 4.5 + "," + (-19) + "," + (-j + adjstmnt)] == undefined)
        props.pixelUtil.pixelDict[i - 4.5 + "," + (-19) + "," + (-j + adjstmnt)] = defaultColor
      props.pixelUtil.pngIndexDict[i - 4.5 + "," + (-19) + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.leftFoot && props.pixelUtil.innerBody}/>
      ))}
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.leftFoot && props.pixelUtil.innerBody}/>
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.leftFoot && props.pixelUtil.innerBody}/>
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.leftFoot && props.pixelUtil.innerBody}/>
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.leftFoot && props.pixelUtil.innerBody}/>
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.leftFoot && props.pixelUtil.innerBody}/>
      ))}
    </>
  );
}

export default LeftFoot;