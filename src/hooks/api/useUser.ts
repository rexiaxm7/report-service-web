import { useCallback, useContext, useState } from "react";
import api from "../../axios";
import { useMessage } from "../view/useMessage";
import { DisplayUser, RegisterUser, UpdateUser } from "../../types/User";
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
          const { id, name, team } = res.data;
          const displayUser: DisplayUser = { id, name, team };
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
          createMessage(res, "ユーザーを登録しました");
        })
        .catch((e) => createMessage(e, "ユーザーの登録に失敗しました"));
    },
    [createMessage]
  );

  const updateUser = useCallback(
    (user: UpdateUser) => {
      console.log(user);
      api
        .put(`/users/${user.id}`, user)
        .then((res) => {
          createMessage(res, "ユーザーを更新しました");
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
          createMessage(res, "ユーザーを削除しました");
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
