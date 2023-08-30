import { useState } from "react";
import { possibleGestures } from "@hooks/useGesture";

interface useGameLogic {}

export interface useGameLogicReturn {
  userPossibleSign: possibleGestures;
  setUserPossibleSign: (possibleSign: possibleGestures) => void;
  gameLettersToGuess: possibleGestures;
}

const useGameLogic = (): useGameLogicReturn => {
  const [userPossibleSign, setUserPossibleSign] = useState<possibleGestures>(
    []
  );

  const [gameLettersToGuess, setGameLettersToGuess] =
    useState<possibleGestures>([]);

  return {
    userPossibleSign,
    setUserPossibleSign,
    gameLettersToGuess,
  };
};

export default useGameLogic;
