import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type MessageModalContextType = {
  isMessageModalOpen: boolean;
  setIsMessageModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const MessageModalContext = createContext<MessageModalContextType>(
  {} as MessageModalContextType
);
export const MessageModalProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isMessageModalOpen, setIsMessageModalOpen] = useState<boolean>(false);
  return (
    <MessageModalContext.Provider
      value={{ isMessageModalOpen, setIsMessageModalOpen }}
    >
      {children}
    </MessageModalContext.Provider>
  );
};
