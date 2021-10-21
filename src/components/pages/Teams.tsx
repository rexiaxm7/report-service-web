import React, { memo, VFC } from "react";
import { TeamTable } from "../organisms/teams/TeamTable";
import { Card } from "@mui/material";

export const Teams: VFC = memo(() => {
  return (
    <Card>
      <TeamTable />
    </Card>
  );
});
