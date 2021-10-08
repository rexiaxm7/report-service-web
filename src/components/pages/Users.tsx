import React, { memo, useEffect, VFC } from "react";
import { useUsers } from "../../hooks/useUsers";

export const Users: VFC = memo(() => {
  const { users, getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  //データ
  //ユーザー一覧
  //ダイアログの状態

  return(
      //テーブル
      //ダイアログ
      <div>
      {users.map((user) => {
        return <p>{user.name}</p>;
      })}
    </div>
  );
});
