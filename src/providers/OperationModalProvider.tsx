import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type OperationModalContextType = {
  isOperationModalOpen: boolean;
  setIsOperationModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const OperationModalContext = createContext<OperationModalContextType>(
  {} as OperationModalContextType
);
export const OperationModalProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isOperationModalOpen, setIsOperationModalOpen] =
    useState<boolean>(false);
  return (
    <OperationModalContext.Provider
      value={{
        isOperationModalOpen,
        setIsOperationModalOpen,
      }}
    >
      {children}
    </OperationModalContext.Provider>
  );
};
