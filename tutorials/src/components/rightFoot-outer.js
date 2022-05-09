import PixelPlane from "./pixelPlane";

const defaultColor = "";
function RightFootOuter(props) {
  const top = [];
  const front = [];
  const left = [];
  const right = [];
  const back = [];
  const bottom = [];

  var len = 64;
  var line = 51;
  var skipLen = 7;
  var adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      top.push([i + 1.5, -6.5, -j + adjstmnt])
      if (props.pixelUtil.pixelDict[(i + 1.5) + "," + (-6.5) + "," + (-j + adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(i + 1.5) + "," + (-6.5) + "," + (-j + adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(i + 1.5) + "," + (-6.5) + "," + (-j + adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(i + 1.5) + "," + (-6.5) + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 7;
  adjstmnt = 3;
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
  skipLen = 8;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      right.push([5.5, -j - 7.5, -i + adjstmnt])
      if (props.pixelUtil.pixelDict[(5.5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(5.5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(5.5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(5.5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 12;
  adjstmnt = 2;
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
  skipLen = 3;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      left.push([0.5, -j - 7.5, -i + adjstmnt])
      if (props.pixelUtil.pixelDict[(0.5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(0.5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(0.5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(0.5) + "," + (-j - 7.5) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 51;
  skipLen = 11;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      bottom.push([(i + 1.5), -19.5, -j + adjstmnt])
      if (props.pixelUtil.pixelDict[(i + 1.5) + "," + (-19.5) + "," + (-j + adjstmnt)] == undefined){
        props.pixelUtil.pixelDict[(i + 1.5) + "," + (-19.5) + "," + (-j + adjstmnt)] = defaultColor
        props.pixelUtil.opacityDict[(i + 1.5) + "," + (-19.5) + "," + (-j + adjstmnt)] = 0;
      }
      props.pixelUtil.pngIndexDict[(i + 1.5) + "," + (-19.5) + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightFoot && props.pixelUtil.outerBody}/>
      ))}
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightFoot && props.pixelUtil.outerBody}/>
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightFoot && props.pixelUtil.outerBody}/>
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightFoot && props.pixelUtil.outerBody}/>
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightFoot && props.pixelUtil.outerBody}/>
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.rightFoot && props.pixelUtil.outerBody}/>
      ))}
    </>
  );
}

export default RightFootOuter;