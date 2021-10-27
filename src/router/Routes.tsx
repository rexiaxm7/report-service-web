import React, { memo, VFC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { RouteTypes } from "../types/Route";
import { useRecoilValue } from "recoil";
import { LoginUser } from "../atom/LoginUser";

type Props = {
  path: string;
  routes: Array<RouteTypes>;
};
export const Routes: VFC<Props> = memo((props) => {
  const { path, routes } = props;
  const loginUser = useRecoilValue(LoginUser);
  const moveTo = (route: RouteTypes) => {
    const { redirect, children, isPrivate } = route;
    const authenticated = loginUser && isPrivate;
    const notAuthenticated = !loginUser && isPrivate;
    if (notAuthenticated) {
      return <Redirect to={"/login"} />;
    }
    if (authenticated || !isPrivate) {
      return redirect ? (
        <Redirect to={redirect} />
      ) : (
        <HeaderLayout>{children}</HeaderLayout>
      );
    }
  };
  return (
    <Route
      path={path}
      render={({ match: { url } }) => (
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={`${url}${route.path}`}
            >
              {moveTo(route)}
            </Route>
          ))}
        </Switch>
      )}
    />
  );
});
