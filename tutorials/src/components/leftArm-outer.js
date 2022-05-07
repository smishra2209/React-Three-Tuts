import PixelPlane from "./pixelPlane";

const defaultColor = "B22727";
function LeftArmOuter(props) {
  const top = [];
  const front = [];
  const left = [];
  const right = [];
  const back = [];
  const bottom = [];

  var len = 64;
  var line = 19;
  var skipLen = 47;
  var adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      top.push([-i - 5.5, 7, -j + adjstmnt])
      if(props.pixelDict[(-i - 5.5) + "," + 7 + "," + (-j + adjstmnt)] == undefined)
        props.pixelDict[(-i - 5.5) + "," + 7 + "," + (-j + adjstmnt)] = defaultColor
      props.pngIndexDict[(-i - 5.5) + "," + 7 + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 20;
  skipLen = 47;
  adjstmnt = 3;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      front.push([-i - 5.5, -j + 6, adjstmnt])
      if(props.pixelDict[(-i - 5.5) + "," + (-j + 6) + "," + (adjstmnt)] == undefined)
        props.pixelDict[(-i - 5.5) + "," + (-j + 6) + "," + (adjstmnt)] = defaultColor
      props.pngIndexDict[(-i - 5.5) + "," + (-j + 6) + "," + (adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 20;
  skipLen = 48;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      right.push([-4.5, -j + 6, -i + adjstmnt])
      if(props.pixelDict[(-4.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] == undefined)
        props.pixelDict[(-4.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = defaultColor
      props.pngIndexDict[(-4.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 20;
  skipLen = 52;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      back.push([-i - 5.5, -j + 6, -adjstmnt])
      if(props.pixelDict[(-i - 5.5) + "," + (-j + 6) + "," + (-adjstmnt)] == undefined)
        props.pixelDict[(-i - 5.5) + "," + (-j + 6) + "," + (-adjstmnt)] = defaultColor
      props.pngIndexDict[(-i - 5.5) + "," + (-j + 6) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 20;
  skipLen = 43;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      left.push([-9.5, -j + 6, -i + adjstmnt])
      if(props.pixelDict[(-9.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] == undefined)
        props.pixelDict[(-9.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = defaultColor
      props.pngIndexDict[(-9.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 19;
  skipLen = 51;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      bottom.push([-i - 5.5, -6, -j + adjstmnt])
      if(props.pixelDict[(-i - 5.5) + "," + (-6) + "," + (-j + adjstmnt)] == undefined)
        props.pixelDict[(-i - 5.5) + "," + (-6) + "," + (-j + adjstmnt)] = defaultColor
      props.pngIndexDict[(-i - 5.5) + "," + (-6) + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} />
      ))}
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} />
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} />
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} />
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true} />
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelDict[pixel[0]+","+pixel[1]+","+pixel[2]]} key={pixel} outer={true}/>
      ))}
    </>
  );
}

export default LeftArmOuter;