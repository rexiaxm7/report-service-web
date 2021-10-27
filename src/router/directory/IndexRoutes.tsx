import React from "react";
import { Page404 } from "../../components/pages/Page404";
import { Teams } from "../../components/pages/Teams";
import { RouteTypes } from "../../types/Route";

export const teamRoutes: Array<RouteTypes> = [
  { path: "/", exact: true, children: <Teams />, isPrivate: true },
  { path: "*", exact: false, children: <Page404 />, isPrivate: false },
];
