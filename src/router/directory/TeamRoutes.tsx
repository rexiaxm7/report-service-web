// import { UserManagement } from "../components/pages/UserManagement";
// import { Setting } from "../components/pages/Setting";
// import { Users } from "../components/pages/Users";
// import { Page404 } from "../components/pages/Page404";
import React, { ReactElement } from "react";
import { Page404 } from "../../components/pages/Page404";
import { Teams } from "../../components/pages/Teams";
import { Route } from "../../types/Route";

export const teamRoutes: Array<Route> = [
  { path: "/", exact: true, children: <Teams /> },
  { path: "*", exact: false, children: <Page404 /> },
];
