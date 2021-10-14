import React, { memo, VFC } from "react";
import { UserTable } from "../organisms/users/UserTable";

export const Users: VFC = memo(() => {
  return <UserTable />;
});
