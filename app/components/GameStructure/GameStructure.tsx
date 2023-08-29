import LettersToGuess from "./lettersToGuess/LettersToGuess";
import SignAndCamera from "./signDetection/SignAndCamera";

const GameStructure = () => {
  return (
    <div>
      <LettersToGuess />
      <SignAndCamera />
    </div>
  );
};

export default GameStructure;
