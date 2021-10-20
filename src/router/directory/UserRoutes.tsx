import React from "react";
import { Page404 } from "../../components/pages/Page404";
import { Users } from "../../components/pages/Users";
import { Route } from "../../types/Route";

export const userRoutes: Array<Route> = [
  { path: "/", exact: true, children: <Users /> },
  { path: "*", exact: false, children: <Page404 /> },
];
