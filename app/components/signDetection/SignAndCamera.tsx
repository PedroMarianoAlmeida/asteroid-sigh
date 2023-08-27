"use client";
import { useRef } from "react";

import Webcam from "react-webcam";
import "@tensorflow/tfjs-backend-webgl";

import React from "react";

import useGesture from "@hooks/useGesture";

const SignAndCamera = () => {
  const webcamRef = useRef<Webcam>(null);

  const { isFingerPoseLoaded, isCameraLoaded, error, gesture } = useGesture({
    refCam: webcamRef,
  });

  console.log({ isFingerPoseLoaded, isCameraLoaded, error, gesture });

  return (
    <>
      <Webcam ref={webcamRef} />
    </>
  );
};

export default SignAndCamera;
