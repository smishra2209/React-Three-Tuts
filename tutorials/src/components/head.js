import PixelPlane from "./pixelPlane";

function Head(props) {

  const front = [];
  const left = [];
  const right = [];
  const back = [];
  const top = [];
  const bottom = [];
  const adjstmnt = 0.5;

  var len = 64;
  var line = 15;
  var skipLen = 8;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      front.push([i, j, adjstmnt])
      props.pixelDict[i + "," + j + "," + adjstmnt] = ""
      props.pngIndexDict[i + "," + j + "," + adjstmnt] = (len * (line - j)) + skipLen + i;
    }
  }

  line = 15;
  skipLen = 7;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j > -8; j--) {
      left.push([-adjstmnt, i, j])
      props.pixelDict[-adjstmnt + "," + i + "," + j] = ""
      props.pngIndexDict[-adjstmnt + "," + i + "," + j] = (len * (line - i)) + skipLen + j;
    }
  }

  line = 15;
  skipLen = 16;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j > -8; j--) {
      right.push([7 + adjstmnt, i, j])
      props.pixelDict[(7 + adjstmnt) + "," + i + "," + j] = ""
      props.pngIndexDict[(7 + adjstmnt) + "," + i + "," + j] = (len * (line - i)) + skipLen - j;
    }
  }

  line = 15;
  skipLen = 31;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      back.push([i, j, -7 - adjstmnt])
      props.pixelDict[i + "," + j + "," + (-7 - adjstmnt)] = ""
      props.pngIndexDict[i + "," + j + "," + (-7 - adjstmnt)] = (len * (line - j)) + skipLen - i;
    }
  }

  line = 7;
  skipLen = 8;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      top.push([i, 7, -j])
      props.pixelDict[i + ",7," + (-j)] = ""
      props.pngIndexDict[i + ",7," + (-j)] = (len * (line - j)) + skipLen + i;
    }
  }

  line = 7;
  skipLen = 23;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      bottom.push([i, 0, -j])
      props.pixelDict[i + ",0," + (-j)] = ""
      props.pngIndexDict[i + ",0," + (-j)] = (len * (line - j)) + skipLen - i;
    }
  }

  return (
    <>
      {front.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={0x641E16} key={pixel} />
      ))}
      {left.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={0x512E5F} key={pixel} />
      ))}
      {right.map(pixel => (
        <PixelPlane position={pixel} args={[0.01, 1, 1]} color={0x0B5345} key={pixel} />
      ))}
      {back.map(pixel => (
        <PixelPlane position={pixel} args={[1, 1, 0.01]} color={0x7D6608} key={pixel} />
      ))}
      {top.map(pixel => (
        <PixelPlane position={pixel} color={0xF7DC6F} key={pixel} />
      ))}
      {bottom.map(pixel => (
        <PixelPlane position={pixel} color={0xA9CCE3} key={pixel} />
      ))}
    </>
  );

}

export default Head;