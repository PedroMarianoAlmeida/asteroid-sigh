"use client";
import { useRef } from "react";

import Webcam from "react-webcam";
//import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import "@tensorflow/tfjs-backend-webgl";

const SignAndCamera = () => {
  const webcamRef = useRef<Webcam>(null);

  const runHandpose = async () => {
    try {
      const net = await handpose.load();
      console.log({ net }, "Handpose model loaded");
      setInterval(() => {
        detect(net);
      }, 100);
    } catch (e) {
      console.log({ e });
    }
  };

  const detect = async (net) => {
    const webcam = webcamRef.current;
    if (
      typeof webcam !== "undefined" &&
      webcam !== null &&
      webcam.video?.readyState === 4
    ) {
      //Set video properties
      let {
        video,
        video: { videoWidth, videoHeight, width, height },
      } = webcam;
      width = videoWidth;
      height = videoHeight;

      //Make detections
      const hand = await net.estimateHands(video);
      //console.log(hand);
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
