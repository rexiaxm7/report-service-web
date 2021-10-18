import { useCallback, useContext, useState } from "react";
import api from "../../axios";
import { useMessage } from "../view/useMessage";
import { DisplayUser, RegisterUser } from "../../types/User";
import { MessageContext } from "../../providers/MessageProvider";

export const useUser = () => {
  const useMessageContext = () => useContext(MessageContext);
  const { addMessage } = useMessageContext();
  const { createMessage } = useMessage();
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
        .catch((e) => createMessage(e));
    },
    [createMessage]
  );

  const registerUser = useCallback(
    (user: RegisterUser) => {
      /*登録処理*/
      api
        .post(`/users`, user)
        .then((res) => {
          setUser(null);
          createMessage(res, "ユーザーの登録に成功しました");
        })
        .catch((e) => createMessage(e, "ユーザーの登録に失敗しました"));
    },
    [createMessage]
  );

  const updateUser = useCallback(
    (user: DisplayUser) => {
      api
        .put(`/users/${user.id}`, user)
        .then((res) => {
          createMessage(res, "ユーザーの更新に成功しました");
        })
        .catch((e) => {
          createMessage(e, "ユーザーの更新に失敗しました");
        });
    },
    [getUser]
  );

  const deleteUser = useCallback(
    (userId: number) => {
      api
        .delete(`/users/${userId}`)
        .then((res) => {
          createMessage(res, "ユーザーの削除に成功しました");
        })
        .catch((e) => {
          createMessage(e, "ユーザーの削除に失敗しました");
        })
        .finally(() => setUser(null));
    },
    [addMessage]
  );

  return { user, getUser, updateUser, deleteUser, registerUser };
};
