// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterT = new GestureDescription("t");

// Thumb is inserted between the index and middle fingers
letterT.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterT.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// Index Finger is fully curled
letterT.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

// Middle Finger is also fully curled, resting on top of the thumb
letterT.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

// Ring and Pinky Fingers are fully curled
for (let finger of [Finger.Ring, Finger.Pinky]) {
  letterT.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterT;
