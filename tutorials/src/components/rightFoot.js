import PixelPlane from "./pixelPlane";

const defaultColor = "FF8D29";
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
      top.push([i + 1, -6.5, -j + adjstmnt])
      if (props.pixelDict[(i + 1) + "," + (-6.5) + "," + (-j + adjstmnt)] == undefined)
        props.pixelDict[(i + 1) + "," + (-6.5) + "," + (-j + adjstmnt)] = defaultColor
      props.pngIndexDict[(i + 1) + "," + (-6.5) + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 23;
  adjstmnt = 2.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      front.push([(i + 1), -j - 7, adjstmnt])
      if (props.pixelDict[(i + 1) + "," + (-j - 7) + "," + (adjstmnt)] == undefined)
        props.pixelDict[(i + 1) + "," + (-j - 7) + "," + (adjstmnt)] = defaultColor
      props.pngIndexDict[(i + 1) + "," + (-j - 7) + "," + (adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 24;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      right.push([4.5, -j - 7, -i + adjstmnt])
      if (props.pixelDict[(4.5) + "," + (-j - 7) + "," + (-i + adjstmnt)] == undefined)
        props.pixelDict[(4.5) + "," + (-j - 7) + "," + (-i + adjstmnt)] = defaultColor
      props.pngIndexDict[(4.5) + "," + (-j - 7) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 28;
  adjstmnt = 1.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      back.push([(i + 1), -j - 7, -adjstmnt])
      if (props.pixelDict[(i + 1) + "," + (-j - 7) + "," + (-adjstmnt)] == undefined)
        props.pixelDict[(i + 1) + "," + (-j - 7) + "," + (-adjstmnt)] = defaultColor
      props.pngIndexDict[(i + 1) + "," + (-j - 7) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 19;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      left.push([0.5, -j - 7, -i + adjstmnt])
      if (props.pixelDict[(0.5) + "," + (-j - 7) + "," + (-i + adjstmnt)] == undefined)
        props.pixelDict[(0.5) + "," + (-j - 7) + "," + (-i + adjstmnt)] = defaultColor
      props.pngIndexDict[(0.5) + "," + (-j - 7) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 51;
  skipLen = 27;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      bottom.push([(i + 1), -18.5, -j + adjstmnt])
      if (props.pixelDict[(i + 1) + "," + (-18.5) + "," + (-j + adjstmnt)] == undefined)
        props.pixelDict[(i + 1) + "," + (-18.5) + "," + (-j + adjstmnt)] = defaultColor
      props.pngIndexDict[(i + 1) + "," + (-18.5) + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} />
      ))}
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} />
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} />
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} />
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} />
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} />
      ))}
    </>
  );
}

export default RightFoot;