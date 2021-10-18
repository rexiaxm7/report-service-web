import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { DisplayUser } from "../types/User";

export type SelectedUserContextType = {
  selectedUser: DisplayUser | null;
  setSelectedUser: Dispatch<SetStateAction<DisplayUser | null>>;
};

export const SelectedUserContext = createContext<SelectedUserContextType>(
  {} as SelectedUserContextType
);
export const SelectedUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [selectedUser, setSelectedUser] = useState<DisplayUser | null>(null);
  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </SelectedUserContext.Provider>
  );
};
