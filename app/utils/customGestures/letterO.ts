// @ts-ignore
import * as fp from "fingerpose";

const { GestureDescription, Finger, FingerCurl } = fp;

const letterO = new GestureDescription("o");

// All fingers are fully curled and touching the thumb, forming a circular shape
for (let finger of [
  Finger.Thumb,
  Finger.Index,
  Finger.Middle,
  Finger.Ring,
  Finger.Pinky,
]) {
  letterO.addCurl(finger, FingerCurl.FullCurl, 1.0);
}

export default letterO;
