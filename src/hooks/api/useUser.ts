import { useCallback, useState } from "react";
import { Team, User } from "../../types/api";
import api from "../../axios";
import { useMessage } from "../view/useMessage";
import { DisplayUser } from "../../types/User";

export const useUser = () => {
  const { showMessage } = useMessage();
  const [user, setUser] = useState<Array<User>>([]);
  const getUser = useCallback((id: number) => {
    console.log("getTeam");
    api
      .get<Array<User>>(`/team/${id}`)
      .then((res) => setUser(res.data))
      .catch((e) => showMessage(e.message));
  }, []);

  const registerUser = useCallback((user: DisplayUser) => {
    /*登録処理*/
    console.log("登録処理が完了しました");
  }, []);

  const updateUser = useCallback((user: DisplayUser) => {
    /*更新処理*/
    console.log("更新処理が完了しました");
  }, []);

  const deleteUser = useCallback((user: DisplayUser) => {
    /*削除処理*/
    console.log("削除処理が完了しました");
  }, []);

  return { user, getUser, updateUser, deleteUser, registerUser };
};
