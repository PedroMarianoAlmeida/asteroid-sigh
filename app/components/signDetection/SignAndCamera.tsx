"use client";
import { useRef } from "react";

import Webcam from "react-webcam";
//import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import "@tensorflow/tfjs-backend-webgl";

const SignAndCamera = () => {
  const webcamRef = useRef(null);

  const runHandpose = async () => {
    try {
      const net = await handpose.load();
      console.log({ net }, "Handpose model loaded");
    } catch (e) {
      console.log({ e });
    }
  };

  runHandpose();

  return (
    <>
      <Webcam ref={webcamRef} />
    </>
  );
};

export default SignAndCamera;
