import PixelPlane from "./pixelPlane";

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
      top.push([i + 4, -12.60, -j - adjstmnt])
      props.pixelDict[(i + 4) + "," + (-12.60) + "," + (-j - adjstmnt)] = ""
      props.pngIndexDict[(i + 4) + "," + (-12.60) + "," + (-j - adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 23;
  adjstmnt = 1.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      front.push([(i + 4), -j - 13.05, -adjstmnt])
      props.pixelDict[(i + 4) + "," + (-j - 13.05) + "," + (-adjstmnt)] = ""
      props.pngIndexDict[(i + 4) + "," + (-j - 13.05) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 52;
  skipLen = 24;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      right.push([7.45, -j - 13.05, -i - adjstmnt])
      props.pixelDict[(7.45) + "," + (-j - 13.05) + "," + (-i - adjstmnt)] = ""
      props.pngIndexDict[(7.45) + "," + (-j - 13.05) + "," + (-i - adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 28;
  adjstmnt = 5.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      back.push([(i + 4), -j - 13.05, -adjstmnt])
      props.pixelDict[(i + 4) + "," + (-j - 13.05) + "," + (-adjstmnt)] = ""
      props.pngIndexDict[(i + 4) + "," + (-j - 13.05) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 52;
  skipLen = 19;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      left.push([3.5, -j - 13.05, -i - adjstmnt])
      props.pixelDict[(3.5) + "," + (-j - 13.05) + "," + (-i - adjstmnt)] = ""
      props.pngIndexDict[(3.5) + "," + (-j - 13.05) + "," + (-i - adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 51;
  skipLen = 27;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      bottom.push([(i + 4), -24.6, -j - adjstmnt])
      props.pixelDict[(i + 4) + "," + (-24.6) + "," + (-j - adjstmnt)] = ""
      props.pngIndexDict[(i + 4) + "," + (-24.6) + "," + (-j - adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {top.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={0x641E16} key={pixel} />
      ))}
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={0x7D6608} key={pixel} />
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={0x0B5345} key={pixel} />
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={0x512E5F} key={pixel} />
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={0x641E16} key={pixel} />
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} args={[1, 0.01, 1]} color={0xF5B041} key={pixel} />
      ))}
    </>
  );
}

export default RightFoot;