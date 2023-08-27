// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterK = new GestureDescription("k");

// Thumb is stretched out, pointing to the side (horizontal right for right-handers)
letterK.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterK.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// Index Finger is stretched out, pointing up
letterK.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
letterK.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Middle Finger touches the Thumb
letterK.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
letterK.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// Ring and Pinky Fingers are fully curled
for (let finger of [Finger.Ring, Finger.Pinky]) {
  letterK.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterK;
