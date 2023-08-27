// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterP = new GestureDescription("p");

// Thumb is stretched out, pointing sideways (horizontal right for right-handers)
letterP.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterP.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// Index Finger is stretched out, pointing up
letterP.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
letterP.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Middle Finger touches the Thumb
letterP.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
letterP.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// Ring and Pinky Fingers are fully curled
for (let finger of [Finger.Ring, Finger.Pinky]) {
  letterP.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterP;
