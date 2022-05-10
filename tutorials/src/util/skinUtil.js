import testimage from '../testimage.png';

const hex2rgb = (hex => {
  var aRgbHex = hex.match(/.{1,2}/g);
  var rgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16)
  ];
  return rgb;
});

function ExportPng(pixelDict, pngIndexDict, opacityDict) {
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
    if(pixelDict[element].length>0){
      var rgb = hex2rgb(pixelDict[element])
      var actualIndex = pngIndexDict[element] * 4
      if(opacityDict[element]!=0){
        data[actualIndex + 0] = rgb[0]
        data[actualIndex + 1] = rgb[1]
        data[actualIndex + 2] = rgb[2]
        data[actualIndex + 3] = 255
      }
    }
  });

  context.putImageData(imageData, 0, 0); // at coords 0,0
  var value = canvas.toDataURL("image/png");
  var win = window.open();
  win.document.write('<img src="' + value + '">');
};

function toBlob(base64, type) {
  var rawData = base64.substring(base64.indexOf("base64,") + 7);
  var data = atob(rawData);
  var arr = new Uint8Array(data.length);

  for (var i = 0; i < data.length; ++i) {
    arr[i] = data.charCodeAt(i);
  }

  return new Blob([arr.buffer], { type: type });
}

export function ImportPng(pixelDict, pngIndexDict, opacityDict) {
  fetch(testimage)
    .then(image => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      var imgObj = new Image()// document.createElement('img');
      imgObj.crossOrigin = "anonymous";
      imgObj.onload = function() {
        ctx.drawImage(imgObj, 0, 0);
        var imageData = ctx.getImageData(0,0,64,64).data;
        Object.keys(pngIndexDict).forEach(element => {
          var rgb = []//hex2rgb(pixelDict[element])
          var actualIndex = pngIndexDict[element] * 4  
          if(imageData[actualIndex + 3]!=0){        
            rgb[0] = imageData[actualIndex + 0]
            rgb[1] = imageData[actualIndex + 1]
            rgb[2] = imageData[actualIndex + 2]
            pixelDict[element] = rgbToHex(rgb); 
            opacityDict[element] = 255; 
          }      
        });
      };
      imgObj.src = image.url;
    })
    return true;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
  return componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);
}

export function SaveModelPixels(children, pixelDict) {
  if (children != null) {
    for (var k = 0; k < children.length; k++) {
      const body = children[k].children;
      for (var i = 0; i < body.length; i++) {
        if (body[i]["type"] == "Mesh" && body[i]["material"]["type"] == "MeshPhysicalMaterial") {
          pixelDict[body[i].position.x + "," + body[i].position.y + "," + body[i].position.z] = body[i].material.color.getHexString();
        }
      }
    }
  }
  return true;
}

export default ExportPng;