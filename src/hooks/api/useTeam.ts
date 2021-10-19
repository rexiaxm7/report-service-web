import { useCallback, useContext, useState } from "react";
import api from "../../axios";
import { useMessage } from "../view/useMessage";
import { DisplayTeam, RegisterTeam } from "../../types/Team";
import { MessageContext } from "../../providers/MessageProvider";

export const useTeam = () => {
  const useMessageContext = () => useContext(MessageContext);
  const { addMessage } = useMessageContext();
  const { createMessage } = useMessage();
  const [team, setTeam] = useState<DisplayTeam | null>(null);
  const getTeam = useCallback(
    (teamId: number) => {
      console.log("getTeam");
      api
        .get(`/teams/${teamId}`)
        .then((res) => {
          const {
            id,
            name,
            alert_start_days,
            input_start_date,
            sending_message_url,
          } = res.data;
          const displayTeam: DisplayTeam = {
            id,
            name,
            alert_start_days,
            input_start_date,
            sending_message_url,
          };
          setTeam(displayTeam);
        })
        .catch((e) => createMessage(e));
    },
    [createMessage]
  );

  const registerTeam = useCallback(
    (team: RegisterTeam) => {
      /*登録処理*/
      api
        .post(`/teams`, team)
        .then((res) => {
          setTeam(null);
          createMessage(res, "チームを登録しました");
        })
        .catch((e) => createMessage(e, "チームの登録に失敗しました"));
    },
    [createMessage]
  );

  const updateTeam = useCallback(
    (team: DisplayTeam) => {
      api
        .put(`/teams/${team.id}`, team)
        .then((res) => {
          createMessage(res, "チームを更新しました");
        })
        .catch((e) => {
          createMessage(e, "チームの更新に失敗しました");
        });
    },
    [createMessage]
  );

  const deleteTeam = useCallback(
    (teamId: number) => {
      api
        .delete(`/teams/${teamId}`)
        .then((res) => {
          createMessage(res, "チームの削除に成功しました");
        })
        .catch((e) => {
          createMessage(e, "チームの削除に失敗しました");
        })
        .finally(() => setTeam(null));
    },
    [addMessage]
  );

  return { team, getTeam, updateTeam, deleteTeam, registerTeam };
};
