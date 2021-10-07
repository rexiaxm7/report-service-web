// import { UserManagement } from "../components/pages/UserManagement";
// import { Setting } from "../components/pages/Setting";
// import { Users } from "../components/pages/Users";
// import { Page404 } from "../components/pages/Page404";
import React from "react";
import { Page404 } from "../../components/pages/Page404";
import { Teams } from "../../components/pages/Teams";

export const teamRoutes = [
  { path: "/", exact: true, children: <Teams /> },
  { path: "*", exact: false, children: <Page404 /> },
];
