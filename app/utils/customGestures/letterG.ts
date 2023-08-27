// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterG = new GestureDescription("g");

// Thumb is stretched out, pointing sideways (horizontal right for right-handers)
letterG.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterG.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// Index Finger is stretched out, pointing down
letterG.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
letterG.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

// Middle, Ring, and Pinky Fingers are fully curled
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterG.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterG;
