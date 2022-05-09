import PixelPlane from "./pixelPlane";

const defaultColor = "";
function HeadOuter(props) {
  
  const front = [];
  const left = [];
  const right = [];
  const back = [];
  const top = [];
  const bottom = [];
  const adjstmnt = 1;

  var len = 64;
  var line = 15;
  var skipLen = 40;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      front.push([i-3.5, j+8.5, 4.5])
      if(props.pixelUtil.pixelDict[i-3.5 + "," + (j+8.5) + "," + 4.5] == undefined){
        props.pixelUtil.pixelDict[i-3.5 + "," + (j+8.5) + "," + 4.5] = defaultColor
        props.pixelUtil.opacityDict[i-3.5 + "," + (j+8.5) + "," + 4.5] = 0;
      }
      props.pixelUtil.pngIndexDict[i-3.5 + "," + (j+8.5) + "," + 4.5] = (len * (line - j)) + skipLen + i;
    }
  }

  line = 15;
  skipLen = 39;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j > -8; j--) {
      left.push([-adjstmnt-3.5, i+8.5, j+3.5])
      if(props.pixelUtil.pixelDict[-adjstmnt-3.5 + "," + (i+8.5) + "," + (j+3.5)] == undefined){
        props.pixelUtil.pixelDict[-adjstmnt-3.5 + "," + (i+8.5) + "," + (j+3.5)] = defaultColor
        props.pixelUtil.opacityDict[-adjstmnt-3.5 + "," + (i+8.5) + "," + (j+3.5)] = 0;
      }
      props.pixelUtil.pngIndexDict[-adjstmnt-3.5 + "," + (i+8.5) + "," + (j+3.5)] = (len * (line - i)) + skipLen + j;
    }
  }

  line = 15;
  skipLen = 48;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j > -8; j--) {
      right.push([3.5 + adjstmnt, (i+8.5), j+3.5])
      if(props.pixelUtil.pixelDict[(3.5 + adjstmnt) + "," + (i+8.5) + "," + (j+3.5)] == undefined){
        props.pixelUtil.pixelDict[(3.5 + adjstmnt) + "," + (i+8.5) + "," + (j+3.5)] = defaultColor
        props.pixelUtil.opacityDict[(3.5 + adjstmnt) + "," + (i+8.5) + "," + (j+3.5)] = 0;
      }
      props.pixelUtil.pngIndexDict[(3.5 + adjstmnt) + "," + (i+8.5) + "," + (j+3.5)] = (len * (line - i)) + skipLen - j;
    }
  }

  line = 15;
  skipLen = 63;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      back.push([i-3.5, (j+8.5), -4.5])
      if(props.pixelUtil.pixelDict[i-3.5 + "," + (j+8.5) + "," + (-4.5)] == undefined){
        props.pixelUtil.pixelDict[i-3.5 + "," + (j+8.5) + "," + (-4.5)] = defaultColor
        props.pixelUtil.opacityDict[i-3.5 + "," + (j+8.5) + "," + (-4.5)] = 0;
      }
      props.pixelUtil.pngIndexDict[i-3.5 + "," + (j+8.5) + "," + (-4.5)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 7;
  skipLen = 40;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      top.push([i-3.5, 16.5, -j+3.5])
      if(props.pixelUtil.pixelDict[i-3.5 + ",16.5," + (-j+3.5)] == undefined){
        props.pixelUtil.pixelDict[i-3.5 + ",16.5," + (-j+3.5)] = defaultColor
        props.pixelUtil.opacityDict[i-3.5 + ",16.5," + (-j+3.5)] = 0;
      }
      props.pixelUtil.pngIndexDict[i-3.5 + ",16.5," + (-j+3.5)] = (len * (line - j)) + skipLen + i;
    }
  }

  line = 7;
  skipLen = 55;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      bottom.push([i-3.5, 7.5, -j+3.5])
      if(props.pixelUtil.pixelDict[i-3.5 + ",7.5," + (-j+3.5)] == undefined){
        props.pixelUtil.pixelDict[i-3.5 + ",7.5," + (-j+3.5)] = defaultColor
        props.pixelUtil.opacityDict[i-3.5 + ",7.5," + (-j+3.5)] = 0;
      }
      props.pixelUtil.pngIndexDict[i-3.5 + ",7.5," + (-j+3.5)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.head && props.pixelUtil.outerBody}/>
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.head && props.pixelUtil.outerBody}/>
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.head && props.pixelUtil.outerBody}/>
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.head && props.pixelUtil.outerBody}/>
      ))}
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.head && props.pixelUtil.outerBody}/>
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} pixelUtil={props.pixelUtil} visible={props.pixelUtil.head && props.pixelUtil.outerBody}/>
      ))}
    </>
  );

}

export default HeadOuter;