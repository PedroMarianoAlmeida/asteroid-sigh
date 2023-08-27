"use client";
import { useRef } from "react";

import Webcam from "react-webcam";
import "@tensorflow/tfjs-backend-webgl";

import React from "react";

import useGesture from "@hooks/useGesture";
import SignDetectionSetupIndicator from "./SignDetectionSetupIndicator";

const SignAndCamera = () => {
  const webcamRef = useRef<Webcam>(null);

  const { isFingerPoseLoaded, isCameraLoaded, error, possibleGestures } =
    useGesture({
      refCam: webcamRef,
    });

  console.log({ isFingerPoseLoaded, isCameraLoaded, error, possibleGestures });

  return (
    <>
      <SignDetectionSetupIndicator
        isFingerPoseLoaded={isFingerPoseLoaded}
        isCameraLoaded={isCameraLoaded}
        error={error}
      />
      <Webcam ref={webcamRef} />
    </>
  );
};

export default SignAndCamera;
