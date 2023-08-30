"use client";
import React, { useRef, useEffect, useContext } from "react";

import Webcam from "react-webcam";
import "@tensorflow/tfjs-backend-webgl";

import useGesture from "@hooks/useGesture";
import SignDetectionSetupIndicator from "./SignDetectionSetupIndicator";
import PossibleSignIndicator from "./PossibleSignIndicator";
import { GameContext } from "@/app/contexts/gameContext";

const SignAndCamera = () => {
  const webcamRef = useRef<Webcam>(null);

  const { isFingerPoseLoaded, isCameraLoaded, error, possibleGestures } =
    useGesture({
      refCam: webcamRef,
    });

  const { setUserPossibleSign } = useContext(GameContext);

  useEffect(() => {
    setUserPossibleSign(possibleGestures);
  }, [possibleGestures]);

  return (
    <>
      <SignDetectionSetupIndicator
        isFingerPoseLoaded={isFingerPoseLoaded}
        isCameraLoaded={isCameraLoaded}
        error={error}
      />
      <Webcam ref={webcamRef} />
      <PossibleSignIndicator possibleGestures={possibleGestures} />
    </>
  );
};

export default SignAndCamera;
