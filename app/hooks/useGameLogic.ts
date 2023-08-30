import { useState, useEffect } from "react";
import { possibleGestures } from "@hooks/useGesture";
import { generateGameLetter } from "@utils/gameLogicHelpers";

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

  useEffect(() => {
    if (userPossibleSign.length === 0)
      setGameLettersToGuess([generateGameLetter()]);
  }, [gameLettersToGuess]);

  return {
    userPossibleSign,
    setUserPossibleSign,
    gameLettersToGuess,
  };
};

export default useGameLogic;
