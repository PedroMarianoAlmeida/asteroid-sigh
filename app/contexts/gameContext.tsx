"use client";

import { createContext, ReactNode } from "react";
import useGameLogic, { useGameLogicReturn } from "@hooks/useGameLogic";

interface GameContextProviderProps extends useGameLogicReturn {}

export const GameContext = createContext<GameContextProviderProps>({
  userPossibleSign: null,
  setUserPossibleSign: () => {},
});

interface GameContextProps {
  children: ReactNode;
}

export const GameContextProvider = ({ children }: GameContextProps) => {
  const { userPossibleSign, setUserPossibleSign } = useGameLogic();

  return (
    <GameContext.Provider value={{ userPossibleSign, setUserPossibleSign }}>
      {children}
    </GameContext.Provider>
  );
};
