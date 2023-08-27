// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterH = new GestureDescription("h");

// Thumb is fully curled
letterH.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);

// Index and Middle Fingers are stretched out, pointing up
for (let finger of [Finger.Index, Finger.Middle]) {
  letterH.addCurl(finger, FingerCurl.NoCurl, 1.0);
  letterH.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

// Ring and Pinky Fingers are fully curled
for (let finger of [Finger.Ring, Finger.Pinky]) {
  letterH.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterH;
