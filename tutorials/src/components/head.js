import PixelPlane from "./pixelPlane";

const defaultColor = "";
function Head(props) {

  const front = [];
  const left = [];
  const right = [];
  const back = [];
  const top = [];
  const bottom = [];
  const adjstmnt = 1;

  var len = 64;
  var line = 15;
  var skipLen = 8;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      front.push([i-3.5, j+8.5, 4])
      if(props.pixelUtil.pixelDict[i-3.5 + "," + (j+8.5) + "," + 4] == undefined){
        props.pixelUtil.pixelDict[i-3.5 + "," + (j+8.5) + "," + 4] = defaultColor
        props.pixelUtil.opacityDict[i-3.5 + "," + (j+8.5) + "," + 4] = 0;
      } 
      props.pixelUtil.pngIndexDict[i-3.5 + "," + (j+8.5) + "," + 4] = (len * (line - j)) + skipLen + i;
    }
  }

  line = 15;
  skipLen = 7;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j > -8; j--) {
      left.push([-adjstmnt-3, i+8.5, j+3.5])
      if(props.pixelUtil.pixelDict[-adjstmnt-3 + "," + (i+8.5) + "," + (j+3.5)] == undefined){
        props.pixelUtil.pixelDict[-adjstmnt-3 + "," + (i+8.5) + "," + (j+3.5)] = defaultColor
        props.pixelUtil.opacityDict[-adjstmnt-3 + "," + (i+8.5) + "," + (j+3.5)] = 0;
      }
      props.pixelUtil.pngIndexDict[-adjstmnt-3 + "," + (i+8.5) + "," + (j+3.5)] = (len * (line - i)) + skipLen + j;
    }
  }

  line = 15;
  skipLen = 16;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j > -8; j--) {
      right.push([3 + adjstmnt, (i+8.5), j+3.5])
      if(props.pixelUtil.pixelDict[(3 + adjstmnt) + "," + (i+8.5) + "," + (j+3.5)] == undefined){
        props.pixelUtil.pixelDict[(3 + adjstmnt) + "," + (i+8.5) + "," + (j+3.5)] = defaultColor
        props.pixelUtil.opacityDict[(3 + adjstmnt) + "," + (i+8.5) + "," + (j+3.5)] = 0;
      }
      props.pixelUtil.pngIndexDict[(3 + adjstmnt) + "," + (i+8.5) + "," + (j+3.5)] = (len * (line - i)) + skipLen - j;
    }
  }

  line = 15;
  skipLen = 31;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      back.push([i-3.5, (j+8.5), -4])
      if(props.pixelUtil.pixelDict[i-3.5 + "," + (j+8.5) + "," + (-4)] == undefined){
        props.pixelUtil.pixelDict[i-3.5 + "," + (j+8.5) + "," + (-4)] = defaultColor
        props.pixelUtil.opacityDict[i-3.5 + "," + (j+8.5) + "," + (-4)] = 0;
      }
      props.pixelUtil.pngIndexDict[i-3.5 + "," + (j+8.5) + "," + (-4)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 7;
  skipLen = 8;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      top.push([i-3.5, 16, -j+3.5])
      if(props.pixelUtil.pixelDict[i-3.5 + ",16," + (-j+3.5)] == undefined){
        props.pixelUtil.pixelDict[i-3.5 + ",16," + (-j+3.5)] = defaultColor
        props.pixelUtil.opacityDict[i-3.5 + ",16," + (-j+3.5)] = 0;
      }
      props.pixelUtil.pngIndexDict[i-3.5 + ",16," + (-j+3.5)] = (len * (line - j)) + skipLen + i;
    }
  }

  line = 7;
  skipLen = 23;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      bottom.push([i-3.5, 8, -j+3.5])
      if(props.pixelUtil.pixelDict[i-3.5 + ",8," + (-j+3.5)] == undefined){
        props.pixelUtil.pixelDict[i-3.5 + ",8," + (-j+3.5)] = defaultColor
        props.pixelUtil.opacityDict[i-3.5 + ",8," + (-j+3.5)] = 0;
      }
      props.pixelUtil.pngIndexDict[i-3.5 + ",8," + (-j+3.5)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.head && props.pixelUtil.innerBody}/>
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.head && props.pixelUtil.innerBody}/>
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.head && props.pixelUtil.innerBody}/>
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.head && props.pixelUtil.innerBody}/>
      ))}
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.head && props.pixelUtil.innerBody}/>
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelUtil.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} pixelUtil={props.pixelUtil} visible={props.pixelUtil.head && props.pixelUtil.innerBody}/>
      ))}
    </>
  );

}

export default Head;