// import { UserManagement } from "../components/pages/UserManagement";
// import { Setting } from "../components/pages/Setting";
// import { Users } from "../components/pages/Users";
// import { Page404 } from "../components/pages/Page404";
import React from "react";
import { Page404 } from "../../components/pages/Page404";
import { Users } from "../../components/pages/Users";

export const userRoutes = [
  { path: "/", exact: true, children: <Users /> },
  { path: "*", exact: false, children: <Page404 /> },
];
