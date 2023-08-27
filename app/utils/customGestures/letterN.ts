// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterN = new GestureDescription("n");

// Thumb is positioned over the first finger (index finger)
letterN.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterN.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// Index Finger is fully curled, covering the thumb
letterN.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

// Middle Finger is stretched out, pointing up
letterN.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
letterN.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

// Ring and Pinky Fingers are fully curled
for (let finger of [Finger.Ring, Finger.Pinky]) {
  letterN.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterN;
