// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterC = new GestureDescription("c");

// Describe the thumb
letterC.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
letterC.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
// As flexibility is preferred, slight variations in the direction with a lower score can be added
letterC.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);
letterC.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);

// Describe the other fingers
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterC.addCurl(finger, FingerCurl.HalfCurl, 1.0);
  letterC.addDirection(finger, FingerDirection.VerticalDown, 1.0);
  // Again, to be flexible, slight variations in finger directions with a lower score can be added
  letterC.addDirection(finger, FingerDirection.DiagonalDownRight, 0.9);
  letterC.addDirection(finger, FingerDirection.DiagonalDownLeft, 0.9);
}

export default letterC;
