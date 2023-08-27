import { RefObject, useEffect, useState } from "react";

import * as handpose from "@tensorflow-models/handpose";
// @ts-ignore
import * as fp from "fingerpose";

import Webcam from "react-webcam";

import signLetters from "@utils/customGestures/signLetters";

interface useGestureProps {
  refCam: RefObject<Webcam> | null;
}

interface useGestureReturn {
  isFingerPoseLoaded: boolean;
  isCameraLoaded: boolean;
  error: string | null;
  possibleGestures: Array<string> | null;
}

interface cameraSetupSuccess {
  isSetupOk: true;
  video: HTMLVideoElement;
  videoWidth: number;
  videoHeight: number;
  width: number;
  height: number;
}

interface cameraSetupFail {
  isSetupOk: false;
  message: string;
}

type cameraSetupReturn = cameraSetupSuccess | cameraSetupFail;

interface IGesture {
  name: string;
  confidence: number;
}
const cameraSetup = (refCam: useGestureProps["refCam"]): cameraSetupReturn => {
  if (refCam === null) {
    return { isSetupOk: false, message: "No camera" };
  }

  const webcam = refCam.current;
  if (
    typeof webcam !== "undefined" &&
    webcam !== null &&
    webcam.video?.readyState === 4
  ) {
    let {
      video,
      video: { videoWidth, videoHeight, width, height },
    } = webcam;
    return {
      isSetupOk: true,
      video,
      videoWidth,
      videoHeight,
      width,
      height,
    };
  }

  return { isSetupOk: false, message: "Camera error" };
};

const useGesture = ({ refCam }: useGestureProps): useGestureReturn => {
  const [isFingerPoseLoaded, setIsFingerPoseLoaded] =
    useState<useGestureReturn["isFingerPoseLoaded"]>(false);
  const [isCameraLoaded, setIsCameraLoaded] =
    useState<useGestureReturn["isCameraLoaded"]>(false);
  const [error, setError] = useState<useGestureReturn["error"]>(null);
  const [possibleGestures, setPossibleGestures] =
    useState<useGestureReturn["possibleGestures"]>(null);

  const detect = async (net: handpose.HandPose) => {
    const webcam = cameraSetup(refCam);
    if (webcam.isSetupOk) {
      setIsCameraLoaded(true);
      //Set video properties
      let { video, videoWidth, videoHeight, width, height } = webcam;
      width = videoWidth;
      height = videoHeight;

      //Make detections
      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator(signLetters);

        const minimumConfidence = 8;
        const {
          gestures,
          gestures: { length: gestureLength },
        } = await GE.estimate(hand[0].landmarks, minimumConfidence);
        if (gestureLength > 0) {
          const possibleGesturesNames = gestures.map(
            (gesture: IGesture) => gesture.name
          );
          setPossibleGestures(possibleGesturesNames);
        } else {
          setPossibleGestures(null);
        }
      }
    } else {
      setIsCameraLoaded(false);
      setError(webcam.message);
    }
  };

  const runHandpose = async () => {
    try {
      const net = await handpose.load();
      setIsFingerPoseLoaded(true);
      setInterval(() => {
        detect(net);
      }, 100);
    } catch (e) {
      const error = JSON.stringify(e);
      setError(error);
    }
  };

  useEffect(() => {
    runHandpose();
  }, []);

  return {
    isFingerPoseLoaded,
    isCameraLoaded,
    error,
    possibleGestures,
  };
};

export default useGesture;
