import React, { memo, useEffect, VFC } from "react";
import { useTeams } from "../../hooks/useTeams";

export const Teams: VFC = memo(() => {
  const { teams, getTeams } = useTeams();

  useEffect(() => {
    getTeams();
  }, [getTeams]);

  //検索バー
  //追加ボタン
  //テーブル
  //ページング
  //ダイアログ

  return (
    <div>
      {teams.map((team) => {
        return <p>{team.name}</p>;
      })}
    </div>
  );
});
