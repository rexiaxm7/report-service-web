import React from "react";
import { Teams } from "../../components/pages/Teams";
import { RouteTypes } from "../../types/Route";
import { MonthlyReport } from "../../components/pages/MonthlyReport";

export const usePostRoutes = () => {
  const postRoot = "/post";
  const postRoutes: Array<RouteTypes> = [
    {
      name: "月報提出",
      path: "/",
      exact: true,
      children: <MonthlyReport />,
      isPrivate: true,
    },
  ];

  return { postRoot, postRoutes };
};
