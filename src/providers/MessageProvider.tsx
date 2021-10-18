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
  visible: boolean;
};

export const MessageContext = createContext<MessageContextType>(
  {} as MessageContextType
);

export const MessageProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [message, setMessage] = useState<Message>(null);
  const [visible, setVisible] = useState<boolean>(false);

  const addMessage = (message: Message) => {
    setMessage({ message: message!.message, status: message!.status });
    setVisible(true);
  };

  const removeMessage = () => {
    setVisible(false);
    //Snackbarのアニメーション中にメッセージがnullになると色が変わるのでアニメーションが終わるまで待機する
    setTimeout(() => setMessage(null), 400);
  };

  const contextValue = {
    message: message,
    addMessage,
    removeMessage,
    visible,
  };

  return (
    <MessageContext.Provider value={contextValue}>
      {children}
    </MessageContext.Provider>
  );
};
