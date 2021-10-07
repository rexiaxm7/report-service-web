// import { UserManagement } from "../components/pages/UserManagement";
// import { Setting } from "../components/pages/Setting";
// import { Home } from "../components/pages/Home";
// import { Page404 } from "../components/pages/Page404";
import React from "react";
import { Home } from "../components/pages/Home";

export const homeRoutes = [
  { path: "/", exact: true, children: <Home /> },
  // { path: "/user_management", exact: false, children: <UserManagement /> },
  // { path: "/setting", exact: false, children: <Setting /> },
  // { path: "*", exact: false, children: <Page404 /> },
];
