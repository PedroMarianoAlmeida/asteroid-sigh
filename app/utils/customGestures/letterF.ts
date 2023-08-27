// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterF = new GestureDescription("f");

// Thumb and Index Finger touch, forming a circle
letterF.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterF.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

letterF.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
letterF.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Middle, Ring, and Pinky Fingers are extended
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterF.addCurl(finger, FingerCurl.NoCurl, 1.0);
  letterF.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}

export default letterF;
