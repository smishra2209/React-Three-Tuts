import PixelPlane from "./pixelPlane";

const defaultColor = "B22727";
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
  var skipLen = 8;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      front.push([i-3.5, j+8, 4.5])
      if(props.pixelDict[i-3.5 + "," + (j+8) + "," + 4.5] == undefined)
        props.pixelDict[i-3.5 + "," + (j+8) + "," + 4.5] = defaultColor
      props.pngIndexDict[i-3.5 + "," + (j+8) + "," + 4.5] = (len * (line - j)) + skipLen + i;
    }
  }

  line = 15;
  skipLen = 7;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j > -8; j--) {
      left.push([-adjstmnt-3.5, i+8, j+3.5])
      if(props.pixelDict[-adjstmnt-3.5 + "," + (i+8) + "," + (j+3.5)] == undefined)
        props.pixelDict[-adjstmnt-3.5 + "," + (i+8) + "," + (j+3.5)] = defaultColor
      props.pngIndexDict[-adjstmnt-3.5 + "," + (i+8) + "," + (j+3.5)] = (len * (line - i)) + skipLen + j;
    }
  }

  line = 15;
  skipLen = 16;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j > -8; j--) {
      right.push([3.5 + adjstmnt, (i+8), j+3.5])
      if(props.pixelDict[(3.5 + adjstmnt) + "," + (i+8) + "," + (j+3.5)] == undefined)
        props.pixelDict[(3.5 + adjstmnt) + "," + (i+8) + "," + (j+3.5)] = defaultColor
      props.pngIndexDict[(3.5 + adjstmnt) + "," + (i+8) + "," + (j+3.5)] = (len * (line - i)) + skipLen - j;
    }
  }

  line = 15;
  skipLen = 31;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      back.push([i-3.5, (j+8), -4.5])
      if(props.pixelDict[i-3.5 + "," + (j+8) + "," + (-4.5)] == undefined)
        props.pixelDict[i-3.5 + "," + (j+8) + "," + (-4.5)] = defaultColor
      props.pngIndexDict[i-3.5 + "," + (j+8) + "," + (-4.5)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 7;
  skipLen = 8;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      top.push([i-3.5, 16, -j+3.5])
      if(props.pixelDict[i-3.5 + ",16," + (-j+3.5)] == undefined)
        props.pixelDict[i-3.5 + ",16," + (-j+3.5)] = defaultColor
      props.pngIndexDict[i-3.5 + ",16," + (-j+3.5)] = (len * (line - j)) + skipLen + i;
    }
  }

  line = 7;
  skipLen = 23;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      bottom.push([i-3.5, 7, -j+3.5])
      if(props.pixelDict[i-3.5 + ",7," + (-j+3.5)] == undefined)
        props.pixelDict[i-3.5 + ",7," + (-j+3.5)] = defaultColor
      props.pngIndexDict[i-3.5 + ",7," + (-j+3.5)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true}/>
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true}/>
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true}/>
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true}/>
      ))}
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true}/>
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true}/>
      ))}
    </>
  );

}

export default HeadOuter;