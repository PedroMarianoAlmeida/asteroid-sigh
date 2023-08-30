import { GameContextProvider } from "@/app/contexts/gameContext";
import LettersToGuess from "./lettersToGuess/LettersToGuess";
import SignAndCamera from "./signDetection/SignAndCamera";

const GameStructure = () => {
  return (
    <GameContextProvider>
      <LettersToGuess />
      <SignAndCamera />
    </GameContextProvider>
  );
};

export default GameStructure;
