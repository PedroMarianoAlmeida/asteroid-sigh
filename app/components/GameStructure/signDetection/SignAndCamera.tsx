"use client";
import { useRef } from "react";

import Webcam from "react-webcam";
import "@tensorflow/tfjs-backend-webgl";

import React from "react";

import useGesture from "@hooks/useGesture";
import SignDetectionSetupIndicator from "./SignDetectionSetupIndicator";
import PossibleSignIndicator from "./PossibleSignIndicator";

const SignAndCamera = () => {
  const webcamRef = useRef<Webcam>(null);

  const { isFingerPoseLoaded, isCameraLoaded, error, possibleGestures } =
    useGesture({
      refCam: webcamRef,
    });

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
