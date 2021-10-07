import { useCallback, useState } from "react";
import { Team } from "../types/api/team";
import api from "../../src/axios";
import { useMessage } from "./useMessage";

export const useTeam = () => {
  const { showMessage } = useMessage();
  const [team, setTeam] = useState<Array<Team>>([]);
  const getTeam = useCallback((id: number) => {
    api
      .get<Array<Team>>(`/team/${id}`)
      .then((res) => setTeam(res.data))
      .catch((e) => showMessage(e.message));
  }, []);
  return { team, getTeam };
};
