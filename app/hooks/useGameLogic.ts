import { useState } from "react";
import { useGestureReturn } from "@hooks/useGesture";

interface useGameLogic {}

export interface useGameLogicReturn {
  userPossibleSign: useGestureReturn["possibleGestures"];
  setUserPossibleSign: (
    possibleSign: useGestureReturn["possibleGestures"]
  ) => void;
}

const useGameLogic = (): useGameLogicReturn => {
  const [userPossibleSign, setUserPossibleSign] =
    useState<useGestureReturn["possibleGestures"]>(null);

  console.log({userPossibleSign});

  return {
    userPossibleSign,
    setUserPossibleSign,
  };
};

export default useGameLogic;
