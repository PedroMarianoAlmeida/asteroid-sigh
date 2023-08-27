// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterU = new GestureDescription("u");

// Thumb is stretched out, pointing up
letterU.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterU.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// Index and Middle Fingers are stretched out and close together, pointing up
for (let finger of [Finger.Index, Finger.Middle]) {
  letterU.addCurl(finger, FingerCurl.NoCurl, 1.0);
  letterU.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

// Ring and Pinky Fingers are fully curled
for (let finger of [Finger.Ring, Finger.Pinky]) {
  letterU.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterU;
