import React, { memo, useEffect, VFC } from "react";
import { useTeams } from "../../hooks/useTeams";
import {Team} from "../../types/api";

export const Teams: VFC = memo(() => {
  const { teams, getTeams } = useTeams();

  useEffect(() => {
    getTeams();
  }, [getTeams]);

  //データ
  //チーム一覧
  //ダイアログの状態


  return (
      //テーブル
      //ダイアログ
    <div>
      {teams.map((team:Team) => {
        return <p>{team.name}</p>;
      })}
    </div>
  );
});
