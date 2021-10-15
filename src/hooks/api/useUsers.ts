import { useCallback, useState } from "react";
import { useMessage } from "../view/useMessage";
import { DisplayUser } from "../../types/User";
import api from "../../axios";
import { User } from "../../types/api";

export const useUsers = () => {
  const { showMessage } = useMessage();
  const [users, setUsers] = useState<Array<DisplayUser>>([]);

  const getUsers = useCallback(() => {
    console.log("getUsers");
    api
      .get<Array<DisplayUser>>(`/users`)
      .then((res) => setUsers(res.data))
      .catch((e) => showMessage(e.message));
  }, []);

  return { users, getUsers, setUsers };
};
