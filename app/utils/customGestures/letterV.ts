// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterV = new GestureDescription("v");

// Thumb is stretched out, pointing up
letterV.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterV.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// Index and Middle Fingers are stretched out, pointing up but slightly separated
for (let finger of [Finger.Index, Finger.Middle]) {
  letterV.addCurl(finger, FingerCurl.NoCurl, 1.0);
  letterV.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

// Ring and Pinky Fingers are fully curled
for (let finger of [Finger.Ring, Finger.Pinky]) {
  letterV.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterV;
