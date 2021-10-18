import { DisplayUser } from "../../types/User";
import { useContext } from "react";
import { MessageModalContext } from "../../providers/MessageModalProvider";
import { ResponseStatus } from "../../types/api/ResponseStatus";
import { MessageContext } from "../../providers/MessageProvider";

export const useMessage = () => {
  const useMessageContext = () => useContext(MessageContext);
  const { message, addMessage, removeMessage } = useMessageContext();
  const useMessageModalContext = () => useContext(MessageModalContext);
  const { setIsMessageModalOpen, isMessageModalOpen } =
    useMessageModalContext();

  const createMessage = (response: any, customMessage = "") => {
    //error
    if (response.message) {
      const { message, statusCode } = response;
      const code = statusCode as ResponseStatus;
      showMessage(customMessage || message, code);
    }
    //success
    else {
      const { statusText, status } = response;
      const code = status as ResponseStatus;
      showMessage(customMessage || statusText, code);
    }
  };

  const showMessage = (msg: string, status: ResponseStatus) => {
    if (message) {
      removeMessage();
    }
    addMessage({ message: msg, status });
  };

  const deleteUserMessage = (user?: DisplayUser | null) =>
    `${user?.id}:${user?.name}を削除しますか？`;

  return {
    setIsMessageModalOpen,
    isMessageModalOpen,
    createMessage,
    deleteUserMessage,
  };
};
