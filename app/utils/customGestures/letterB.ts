// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterB = new GestureDescription("b");

// Describe the thumb
letterB.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
letterB.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
// It's good to be a bit flexible with the direction, so we accept slight variations with a lower score
letterB.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
letterB.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.9);

// Describe the other fingers
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterB.addCurl(finger, FingerCurl.NoCurl, 1.0);
  letterB.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  // To be flexible, we can also accept slight variations in finger directions with a lower score
  letterB.addDirection(finger, FingerDirection.DiagonalUpRight, 0.9);
  letterB.addDirection(finger, FingerDirection.DiagonalUpLeft, 0.9);
}

export default letterB;
