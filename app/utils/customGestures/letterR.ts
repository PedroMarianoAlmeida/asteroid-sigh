// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterR = new GestureDescription("r");

// Thumb and Index Finger touch, forming a crossed shape
letterR.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterR.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
letterR.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
letterR.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// Middle Finger is stretched out, pointing up
letterR.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
letterR.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

// Ring and Pinky Fingers are fully curled
for (let finger of [Finger.Ring, Finger.Pinky]) {
  letterR.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterR;
