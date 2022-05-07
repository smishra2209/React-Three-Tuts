import PixelPlane from "./pixelPlane";

function LeftFoot(props) {
  const top = [];
  const front = [];
  const left = [];
  const right = [];
  const back = [];
  const bottom = [];

  var len = 64;
  var line = 19;
  var skipLen = 7;
  var adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      top.push([i, -12.60, -j - adjstmnt])
      props.pixelDict[i + "," + (-12.60) + "," + (-j - adjstmnt)] = ""
      props.pngIndexDict[i + "," + (-12.60) + "," + (-j - adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 20;
  skipLen = 7;
  adjstmnt = 1.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      front.push([i, -j - 13.05, -adjstmnt])
      props.pixelDict[i + "," + (-j - 13.05) + "," + (-adjstmnt)] = ""
      props.pngIndexDict[i + "," + (-j - 13.05) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 20;
  skipLen = 8;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      right.push([3.45, -j - 13.05, -i - adjstmnt])
      props.pixelDict[(3.45) + "," + (-j - 13.05) + "," + (-i - adjstmnt)] = ""
      props.pngIndexDict[(3.45) + "," + (-j - 13.05) + "," + (-i - adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 20;
  skipLen = 12;
  adjstmnt = 5.5;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      back.push([i, -j - 13.05, -adjstmnt])
      props.pixelDict[i + "," + (-j - 13.05) + "," + (-adjstmnt)] = ""
      props.pngIndexDict[i + "," + (-j - 13.05) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen + i;
    }
  }

  line = 20;
  skipLen = 3;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 12; j++) {
      left.push([-0.5, -j - 13.05, -i - adjstmnt])
      props.pixelDict[(-0.5) + "," + (-j - 13.05) + "," + (-i - adjstmnt)] = ""
      props.pngIndexDict[(-0.5) + "," + (-j - 13.05) + "," + (-i - adjstmnt)] = (len * (line + j)) + skipLen - i;
    }
  }

  line = 19;
  skipLen = 11;
  adjstmnt = 2;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      bottom.push([i, -24.6, -j - adjstmnt])
      props.pixelDict[i + "," + (-24.6) + "," + (-j - adjstmnt)] = ""
      props.pngIndexDict[i + "," + (-24.6) + "," + (-j - adjstmnt)] = (len * (line - j)) + skipLen - i;
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

export default LeftFoot;