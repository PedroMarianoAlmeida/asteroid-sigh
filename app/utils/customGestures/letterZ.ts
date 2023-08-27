// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterZ = new GestureDescription("z");

// Thumb is stretched out, pointing up
letterZ.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterZ.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// Index Finger is stretched out, representing the motion of tracing the letter "Z"
letterZ.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
letterZ.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0); // Starting motion of "Z"

// Middle, Ring, and Pinky Fingers are fully curled
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterZ.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterZ;
