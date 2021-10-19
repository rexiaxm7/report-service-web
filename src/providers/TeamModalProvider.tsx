import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type TeamModalContextType = {
  isTeamModalOpen: boolean;
  setIsTeamModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const TeamModalContext = createContext<TeamModalContextType>(
  {} as TeamModalContextType
);
export const TeamModalProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isTeamModalOpen, setIsTeamModalOpen] = useState<boolean>(false);
  return (
    <TeamModalContext.Provider value={{ isTeamModalOpen, setIsTeamModalOpen }}>
      {children}
    </TeamModalContext.Provider>
  );
};
