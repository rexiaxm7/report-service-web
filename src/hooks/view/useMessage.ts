import { DisplayUser } from "../../types/User";

export const useMessage = () => {
  const showMessage = (message: string) => {
    alert(message);
  };

  const deleteUserMessage = (user?: DisplayUser | null) =>
    `${user?.id}:${user?.name}を削除しますか？`;

  return { showMessage, deleteUserMessage };
};
