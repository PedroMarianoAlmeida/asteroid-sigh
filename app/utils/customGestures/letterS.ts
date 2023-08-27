// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterS = new GestureDescription("s");

// Thumb is stretched out and overlays the front of the fist (across the fingers)
letterS.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterS.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// All other fingers are fully curled to form a fist
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterS.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterS;
