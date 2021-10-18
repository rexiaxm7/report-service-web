import { useCallback, useContext, useState } from "react";
import api from "../../axios";
import { useMessage } from "../view/useMessage";
import { DisplayUser, RegisterUser } from "../../types/User";
import { MessageContext } from "../../providers/MessageProvider";
import { ResponseStatus } from "../../types/api/ResponseStatus";

export const useUser = () => {
  const useMessageContext = () => useContext(MessageContext);
  const { addMessage } = useMessageContext();
  const { showMessage } = useMessage();
  const [user, setUser] = useState<DisplayUser | null>(null);
  const getUser = useCallback(
    (userId: number) => {
      console.log("getUser");
      api
        .get(`/users/${userId}`)
        .then((res) => {
          const { id, name, team_id } = res.data;
          const displayUser: DisplayUser = { id, name, team_id };
          setUser(displayUser);
        })
        .catch((e) => showMessage(e.message, e.statusCode));
    },
    [showMessage]
  );

  const registerUser = useCallback(
    (user: RegisterUser) => {
      /*登録処理*/
      api
        .post(`/users`, user)
        .then((res) => {
          setUser(null);
          const { statusText, status } = res;
          const statusCode = status as ResponseStatus;
          addMessage({
            message: statusText || "ユーザーの登録に成功しました",
            status: statusCode,
          });
        })
        .catch((e) => showMessage(e.message, e.statusCode));
    },
    [addMessage, showMessage]
  );

  const updateUser = useCallback(
    (user: DisplayUser) => {
      api
        .put(`/users/${user.id}`, user)
        .then((res) => {
          getUser(user.id);
        })
        .catch((e) => showMessage(e.message, e.statusCode));
    },
    [getUser, showMessage]
  );

  const deleteUser = useCallback(
    (userId: number) => {
      api
        .delete(`/users/${userId}`)
        .then((res) => {
          const { statusText, status } = res;
          const statusCode = status as ResponseStatus;
          addMessage({
            message: statusText || "ユーザーの削除に成功しました",
            status: statusCode,
          });
        })
        .catch((e) => {
          const { statusText, status } = e;
          const statusCode = status as ResponseStatus;
          addMessage({
            message: statusText || "ユーザーの削除に失敗しました",
            status: statusCode,
          });
        })
        .finally(() => setUser(null));
    },
    [addMessage]
  );

  return { user, getUser, updateUser, deleteUser, registerUser };
};
