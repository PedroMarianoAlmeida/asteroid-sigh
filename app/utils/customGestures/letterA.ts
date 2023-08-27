// @ts-ignore
import * as fp from "fingerpose";

const {GestureDescription, Finger, FingerCurl, FingerDirection} = fp


// describe A gesture;
const letterA = new GestureDescription('a');

// Describe the thumb
letterA.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterA.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
// It's good to be a bit flexible with the direction, so we accept slight variations with a lower score
letterA.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
letterA.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 0.9);

// Describe the other fingers
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterA.addCurl(finger, FingerCurl.FullCurl, 1.0);
  // As suggested in the documentation, it's good to accept slightly uncurled fingers with a lower score
  letterA.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

export default letterA;
