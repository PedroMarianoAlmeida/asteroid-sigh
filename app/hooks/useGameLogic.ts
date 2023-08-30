import { useState } from "react";
import { useGestureReturn } from "@hooks/useGesture";

interface useGameLogic {}

export interface useGameLogicReturn {
  userPossibleSign: useGestureReturn["possibleGestures"];
  setUserPossibleSign: (
    possibleSign: useGestureReturn["possibleGestures"]
  ) => void;
  gameLettersToGuess: useGestureReturn["possibleGestures"];
}

const useGameLogic = (): useGameLogicReturn => {
  const [userPossibleSign, setUserPossibleSign] =
    useState<useGestureReturn["possibleGestures"]>(null);

  const [gameLettersToGuess, setGameLettersToGuess] = useState<
    useGestureReturn["possibleGestures"]
  >([]);

  return {
    userPossibleSign,
    setUserPossibleSign,
    gameLettersToGuess,
  };
};

export default useGameLogic;
