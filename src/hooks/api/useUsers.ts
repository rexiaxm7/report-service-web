import { useCallback, useState } from "react";
import { useMessage } from "../view/useMessage";
import { DisplayUser } from "../../types/User";

export const useUsers = () => {
  const { showMessage } = useMessage();
  const [users, setUsers] = useState<Array<DisplayUser>>([]);
  const getUsers = useCallback(() => {
    console.log("getusers");
    // api
    //   .get<Array<User>>("/users")
    //   .then((res) => setUsers(res.data))
    //   .catch((e) => showMessage(e.message));
    return [
      { id: 1, name: "UserName1" },
      { id: 2, name: "UserName2" },
      { id: 3, name: "UserName3" },
      { id: 4, name: "UserName4" },
      { id: 5, name: "UserName5" },
      { id: 6, name: "UserName6" },
      { id: 7, name: "UserName7" },
      { id: 8, name: "UserName8" },
      { id: 9, name: "UserName9" },
      { id: 10, name: "UserName10" },
      { id: 11, name: "UserName11" },
    ];
  }, []);
  return { users, getUsers, setUsers };
};
