import React from "react";
import { Users } from "../../components/pages/Users";
import { RouteTypes } from "../../types/Route";

export const useUserRoutes = () => {
  const userRoot = "/users";
  const userRoutes: Array<RouteTypes> = [
    {
      name: "ユーザー一覧",
      path: "/",
      exact: true,
      children: <Users />,
      isPrivate: true,
    },
  ];
  return { userRoot, userRoutes };
};
