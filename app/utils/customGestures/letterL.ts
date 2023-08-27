// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterL = new GestureDescription("l");

// Thumb is stretched out, pointing up
letterL.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterL.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// Index Finger is stretched out, pointing straight forward (horizontal right for right-handers)
letterL.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
letterL.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// Middle, Ring, and Pinky Fingers are fully curled
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterL.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterL;
