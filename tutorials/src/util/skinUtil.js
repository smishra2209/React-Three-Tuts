const hex2rgb = (hex =>
    {
        var aRgbHex = hex.match(/.{1,2}/g);
        var rgb = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16)
        ];
        return rgb;
    });
    
    function ExportPng (children, pixelDict, pngIndexDict) {
      for(var i=0; i<children.length; i++){
        if(children[i]["type"] == "Mesh" && children[i]["material"]["type"] == "MeshPhysicalMaterial"){
          pixelDict[children[i].position.x+","+children[i].position.y+","+children[i].position.z] = children[i].material.color.getHexString();
        }
      } 
      var canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      var context = canvas.getContext("2d");
      var imageData=context.createImageData(64, 64);
      var data=imageData.data;
      for (var i=0; i<data.length; i+=4) {
        data[i+3]=0; // alpha (transparency)
      }
      Object.keys(pngIndexDict).forEach(element => {
        var rgb = hex2rgb(pixelDict[element])
        var actualIndex = pngIndexDict[element]*4
        data[actualIndex + 0]= rgb[0]
        data[actualIndex + 1]= rgb[1]
        data[actualIndex + 2]= rgb[2]
        data[actualIndex + 3]= 255
    
      });
        
      context.putImageData(imageData, 0, 0); // at coords 0,0
      var value=canvas.toDataURL("image/png");
      var win = window.open();
      console.log(value);
      win.document.write('<img src="'+value+'">');
    };

export default ExportPng;