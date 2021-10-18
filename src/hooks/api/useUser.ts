import { useCallback, useState } from "react";
import api from "../../axios";
import { useMessage } from "../view/useMessage";
import { DisplayUser, RegisterUser } from "../../types/User";

export const useUser = () => {
  const { showMessage } = useMessage();
  const [user, setUser] = useState<DisplayUser | null>(null);
  const getUser = useCallback((userId: number) => {
    console.log("getUser");
    api
      .get(`/users/${userId}`)
      .then((res) => {
        const { id, name, team_id } = res.data;
        const displayUser: DisplayUser = {
          id,
          name,
          team_id,
        };
        setUser(displayUser);
      })
      .catch((e) => showMessage(e.message, e.statusCode));
  }, []);

  const registerUser = useCallback((user: RegisterUser) => {
    /*登録処理*/
    api
      .post(`/users`, user)
      .then((res) => {
        setUser(null);
      })
      .catch((e) => showMessage(e.message, e.statusCode));
  }, []);

  const updateUser = useCallback((user: DisplayUser) => {
    api
      .put(`/users/${user.id}`, user)
      .then((res) => {
        getUser(user.id);
      })
      .catch((e) => showMessage(e.message, e.statusCode));
  }, []);

  const deleteUser = useCallback((userId: number) => {
    api
      .delete(`/users/${userId}`)
      .then((res) => {
        setUser(null);
      })
      .catch((e) => showMessage(e.message, e.statusCode));
  }, []);

  return { user, getUser, updateUser, deleteUser, registerUser };
};
