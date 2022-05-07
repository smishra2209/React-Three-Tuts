import PixelPlane from "./pixelPlane";

function Torso(props) {
    const top = [];
    const front = [];
    const left = [];
    const right = [];
    const back = [];
    const bottom = [];

    var len = 64;
    var line = 19;
    var skipLen = 20;
    var adjstmnt = 2;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 4; j++) {
            top.push([i, -0.55, -j - adjstmnt])
            props.pixelDict[i + ",-0.55," + (-j - adjstmnt)] = ""
            props.pngIndexDict[i + ",-0.55," + (-j - adjstmnt)] = (len * (line - j)) + skipLen + i;
        }
    }

    line = 20;
    skipLen = 20;
    adjstmnt = 1.5;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 12; j++) {
            front.push([i, -j - 1.05, -adjstmnt])
            props.pixelDict[i + "," + (-j - 1.05) + "," + (-adjstmnt)] = ""
            props.pngIndexDict[i + "," + (-j - 1.05) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen + i;
        }
    }

    line = 20;
    skipLen = 19;
    adjstmnt = 2;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 12; j++) {
            left.push([-0.5, (-j - 1.05), -i - adjstmnt])
            props.pixelDict["-0.5," + (-j - 1.05) + "," + (-i - adjstmnt)] = ""
            props.pngIndexDict["-0.5," + (-j - 1.05) + "," + (-i - adjstmnt)] = (len * (line + j)) + skipLen - i;
        }
    }

    line = 20;
    skipLen = 28;
    adjstmnt = 2;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 12; j++) {
            right.push([7.5, (-j - 1.05), -i - adjstmnt])
            props.pixelDict["7.5," + (-j - 1.05) + "," + (-i - adjstmnt)] = ""
            props.pngIndexDict["7.5," + (-j - 1.05) + "," + (-i - adjstmnt)] = (len * (line + j)) + skipLen + i;
        }
    }

    line = 20;
    skipLen = 39;
    adjstmnt = 5.5;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 12; j++) {
            back.push([i, (-j - 1.05), -adjstmnt])
            props.pixelDict[i + "," + (-j - 1.05) + "," + (-adjstmnt)] = ""
            props.pngIndexDict[i + "," + (-j - 1.05) + "," + (-adjstmnt)] = (len * (line + j)) + skipLen - i;
        }
    }

    line = 19;
    skipLen = 28;
    adjstmnt = 2;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 4; j++) {
            bottom.push([i, -12.55, -j - adjstmnt])
            props.pixelDict[i + "," + (-12.55) + "," + (-j - adjstmnt)] = ""
            props.pngIndexDict[i + "," + (-12.55) + "," + (-j - adjstmnt)] = (len * (line - j)) + skipLen + i;
        }
    }

    return (
        <>
            {top.map(headPixel => (
                <PixelPlane position={headPixel} args={[1, 0.01, 1]} color={0xF5B041} key={headPixel} />
            ))}
            {front.map(headPixel => (
                <PixelPlane position={headPixel} args={[1, 1, 0.01]} color={0x7D6608} key={headPixel} />
            ))}
            {left.map(headPixel => (
                <PixelPlane position={headPixel} args={[0.01, 1, 1]} color={0x0B5345} key={headPixel} />
            ))}
            {right.map(headPixel => (
                <PixelPlane position={headPixel} args={[0.01, 1, 1]} color={0x512E5F} key={headPixel} />
            ))}
            {back.map(headPixel => (
                <PixelPlane position={headPixel} args={[1, 1, 0.01]} color={0x641E16} key={headPixel} />
            ))}
            {bottom.map(headPixel => (
                <PixelPlane position={headPixel} args={[1, 0.01, 1]} color={0xF5B041} key={headPixel} />
            ))}
        </>
    );
}

export default Torso;