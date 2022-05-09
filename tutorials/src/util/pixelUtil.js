class PixelUtil {
    constructor(pixelDict, pngIndexDict, color, head, leftArm, rightArm, torso, leftFoot, rightFoot, innerBody, outerBody, load) {
        this.pixelDict = pixelDict;
        this.pngIndexDict = pngIndexDict;
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
    }
}

export default PixelUtil;