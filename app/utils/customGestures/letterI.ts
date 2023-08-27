// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterI = new GestureDescription("i");

// Thumb is stretched out, pointing up
letterI.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterI.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// Index Finger is fully curled
letterI.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

// Middle, Ring, and Pinky Fingers are fully curled
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterI.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterI;
