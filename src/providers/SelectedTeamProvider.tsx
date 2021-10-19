import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { DisplayTeam } from "../types/Team";

export type SelectedTeamContextType = {
  selectedTeam: DisplayTeam | null;
  setSelectedTeam: Dispatch<SetStateAction<DisplayTeam | null>>;
};

export const SelectedTeamContext = createContext<SelectedTeamContextType>(
  {} as SelectedTeamContextType
);
export const SelectedTeamProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [selectedTeam, setSelectedTeam] = useState<DisplayTeam | null>(null);
  const contextValue = { selectedTeam, setSelectedTeam };
  return (
    <SelectedTeamContext.Provider value={contextValue}>
      {children}
    </SelectedTeamContext.Provider>
  );
};
