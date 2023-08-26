// @ts-ignore
import * as fp from "fingerpose";

const {GestureDescription, Finger, FingerCurl, FingerDirection} = fp


// describe W gesture
const LetterW = new GestureDescription('w');

// thumb:
LetterW.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
LetterW.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
LetterW.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

// index:
LetterW.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LetterW.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
LetterW.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
LetterW.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
LetterW.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
LetterW.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);

// middle:
LetterW.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
LetterW.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
LetterW.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
LetterW.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
LetterW.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
LetterW.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// ring:
LetterW.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
LetterW.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
LetterW.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
LetterW.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
LetterW.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
LetterW.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);

// pinky:
LetterW.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
LetterW.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

export default LetterW;
