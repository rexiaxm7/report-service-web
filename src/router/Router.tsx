import React, { memo, VFC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { userRoutes } from "./directory/UserRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { teamRoutes } from "./directory/TeamRoutes";
import { Page404 } from "../components/pages/Page404";
import { SideMenuProvider } from "../providers/SideMenuProvider";
import { UserModalProvider } from "../providers/UserModalProvider";
import { MessageModalProvider } from "../providers/MessageModalProvider";
import { OperationModalProvider } from "../providers/OperationModalProvider";
import { MessageProvider } from "../providers/MessageProvider";
import { SelectedUserProvider } from "../providers/SelectedUserProvider";
import { TeamModalProvider } from "../providers/TeamModalProvider";
import { SelectedTeamProvider } from "../providers/SelectedTeamProvider";
import { MonthlyReport } from "../components/pages/MonthlyReport";
import { UserLogin } from "../../src/components/pages/UserLogin";
import { Routes } from "./Routes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <MessageProvider>
        <SideMenuProvider>
          <SelectedUserProvider>
            <SelectedTeamProvider>
              <MessageModalProvider>
                <OperationModalProvider>
                  <UserModalProvider>
                    <TeamModalProvider>
                      <Route exact path="/">
                        <Redirect to={"/users"} />
                      </Route>
                      <Routes path="/teams" routes={teamRoutes} />
                      <Route path="/login">{<UserLogin />}</Route>
                      <Route path="/post">
                        <HeaderLayout>{<MonthlyReport />}</HeaderLayout>
                      </Route>
                      <Routes path="/users" routes={userRoutes} />
                    </TeamModalProvider>
                  </UserModalProvider>
                </OperationModalProvider>
              </MessageModalProvider>
            </SelectedTeamProvider>
          </SelectedUserProvider>
        </SideMenuProvider>
      </MessageProvider>
      <Route path="*">{<Page404 />}</Route>
    </Switch>
  );
});
