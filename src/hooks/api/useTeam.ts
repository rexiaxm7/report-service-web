import { useCallback, useState } from "react";
import { Team } from "../../types/api";
import api from "../../axios";
import { useMessage } from "../view/useMessage";

export const useTeam = () => {
  const { showMessage } = useMessage();
  const [team, setTeam] = useState<Array<Team>>([]);
  const getTeam = useCallback((id: number) => {
    console.log("getTeam");
    api
      .get<Array<Team>>(`/team/${id}`)
      .then((res) => setTeam(res.data))
      .catch((e) => showMessage(e.message));
  }, []);
  return { team, getTeam };
};
