import { useTeamRoutes } from "../../router/directory/TeamRoutes";
import { useUserRoutes } from "../../router/directory/UserRoutes";

export const usePageTitle = () => {
  const addPrefixRoutes = (routes: any, prefix: string) =>
    routes.map((route: any) => {
      const url = `${prefix}${route.path}`;
      return {
        name: route.name,
        path: `${url.replace(/\/$/, "")}`,
      };
    });
  //TODO: ページ追加時にいじる箇所を最小限にしたい
  const { teamRoutes, teamRoot } = useTeamRoutes();
  const { userRoutes, userRoot } = useUserRoutes();
  const prefixedTeamRoutes = addPrefixRoutes(teamRoutes, teamRoot);
  const prefixedUserRoutes = addPrefixRoutes(userRoutes, userRoot);
  const prefixedRoutes = [...prefixedTeamRoutes, ...prefixedUserRoutes];
  const findPageTitle = (path: string): string =>
    prefixedRoutes.find((route) => route.path === path)?.name || "";

  return { findPageTitle };
};
