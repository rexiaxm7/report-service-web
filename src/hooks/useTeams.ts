import { useCallback, useState } from "react";
import { Team } from "../types/api/team";
import api from "../../src/axios";
import { useMessage } from "./useMessage";

export const useTeams = () => {
  const { showMessage } = useMessage();
  const [teams, setTeams] = useState<Array<Team>>([]);
  const getTeams = useCallback(() => {
    api
      .get<Array<Team>>("/teams")
      .then((res) => setTeams(res.data))
      .catch((e) => showMessage(e.message));
  }, []);
  return { teams, getTeams};
};
