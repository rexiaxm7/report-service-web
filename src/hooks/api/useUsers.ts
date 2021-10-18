import { useCallback, useState } from "react";
import { useMessage } from "../view/useMessage";
import { DisplayUser } from "../../types/User";
import api from "../../axios";

export const useUsers = () => {
  const { createMessage } = useMessage();
  const [users, setUsers] = useState<Array<DisplayUser>>([]);

  const getUsers = useCallback(() => {
    console.log("getUsers");
    api
      .get<Array<DisplayUser>>(`/users`)
      .then((res) => setUsers(res.data))
      .catch((e) => createMessage(e, "ユーザー一覧の取得に失敗しました"));
  }, []);

  return { users, getUsers, setUsers };
};
