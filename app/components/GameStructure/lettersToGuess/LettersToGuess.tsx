"use client";

import { useContext } from "react";

import { GameContext } from "@/app/contexts/gameContext";

const LettersToGuess = () => {
  const { gameLettersToGuess } = useContext(GameContext);

  return <p>Letter to guess : {gameLettersToGuess}</p>;
};

export default LettersToGuess;
