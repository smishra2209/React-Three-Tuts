import PixelPlane from "./pixelPlane";

const defaultColor = "";
function RightArm(props) {
  const top = [];
  const front = [];
  const left = [];
  const right = [];
  const back = [];
  const bottom = [];

  var len = 64;
  var line = 51;
  var skipLen = 39;
  var adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      top.push([-i + 9, 6.5, -j + adjstmnt])
      if (props.pixelUtil.pixelDict[(-i + 9) + "," + 6.5 + "," + (-j + adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(-i + 9) + "," + 6.5 + "," + (-j + adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(-i + 9) + "," + 6.5 + "," + (-j + adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(-i + 9) + "," + 6.5 + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 39;
  adjstmnt = 2.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      front.push([-i + 9, -j + 6, adjstmnt])
      if (props.pixelUtil.pixelDict[(-i + 9) + "," + (-j + 6) + "," + (adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(-i + 9) + "," + (-j + 6) + "," + (adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(-i + 9) + "," + (-j + 6) + "," + (adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(-i + 9) + "," + (-j + 6) + "," + (adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 40;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      right.push([9.5, -j + 6, -i + adjstmnt])
      if (props.pixelUtil.pixelDict[(9.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(9.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(9.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(9.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 44;
  adjstmnt = 1.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      back.push([-i + 9, -j + 6, -adjstmnt])
      if (props.pixelUtil.pixelDict[(-i + 9) + "," + (-j + 6) + "," + (-adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(-i + 9) + "," + (-j + 6) + "," + (-adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(-i + 9) + "," + (-j + 6) + "," + (-adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(-i + 9) + "," + (-j + 6) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 32;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      left.push([5.5, -j + 6, -i + adjstmnt])
      if (props.pixelUtil.pixelDict[(5.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(5.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(5.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(5.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 51;
  skipLen = 43;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      bottom.push([-i + 9, -5.5, -j + adjstmnt])
      if (props.pixelUtil.pixelDict[(-i + 9) + "," + (-5.5) + "," + (-j + adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(-i + 9) + "," + (-5.5) + "," + (-j + adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(-i + 9) + "," + (-5.5) + "," + (-j + adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(-i + 9) + "," + (-5.5) + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightArm && props.pixelUtil.innerBody}/>
      ))}
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightArm && props.pixelUtil.innerBody}/>
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightArm && props.pixelUtil.innerBody}/>
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightArm && props.pixelUtil.innerBody}/>
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightArm && props.pixelUtil.innerBody}/>
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightArm && props.pixelUtil.innerBody}/>
      ))}
    </>
  );
}

export default RightArm;