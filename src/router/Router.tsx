import React, { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { userRoutes } from "./directory/UserRoutes";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Users } from "../components/pages/Users";
import { teamRoutes } from "./directory/TeamRoutes";
import { Page404 } from "../components/pages/Page404";
import { Sandbox } from "../components/pages/Sandbox";
import { SideMenuProvider } from "../providers/SideMenuProvider";
import { UserModalProvider } from "../providers/UserModalProvider";
import { MessageModalProvider } from "../providers/MessageModalProvider";
import { OperationModalProvider } from "../providers/OperationModalProvider";
import { MessageProvider } from "../providers/MessageProvider";
import { SelectedUserProvider } from "../providers/SelectedUserProvider";
import { TeamModalProvider } from "../providers/TeamModalProvider";
import { SelectedTeamProvider } from "../providers/SelectedTeamProvider";
import { MonthlyReport } from "../components/pages/MonthlyReport";

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
                        <Users />
                      </Route>
                      <Route
                        path="/teams"
                        render={({ match: { url } }) => (
                          <Switch>
                            {teamRoutes.map((route) => (
                              <Route
                                key={route.path}
                                exact={route.exact}
                                path={`${url}${route.path}`}
                              >
                                <HeaderLayout>{route.children}</HeaderLayout>
                              </Route>
                            ))}
                          </Switch>
                        )}
                      />
                      <Route path="/post/">
                        <HeaderLayout>{<MonthlyReport />}</HeaderLayout>
                      </Route>

                      <Route
                        path="/users"
                        render={({ match: { url } }) => (
                          <Switch>
                            {userRoutes.map((route) => (
                              <Route
                                key={route.path}
                                exact={route.exact}
                                path={`${url}${route.path}`}
                              >
                                <HeaderLayout>{route.children}</HeaderLayout>
                              </Route>
                            ))}
                          </Switch>
                        )}
                      />
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
