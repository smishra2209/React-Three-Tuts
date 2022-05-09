import PixelPlane from "./pixelPlane";

const defaultColor = "";
function RightFoot(props) {
  const top = [];
  const front = [];
  const left = [];
  const right = [];
  const back = [];
  const bottom = [];

  var len = 64;
  var line = 51;
  var skipLen = 23;
  var adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      top.push([i + 1.5, -7, -j + adjstmnt])
      if (props.pixelUtil.pixelDict[(i + 1.5) + "," + (-7) + "," + (-j + adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(i + 1.5) + "," + (-7) + "," + (-j + adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(i + 1.5) + "," + (-7) + "," + (-j + adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(i + 1.5) + "," + (-7) + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 23;
  adjstmnt = 2.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      front.push([(i + 1.5), -j - 7.5, adjstmnt])
      if (props.pixelUtil.pixelDict[(i + 1.5) + "," + (-j - 7.5) + "," + (adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(i + 1.5) + "," + (-j - 7.5) + "," + (adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(i + 1.5) + "," + (-j - 7.5) + "," + (adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(i + 1.5) + "," + (-j - 7.5) + "," + (adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 24;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      right.push([5, -j - 7.5, -i + adjstmnt])
      if (props.pixelUtil.pixelDict[(5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 28;
  adjstmnt = 1.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      back.push([(i + 1.5), -j - 7.5, -adjstmnt])
      if (props.pixelUtil.pixelDict[(i + 1.5) + "," + (-j - 7.5) + "," + (-adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(i + 1.5) + "," + (-j - 7.5) + "," + (-adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(i + 1.5) + "," + (-j - 7.5) + "," + (-adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(i + 1.5) + "," + (-j - 7.5) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 19;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      left.push([1, -j - 7.5, -i + adjstmnt])
      if (props.pixelUtil.pixelDict[(1) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(1) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(1) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(1) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 51;
  skipLen = 27;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      bottom.push([(i + 1.5), -19, -j + adjstmnt])
      if (props.pixelUtil.pixelDict[(i + 1.5) + "," + (-19) + "," + (-j + adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(i + 1.5) + "," + (-19) + "," + (-j + adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(i + 1.5) + "," + (-19) + "," + (-j + adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(i + 1.5) + "," + (-19) + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightFoot && props.pixelUtil.innerBody}/>
      ))}
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightFoot && props.pixelUtil.innerBody}/>
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightFoot && props.pixelUtil.innerBody}/>
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightFoot && props.pixelUtil.innerBody}/>
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightFoot && props.pixelUtil.innerBody}/>
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightFoot && props.pixelUtil.innerBody}/>
      ))}
    </>
  );
}

export default RightFoot;