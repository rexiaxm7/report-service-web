import React, { memo, VFC } from "react";
import { TeamTable } from "../organisms/teams/TeamTable";

export const Teams: VFC = memo(() => {
  return <TeamTable />;
});
