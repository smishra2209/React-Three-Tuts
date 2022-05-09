import PixelPlane from "./pixelPlane";

const defaultColor = "ff0000";
function LeftArmOuter(props) {
  const top = [];
  const front = [];
  const left = [];
  const right = [];
  const back = [];
  const bottom = [];

  var len = 64;
  var line = 35;
  var skipLen = 47;
  var adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      top.push([-i - 6, 7, -j + adjstmnt])
      if(props.pixelUtil.pixelDict[(-i - 6) + "," + 7 + "," + (-j + adjstmnt)] == undefined)
        props.pixelUtil.pixelDict[(-i - 6) + "," + 7 + "," + (-j + adjstmnt)] = defaultColor
      props.pixelUtil.pngIndexDict[(-i - 6) + "," + 7 + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 36;
  skipLen = 47;
  adjstmnt = 3;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      front.push([-i - 6, -j + 6, adjstmnt])
      if(props.pixelUtil.pixelDict[(-i - 6) + "," + (-j + 6) + "," + (adjstmnt)] == undefined)
        props.pixelUtil.pixelDict[(-i - 6) + "," + (-j + 6) + "," + (adjstmnt)] = defaultColor
      props.pixelUtil.pngIndexDict[(-i - 6) + "," + (-j + 6) + "," + (adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 36;
  skipLen = 48;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      right.push([-5, -j + 6, -i + adjstmnt])
      if(props.pixelUtil.pixelDict[(-5) + "," + (-j + 6) + "," + (-i + adjstmnt)] == undefined)
        props.pixelUtil.pixelDict[(-5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = defaultColor
      props.pixelUtil.pngIndexDict[(-5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 36;
  skipLen = 52;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      back.push([-i - 6, -j + 6, -adjstmnt])
      if(props.pixelUtil.pixelDict[(-i - 6) + "," + (-j + 6) + "," + (-adjstmnt)] == undefined)
        props.pixelUtil.pixelDict[(-i - 6) + "," + (-j + 6) + "," + (-adjstmnt)] = defaultColor
      props.pixelUtil.pngIndexDict[(-i - 6) + "," + (-j + 6) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 36;
  skipLen = 43;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      left.push([-10, -j + 6, -i + adjstmnt])
      if(props.pixelUtil.pixelDict[(-10) + "," + (-j + 6) + "," + (-i + adjstmnt)] == undefined)
        props.pixelUtil.pixelDict[(-10) + "," + (-j + 6) + "," + (-i + adjstmnt)] = defaultColor
      props.pixelUtil.pngIndexDict[(-10) + "," + (-j + 6) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 35;
  skipLen = 51;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      bottom.push([-i - 6, -6, -j + adjstmnt])
      if(props.pixelUtil.pixelDict[(-i - 6) + "," + (-6) + "," + (-j + adjstmnt)] == undefined)
        props.pixelUtil.pixelDict[(-i - 6) + "," + (-6) + "," + (-j + adjstmnt)] = defaultColor
      props.pixelUtil.pngIndexDict[(-i - 6) + "," + (-6) + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.leftArm && props.pixelUtil.outerBody}/>
      ))}
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.leftArm && props.pixelUtil.outerBody}/>
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.leftArm && props.pixelUtil.outerBody}/>
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.leftArm && props.pixelUtil.outerBody}/>
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.leftArm && props.pixelUtil.outerBody}/>
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.leftArm && props.pixelUtil.outerBody}/>
      ))}
    </>
  );
}

export default LeftArmOuter;