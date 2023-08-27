// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterD = new GestureDescription("d");

// Describe the thumb
letterD.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterD.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// Describe the index finger
letterD.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
letterD.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Describe the other fingers
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterD.addCurl(finger, FingerCurl.NoCurl, 1.0);
  letterD.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  // For flexibility, slight variations in finger directions with a lower score can be added
  letterD.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
  letterD.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
}

export default letterD;
