// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterE = new GestureDescription("e");

// Describe the thumb
letterE.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterE.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// Describe the other fingers
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterE.addCurl(finger, FingerCurl.FullCurl, 1.0);
  letterE.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  // For flexibility, slight variations in finger directions with a lower score can be added
  letterE.addDirection(finger, FingerDirection.DiagonalDownRight, 0.9);
}

export default letterE;
