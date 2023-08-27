// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl, FingerDirection } = fp;

const letterJ = new GestureDescription("j");

// Thumb is stretched out, pointing up
letterJ.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
letterJ.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// Index Finger is stretched out, pointing up initially but moves in a "J" shape
letterJ.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
letterJ.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
// You may need to account for the movement for the "J" shape depending on the capability of your library

// Middle, Ring, and Pinky Fingers are fully curled
for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  letterJ.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterJ;
