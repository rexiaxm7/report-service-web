import { useCallback, useState } from "react";
import { useMessage } from "../view/useMessage";
import { DisplayTeam } from "../../types/Team";
import api from "../../axios";

export const useTeams = () => {
  const { createMessage } = useMessage();
  const [teams, setTeams] = useState<Array<DisplayTeam>>([]);

  const getTeams = useCallback(() => {
    console.log("getTeams");
    api
      .get<Array<DisplayTeam>>(`/teams`)
      .then((res) => setTeams(res.data))
      .catch((e) => createMessage(e, "チームー一覧の取得に失敗しました"));
  }, []);

  return { teams, getTeams, setTeams };
};
