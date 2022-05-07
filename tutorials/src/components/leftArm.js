import PixelPlane from "./pixelPlane";

function LeftArm(props) {
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
      top.push([-i - 1.05, -0.55, -j - adjstmnt])
      props.pixelDict[(-i - 1.05) + "," + (-0.55) + "," + (-j - adjstmnt)] = ""
      props.pngIndexDict[(-i - 1.05) + "," + (-0.55) + "," + (-j - adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 20;
  skipLen = 47;
  adjstmnt = 1.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      front.push([-i - 1.05, -j - 1.05, -adjstmnt])
      props.pixelDict[(-i - 1.05) + "," + (-j - 1.05) + "," + (-adjstmnt)] = ""
      props.pngIndexDict[(-i - 1.05) + "," + (-j - 1.05) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 20;
  skipLen = 48;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      right.push([-0.55, -j - 1.05, -i - adjstmnt])
      props.pixelDict[(-0.55) + "," + (-j - 1.05) + "," + (-i - adjstmnt)] = ""
      props.pngIndexDict[(-0.55) + "," + (-j - 1.05) + "," + (-i - adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 20;
  skipLen = 52;
  adjstmnt = 5.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      back.push([-i - 1.05, -j - 1.05, -adjstmnt])
      props.pixelDict[(-i - 1.05) + "," + (-j - 1.05) + "," + (-adjstmnt)] = ""
      props.pngIndexDict[(-i - 1.05) + "," + (-j - 1.05) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 20;
  skipLen = 43;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      left.push([-4.55, -j - 1.05, -i - adjstmnt])
      props.pixelDict[(-4.55) + "," + (-j - 1.05) + "," + (-i - adjstmnt)] = ""
      props.pngIndexDict[(-4.55) + "," + (-j - 1.05) + "," + (-i - adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 19;
  skipLen = 51;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      bottom.push([-i - 1.05, -12.55, -j - adjstmnt])
      props.pixelDict[(-i - 1.05) + "," + (-12.55) + "," + (-j - adjstmnt)] = ""
      props.pngIndexDict[(-i - 1.05) + "," + (-12.55) + "," + (-j - adjstmnt)] = (len * (line - j)) + skipLen - i;
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
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={0x512E5F} key={pixel} />
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={0xF5B041} key={pixel} />
      ))}
    </>
  );
}

export default LeftArm;