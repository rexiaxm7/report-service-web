import React from "react";
import { Teams } from "../../components/pages/Teams";
import { RouteTypes } from "../../types/Route";

export const useTeamRoutes = () => {
  const teamRoot = "/teams";
  const teamRoutes: Array<RouteTypes> = [
    {
      name: "チーム一覧",
      path: "/",
      exact: true,
      children: <Teams />,
      isPrivate: true,
    },
  ];

  return { teamRoot, teamRoutes };
};
