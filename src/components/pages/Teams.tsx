import React, { memo, VFC } from "react";
import { TeamTable } from "../organisms/teams/TeamTable";
import { Card, CardContent } from "@mui/material";

export const Teams: VFC = memo(() => {
  return (
    <Card>
      <CardContent>
        <TeamTable />
      </CardContent>
    </Card>
  );
});
