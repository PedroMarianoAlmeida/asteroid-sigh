"use client";

import { createContext, ReactNode } from "react";
import useGameLogic, { useGameLogicReturn } from "@hooks/useGameLogic";

interface GameContextProviderProps extends useGameLogicReturn {}

export const GameContext = createContext<GameContextProviderProps>({
  userPossibleSign: [],
  setUserPossibleSign: () => {},
  gameLettersToGuess: [],
});

interface GameContextProps {
  children: ReactNode;
}

export const GameContextProvider = ({ children }: GameContextProps) => {
  const { userPossibleSign, setUserPossibleSign, gameLettersToGuess } =
    useGameLogic();

  return (
    <GameContext.Provider
      value={{ userPossibleSign, setUserPossibleSign, gameLettersToGuess }}
    >
      {children}
    </GameContext.Provider>
  );
};
