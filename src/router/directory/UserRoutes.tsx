import React from "react";
import { Page404 } from "../../components/pages/Page404";
import { Users } from "../../components/pages/Users";
import { RouteTypes } from "../../types/Route";

export const userRoutes: Array<RouteTypes> = [
  { path: "/", exact: true, children: <Users />, isPrivate: true },
  { path: "*", exact: false, children: <Page404 />, isPrivate: false },
];
