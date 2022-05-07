import PixelPlane from "./pixelPlane";

const defaultColor = "FF8D29";
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
      front.push([i-3.5, j+8, 4])
      if(props.pixelDict[i-3.5 + "," + (j+8) + "," + 4] == undefined)
        props.pixelDict[i-3.5 + "," + (j+8) + "," + 4] = defaultColor
      props.pngIndexDict[i-3.5 + "," + (j+8) + "," + 4] = (len * (line - j)) + skipLen + i;
    }
  }

  line = 15;
  skipLen = 7;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j > -8; j--) {
      left.push([-adjstmnt-3, i+8, j+3.5])
      if(props.pixelDict[-adjstmnt-3 + "," + (i+8) + "," + (j+3.5)] == undefined)
        props.pixelDict[-adjstmnt-3 + "," + (i+8) + "," + (j+3.5)] = defaultColor
      props.pngIndexDict[-adjstmnt-3 + "," + (i+8) + "," + (j+3.5)] = (len * (line - i)) + skipLen + j;
    }
  }

  line = 15;
  skipLen = 16;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j > -8; j--) {
      right.push([3 + adjstmnt, (i+8), j+3.5])
      if(props.pixelDict[(3 + adjstmnt) + "," + (i+8) + "," + (j+3.5)] == undefined)
        props.pixelDict[(3 + adjstmnt) + "," + (i+8) + "," + (j+3.5)] = defaultColor
      props.pngIndexDict[(3 + adjstmnt) + "," + (i+8) + "," + (j+3.5)] = (len * (line - i)) + skipLen - j;
    }
  }

  line = 15;
  skipLen = 31;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      back.push([i-3.5, (j+8), -4])
      if(props.pixelDict[i-3.5 + "," + (j+8) + "," + (-4)] == undefined)
        props.pixelDict[i-3.5 + "," + (j+8) + "," + (-4)] = defaultColor
      props.pngIndexDict[i-3.5 + "," + (j+8) + "," + (-4)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 7;
  skipLen = 8;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      top.push([i-3.5, 15.5, -j+3.5])
      if(props.pixelDict[i-3.5 + ",15.5," + (-j+3.5)] == undefined)
        props.pixelDict[i-3.5 + ",15.5," + (-j+3.5)] = defaultColor
      props.pngIndexDict[i-3.5 + ",15.5," + (-j+3.5)] = (len * (line - j)) + skipLen + i;
    }
  }

  line = 7;
  skipLen = 23;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      bottom.push([i-3.5, 7.5, -j+3.5])
      if(props.pixelDict[i-3.5 + ",7.5," + (-j+3.5)] == undefined)
        props.pixelDict[i-3.5 + ",7.5," + (-j+3.5)] = defaultColor
      props.pngIndexDict[i-3.5 + ",7.5," + (-j+3.5)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel}/>
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} />
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} />
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} />
      ))}
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} />
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} />
      ))}
    </>
  );

}

export default Head;