import PixelPlane from "./pixelPlane";

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
      top.push([-i + 11.05, -0.55, -j - adjstmnt])
      props.pixelDict[(-i + 11.05) + "," + (-0.55) + "," + (-j - adjstmnt)] = ""
      props.pngIndexDict[(-i + 11.05) + "," + (-0.55) + "," + (-j - adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 39;
  adjstmnt = 1.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      front.push([-i + 11.05, -j - 1.05, -adjstmnt])
      props.pixelDict[(-i + 11.05) + "," + (-j - 1.05) + "," + (-adjstmnt)] = ""
      props.pngIndexDict[(-i + 11.05) + "," + (-j - 1.05) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 40;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      right.push([11.55, -j - 1.05, -i - adjstmnt])
      props.pixelDict[(11.55) + "," + (-j - 1.05) + "," + (-i - adjstmnt)] = ""
      props.pngIndexDict[(11.55) + "," + (-j - 1.05) + "," + (-i - adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 44;
  adjstmnt = 5.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      back.push([-i + 11.05, -j - 1.05, -adjstmnt])
      props.pixelDict[(-i + 11.05) + "," + (-j - 1.05) + "," + (-adjstmnt)] = ""
      props.pngIndexDict[(-i + 11.05) + "," + (-j - 1.05) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 32;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      left.push([7.55, -j - 1.05, -i - adjstmnt])
      props.pixelDict[(7.55) + "," + (-j - 1.05) + "," + (-i - adjstmnt)] = ""
      props.pngIndexDict[(7.55) + "," + (-j - 1.05) + "," + (-i - adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 51;
  skipLen = 43;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      bottom.push([-i + 11.05, -12.55, -j - adjstmnt])
      props.pixelDict[(-i + 11.05) + "," + (-12.55) + "," + (-j - adjstmnt)] = ""
      props.pngIndexDict[(-i + 11.05) + "," + (-12.55) + "," + (-j - adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={0xF5B041} key={pixel} />
      ))}
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={0x641E16} key={pixel} />
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={0x512E5F} key={pixel} />
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={0x7D6608} key={pixel} />
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={0x0B5345} key={pixel} />
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={0xF5B041} key={pixel} />
      ))}
    </>
  );
}

export default RightArm;