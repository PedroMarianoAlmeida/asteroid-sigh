// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterQ = new GestureDescription("q");

// Thumb is stretched out, pointing down
letterQ.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterQ.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

// Index Finger is stretched out, pointing up
letterQ.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
letterQ.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Middle Finger touches the Thumb, pointing horizontally (to the side)
letterQ.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
letterQ.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// Ring and Pinky Fingers are fully curled
for (let finger of [Finger.Ring, Finger.Pinky]) {
  letterQ.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterQ;
