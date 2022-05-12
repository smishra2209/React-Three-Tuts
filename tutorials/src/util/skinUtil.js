import testimage from '../testimage2.png';
import * as positionsUtil from './positionsUtil';
import initialize from './positionsUtil';

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
  initialize();
  var values = {
    'head_front' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 8, positionsUtil.head_front),
    'head_left' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 8, positionsUtil.head_left),
    'head_right' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 8, positionsUtil.head_right),
    'head_back' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 8, positionsUtil.head_back),
    'head_top' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 8, positionsUtil.head_top),
    'head_bottom' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 8, positionsUtil.head_bottom),
    'head_front_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 8, positionsUtil.head_front_outer),
    'head_left_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 8, positionsUtil.head_left_outer),
    'head_right_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 8, positionsUtil.head_right_outer),
    'head_back_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 8, positionsUtil.head_back_outer),
    'head_top_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 8, positionsUtil.head_top_outer),
    'head_bottom_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 8, positionsUtil.head_bottom_outer),
    'torso_front' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 12, positionsUtil.torso_front),
    'torso_left' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.torso_left),
    'torso_right' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.torso_right),
    'torso_back' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 12, positionsUtil.torso_back),
    'torso_top' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 4, positionsUtil.torso_top),
    'torso_bottom' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 4, positionsUtil.torso_bottom),
    'torso_front_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 12, positionsUtil.torso_front_outer),
    'torso_left_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.torso_left_outer),
    'torso_right_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.torso_right_outer),
    'torso_back_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 12, positionsUtil.torso_back_outer),
    'torso_top_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 4, positionsUtil.torso_top_outer),
    'torso_bottom_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 8, 4, positionsUtil.torso_bottom_outer),
    'left_leg_front' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_leg_front),
    'left_leg_left' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_leg_left),
    'left_leg_right' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_leg_right),
    'left_leg_back' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_leg_back),
    'left_leg_top' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.left_leg_top),
    'left_leg_bottom' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.left_leg_bottom),
    'left_leg_front_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_leg_front_outer),
    'left_leg_left_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_leg_left_outer),
    'left_leg_right_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_leg_right_outer),
    'left_leg_back_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_leg_back_outer),
    'left_leg_top_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.left_leg_top_outer),
    'left_leg_bottom_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.left_leg_bottom_outer),
    'right_leg_front' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_leg_front),
    'right_leg_left' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_leg_left),
    'right_leg_right' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_leg_right),
    'right_leg_back' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_leg_back),
    'right_leg_top' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.right_leg_top),
    'right_leg_bottom' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.right_leg_bottom),
    'right_leg_front_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_leg_front_outer),
    'right_leg_left_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_leg_left_outer),
    'right_leg_right_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_leg_right_outer),
    'right_leg_back_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_leg_back_outer),
    'right_leg_top_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.right_leg_top_outer),
    'right_leg_bottom_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.right_leg_bottom_outer),
    'left_arm_front' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_arm_front),
    'left_arm_left' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_arm_left),
    'left_arm_right' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_arm_right),
    'left_arm_back' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_arm_back),
    'left_arm_top' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.left_arm_top),
    'left_arm_bottom' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.left_arm_bottom),
    'left_arm_front_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_arm_front_outer),
    'left_arm_left_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_arm_left_outer),
    'left_arm_right_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_arm_right_outer),
    'left_arm_back_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.left_arm_back_outer),
    'left_arm_top_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.left_arm_top_outer),
    'left_arm_bottom_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.left_arm_bottom_outer),
    'right_arm_front' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_arm_front),
    'right_arm_left' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_arm_left),
    'right_arm_right' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_arm_right),
    'right_arm_back' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_arm_back),
    'right_arm_top' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.right_arm_top),
    'right_arm_bottom' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.right_arm_bottom),
    'right_arm_front_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_arm_front_outer),
    'right_arm_left_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_arm_left_outer),
    'right_arm_right_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_arm_right_outer),
    'right_arm_back_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 12, positionsUtil.right_arm_back_outer),
    'right_arm_top_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.right_arm_top_outer),
    'left_arm_bottom_outer' : getPngValue(pixelDict, pngIndexDict, opacityDict, 4, 4, positionsUtil.right_arm_bottom_outer),
  };
  return values;
};

function getPngValue(pixelDict, pngIndexDict, opacityDict, width, height, inputArr) {
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  var context = canvas.getContext("2d");
  var imageData = context.createImageData(width, height);
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    data[i + 3] = 0; // alpha (transparency)
  }

  Object.keys(pngIndexDict).forEach(element => {
    if (pixelDict[element].length > 0) {
      var rgb = hex2rgb(pixelDict[element])
      if (inputArr.includes(pngIndexDict[element])) {
        var actualIndex = inputArr.indexOf(pngIndexDict[element]) * 4 //pngIndexDict[element] * 4
        if (opacityDict[element] != 0) {
          data[actualIndex + 0] = rgb[0]
          data[actualIndex + 1] = rgb[1]
          data[actualIndex + 2] = rgb[2]
          data[actualIndex + 3] = 255
        }
      }

    }
  });

  context.putImageData(imageData, 0, 0); // at coords 0,0
  var value = canvas.toDataURL("image/png");
  return value;
}

function ExportPng1(pixelDict, pngIndexDict, opacityDict) {
  var canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  var context = canvas.getContext("2d");
  var imageData = context.createImageData(128, 128);
  var data = imageData.data;
  for (var i = 0; i < data.length; i += 4) {
    data[i + 3] = 0; // alpha (transparency)
  }

  var actualIndexArr = []
  var n = 0;
  for (var i = 0; i < 127; i += 2) {
    for (var j = 0; j < 127; j += 2) {
      actualIndexArr[n] = [];
      actualIndexArr[n].push((i * 128) + j);
      actualIndexArr[n].push((i * 128) + j + 1);
      actualIndexArr[n].push(((i + 1) * 128) + j);
      actualIndexArr[n].push(((i + 1) * 128) + j + 1);
      n++;
    }
  }
  console.log(actualIndexArr);
  Object.keys(pngIndexDict).forEach(element => {
    if (pixelDict[element].length > 0) {
      var rgb = hex2rgb(pixelDict[element])
      if (opacityDict[element] != 0) {
        actualIndexArr[pngIndexDict[element]].forEach(element => {
          var actualIndex = element * 4
          data[actualIndex + 0] = rgb[0]
          data[actualIndex + 1] = rgb[1]
          data[actualIndex + 2] = rgb[2]
          data[actualIndex + 3] = 255
        })
      }
    }
  });

  context.putImageData(imageData, 0, 0); // at coords 0,0
  var value = canvas.toDataURL("image/png");
  return value;
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
      imgObj.onload = function () {
        ctx.drawImage(imgObj, 0, 0);
        var imageData = ctx.getImageData(0, 0, 64, 64).data;
        Object.keys(pngIndexDict).forEach(element => {
          var rgb = []//hex2rgb(pixelDict[element])
          var actualIndex = pngIndexDict[element] * 4
          if (imageData[actualIndex + 3] != 0) {
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