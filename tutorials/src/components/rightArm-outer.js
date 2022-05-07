import PixelPlane from "./pixelPlane";

const defaultColor = "B22727";
function RightArmOuter(props) {
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
      top.push([-i + 8.5, 7, -j + adjstmnt])
      if (props.pixelDict[(-i + 8.5) + "," + 7 + "," + (-j + adjstmnt)] == undefined)
        props.pixelDict[(-i + 8.5) + "," + 7 + "," + (-j + adjstmnt)] = defaultColor
      props.pngIndexDict[(-i + 8.5) + "," + 7 + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 39;
  adjstmnt = 3;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      front.push([-i + 8.5, -j + 6, adjstmnt])
      if (props.pixelDict[(-i + 8.5) + "," + (-j + 6) + "," + (adjstmnt)] == undefined)
        props.pixelDict[(-i + 8.5) + "," + (-j + 6) + "," + (adjstmnt)] = defaultColor
      props.pngIndexDict[(-i + 8.5) + "," + (-j + 6) + "," + (adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 40;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      right.push([9.5, -j + 6, -i + adjstmnt])
      if (props.pixelDict[(9.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] == undefined)
        props.pixelDict[(9.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = defaultColor
      props.pngIndexDict[(9.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 44;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      back.push([-i + 8.5, -j + 6, -adjstmnt])
      if (props.pixelDict[(-i + 8.5) + "," + (-j + 6) + "," + (-adjstmnt)] == undefined)
        props.pixelDict[(-i + 8.5) + "," + (-j + 6) + "," + (-adjstmnt)] = defaultColor
      props.pngIndexDict[(-i + 8.5) + "," + (-j + 6) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 32;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      left.push([4.5, -j + 6, -i + adjstmnt])
      if (props.pixelDict[(4.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] == undefined)
        props.pixelDict[(4.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = defaultColor
      props.pngIndexDict[(4.5) + "," + (-j + 6) + "," + (-i + adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 51;
  skipLen = 43;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      bottom.push([-i + 8.5, -6, -j + adjstmnt])
      if (props.pixelDict[(-i + 8.5) + "," + (-6) + "," + (-j + adjstmnt)] == undefined)
        props.pixelDict[(-i + 8.5) + "," + (-6) + "," + (-j + adjstmnt)] = defaultColor
      props.pngIndexDict[(-i + 8.5) + "," + (-6) + "," + (-j + adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} outer={true} />
      ))}
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} outer={true} />
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} outer={true} />
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={props.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} outer={true} />
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={props.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} outer={true} />
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={props.pixelDict[pixel[0] + "," + pixel[1] + "," + pixel[2]]} key={pixel} outer={true} />
      ))}
    </>
  );
}

export default RightArmOuter;