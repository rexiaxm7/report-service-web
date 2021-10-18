import { useCallback, useState } from "react";
import { useMessage } from "../view/useMessage";
import { DisplayTeam } from "../../types/Team";

export const useTeams = () => {
  const { showMessage } = useMessage();
  const [teams, setTeams] = useState<Array<DisplayTeam>>([]);
  const getTeams = useCallback(() => {
    console.log("getTeams");
    // api
    //   .get<Array<User>>("/users")
    //   .then((res) => setUsers(res.data))
    //   .catch((e) => showMessage(e.message , e.statusCode));
    return [
      { id: 1, name: "チーム1" },
      { id: 2, name: "チーム2" },
      { id: 3, name: "チーム3" },
      { id: 4, name: "チーム4" },
      { id: 5, name: "チーム5" },
      { id: 6, name: "チーム6" },
      { id: 7, name: "チーム7" },
      { id: 8, name: "チーム8" },
      { id: 9, name: "チーム9" },
      { id: 10, name: "チーム10" },
      { id: 11, name: "チーム11" },
    ];
  }, []);
  return { teams, getTeams, setTeams };
};
