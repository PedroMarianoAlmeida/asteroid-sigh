"use client";
import { useRef } from "react";

import Webcam from "react-webcam";
import "@tensorflow/tfjs-backend-webgl";

import React from "react";

import useGesture from "@hooks/useGesture";

const SignAndCamera = () => {
  const webcamRef = useRef<Webcam>(null);

  const { isFingerPoseLoaded, isCameraLoaded, error, possibleGestures } =
    useGesture({
      refCam: webcamRef,
    });

  console.log({ isFingerPoseLoaded, isCameraLoaded, error, possibleGestures });

  return (
    <>
      <Webcam ref={webcamRef} />
    </>
  );
};

export default SignAndCamera;
