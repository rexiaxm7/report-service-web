import React, { memo, VFC } from "react";
import { UserTable } from "../organisms/users/UserTable";
import { Card, CardContent } from "@mui/material";

export const Users: VFC = memo(() => {
  return (
    <Card>
      <CardContent>
        <UserTable />
      </CardContent>
    </Card>
  );
});
