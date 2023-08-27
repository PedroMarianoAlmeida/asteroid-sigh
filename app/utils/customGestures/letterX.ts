// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterY = new GestureDescription("y");

// Thumb and Pinky are stretched out, pointing up
for (let finger of [Finger.Thumb, Finger.Pinky]) {
  letterY.addCurl(finger, FingerCurl.NoCurl, 1.0);
  letterY.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

// Index, Middle, and Ring Fingers are fully curled
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring]) {
  letterY.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterY;
