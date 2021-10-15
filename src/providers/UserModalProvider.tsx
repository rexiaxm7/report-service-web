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
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
};

export const UserModalContext = createContext<UserModalContextType>(
  {} as UserModalContextType
);
export const UserModalProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <UserModalContext.Provider
      value={{ isUserModalOpen, setIsUserModalOpen, isEdit, setIsEdit }}
    >
      {children}
    </UserModalContext.Provider>
  );
};
