import { DisplayUser } from "../../types/User";
import { useContext } from "react";
import { MessageModalContext } from "../../providers/MessageModalProvider";

export const useMessage = () => {
  const useMessageModalContext = () => useContext(MessageModalContext);
  const { setIsMessageModalOpen, isMessageModalOpen } =
    useMessageModalContext();

  const showMessage = (message: string) => {
    alert(message);
  };

  const deleteUserMessage = (user?: DisplayUser | null) =>
    `${user?.id}:${user?.name}を削除しますか？`;

  return {
    setIsMessageModalOpen,
    isMessageModalOpen,
    showMessage,
    deleteUserMessage,
  };
};
