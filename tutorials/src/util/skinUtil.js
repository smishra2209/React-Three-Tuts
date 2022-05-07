const hex2rgb = (hex => {
  var aRgbHex = hex.match(/.{1,2}/g);
  var rgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16)
  ];
  return rgb;
});

function ExportPng(children, pixelDict, pngIndexDict) {
  if (children != null && children[2] != null && children[2].children != null) {
    const innerbody = children[2].children;
    for (var i = 0; i < innerbody.length; i++) {
      if (innerbody[i]["type"] == "Mesh" && innerbody[i]["material"]["type"] == "MeshPhongMaterial") {
        pixelDict[innerbody[i].position.x + "," + innerbody[i].position.y + "," + innerbody[i].position.z] = innerbody[i].material.color.getHexString();
      }
    }
  }
  if (children != null && children[3] != null && children[3].children != null) {
    const outerbody = children[3].children;
    for (var i = 0; i < outerbody.length; i++) {
      if (outerbody[i]["type"] == "Mesh" && outerbody[i]["material"]["type"] == "MeshPhongMaterial") {
        pixelDict[outerbody[i].position.x + "," + outerbody[i].position.y + "," + outerbody[i].position.z] = outerbody[i].material.color.getHexString();
      }
    }
  }
  var canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  var context = canvas.getContext("2d");
  var imageData = context.createImageData(64, 64);
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    data[i + 3] = 0; // alpha (transparency)
  }
  Object.keys(pngIndexDict).forEach(element => {
    var rgb = hex2rgb(pixelDict[element])
    var actualIndex = pngIndexDict[element] * 4
    data[actualIndex + 0] = rgb[0]
    data[actualIndex + 1] = rgb[1]
    data[actualIndex + 2] = rgb[2]
    data[actualIndex + 3] = 255

  });

  context.putImageData(imageData, 0, 0); // at coords 0,0
  var value = canvas.toDataURL("image/png");
  var win = window.open();
  console.log(value);
  win.document.write('<img src="' + value + '">');
};

export function SaveModelPixels(children, pixelDict) {
  console.log(children)
  if (children != null && children[2] != null && children[2].children != null) {
    const innerbody = children[2].children;
    for (var i = 0; i < innerbody.length; i++) {
      if (innerbody[i]["type"] == "Mesh" && innerbody[i]["material"]["type"] == "MeshPhongMaterial") {
        pixelDict[innerbody[i].position.x + "," + innerbody[i].position.y + "," + innerbody[i].position.z] = innerbody[i].material.color.getHexString();
      }
    }
  }
  if (children != null && children[3] != null && children[3].children != null) {
    const outerbody = children[3].children;
    for (var i = 0; i < outerbody.length; i++) {
      if (outerbody[i]["type"] == "Mesh" && outerbody[i]["material"]["type"] == "MeshPhongMaterial") {
        pixelDict[outerbody[i].position.x + "," + outerbody[i].position.y + "," + outerbody[i].position.z] = outerbody[i].material.color.getHexString();
      }
    }
  }
  return true;
}

export default ExportPng;