import React, { memo, useEffect, VFC } from "react";
import { useUsers } from "../../hooks/useUsers";

export const Users: VFC = memo(() => {
  const { users, getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return <p>{user.name}</p>;
      })}
    </div>
  );
});
