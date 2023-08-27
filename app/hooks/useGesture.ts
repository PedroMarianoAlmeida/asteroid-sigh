import { RefObject, useEffect, useState } from "react";

import * as handpose from "@tensorflow-models/handpose";
// @ts-ignore
import * as fp from "fingerpose";
import LetterW from "@utils/customGestures/letterW";

import Webcam from "react-webcam";

interface useGestureProps {
  refCam: RefObject<Webcam> | null;
}

interface useGestureReturn {
  isFingerPoseLoaded: boolean;
  isCameraLoaded: boolean;
  error: string | null;
  gesture: string | null;
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
  const [isFingerPoseLoaded, setIsFingerPoseLoaded] = useState(false);
  const [isCameraLoaded, setIsCameraLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gesture, setGesture] = useState<string | null>(null);

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
        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
          LetterW,
        ]);

        const minimumConfidence = 8;
        const {
          gestures,
          gestures: { length: gestureLength },
        } = await GE.estimate(hand[0].landmarks, minimumConfidence);
        if (gestureLength > 0) {
          if (gestureLength === 1) {
            setGesture(gestures[0].name);
          } else {
            const highScoreGesture = gestures.reduce(
              (prev: IGesture, current: IGesture) =>
                prev.confidence > current.confidence ? prev : current
            );
            setGesture(highScoreGesture.name);
          }
        }
        else {
          setGesture(null);
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
    gesture,
  };
};

export default useGesture;
