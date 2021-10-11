import React, { memo, useEffect, VFC } from "react";
import { useUsers } from "../../hooks/useUsers";
import {User} from "../../types/api";

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
      {users.map((user:User) => {
        return <p>{user.name}</p>;
      })}
    </div>
  );
});
