// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterM = new GestureDescription('m');

// Thumb is positioned over the first two fingers
letterM.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterM.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// Index and Middle Fingers are fully curled, covering the thumb
for(let finger of [Finger.Index, Finger.Middle]) {
  letterM.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

// Ring and Pinky Fingers are stretched out, pointing up
for(let finger of [Finger.Ring, Finger.Pinky]) {
  letterM.addCurl(finger, FingerCurl.NoCurl, 1.0);
  letterM.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

export default letterM;
