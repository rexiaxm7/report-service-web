import React, { memo, useEffect, VFC } from "react";
import { useTeams } from "../../hooks/useTeams";

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
      {teams.map((team) => {
        return <p>{team.name}</p>;
      })}
    </div>
  );
});
