class PixelUtil {
    constructor(pixelDict, pngIndexDict, opacityDict, color, head, leftArm, rightArm, torso, leftFoot, rightFoot, innerBody, outerBody, load, colorPicker) {
        this.pixelDict = pixelDict;
        this.pngIndexDict = pngIndexDict;
        this.opacityDict = opacityDict;
        this.color = color;
        this.head = head;
        this.leftArm = leftArm;
        this.rightArm = rightArm;
        this.torso = torso;
        this.leftFoot = leftFoot;
        this.rightFoot = rightFoot;
        this.innerBody = innerBody;
        this.outerBody = outerBody;
        this.load = load;
        this.colorPicker = colorPicker;
        this.prevColor = color;
        this.eraser = false;
    }

    clearColor = () => {        
        this.prevColor = this.color;
        this.color = "";
        this.eraser = true;
    }

    activatePicker = (color) => {
        this.prevColor = this.color;
        this.colorPicker = true;
        this.colorController = color;
        this.eraser = false;
    }

    activateColor = () => {
        this.color = this.prevColor;
        this.eraser = false;
    }

    setColor = (color => {
        this.color = color;
        this.colorPicker = false;
        this.colorController.setValue(color);
        this.colorController.updateDisplay();
    });
}

export default PixelUtil;