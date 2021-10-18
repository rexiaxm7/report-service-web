import React, { createContext, ReactNode, useState } from "react";
import { ResponseStatus } from "../types/api/ResponseStatus";

type Message = {
  message: string;
  status: ResponseStatus;
} | null;

export type MessageContextType = {
  message: Message;
  addMessage: (message: Message) => void;
  removeMessage: () => void;
};

export const MessageContext = createContext<MessageContextType>(
  {} as MessageContextType
);

export const MessageProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [message, setMessage] = useState<Message>(null);

  const removeMessage = () => setMessage(null);
  const addMessage = (message: Message) =>
    setMessage({ message: message!.message, status: message!.status });

  const contextValue = {
    message: message,
    addMessage,
    removeMessage,
  };

  return (
    <MessageContext.Provider value={contextValue}>
      {children}
    </MessageContext.Provider>
  );
};
