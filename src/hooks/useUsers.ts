import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import api from "../../src/axios";
import { useMessage } from "./useMessage";

export const useUsers = () => {
  const { showMessage } = useMessage();
  const [users, setUsers] = useState<Array<User>>([]);
  const getUsers = useCallback(() => {
    api
      .get<Array<User>>("/users")
      .then((res) => setUsers(res.data))
      .catch((e) => showMessage(e.message));
  }, []);
  return { users, getUsers };
};
