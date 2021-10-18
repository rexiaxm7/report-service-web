import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type UserModalContextType = {
  isUserModalOpen: boolean;
  setIsUserModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const UserModalContext = createContext<UserModalContextType>(
  {} as UserModalContextType
);
export const UserModalProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  return (
    <UserModalContext.Provider value={{ isUserModalOpen, setIsUserModalOpen }}>
      {children}
    </UserModalContext.Provider>
  );
};
