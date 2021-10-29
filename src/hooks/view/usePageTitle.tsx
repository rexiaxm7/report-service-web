import { useTeamRoutes } from "../../router/directory/TeamRoutes";
import { useUserRoutes } from "../../router/directory/UserRoutes";
import { usePostRoutes } from "../../router/directory/PostRoutes";

export const usePageTitle = () => {
  const addPrefixRoutes = (routes: any, prefix: string) =>
    routes.map((route: any) => {
      const url = `${prefix}${route.path}`;
      return {
        name: route.name,
        path: `${url.replace(/\/$/, "")}`,
      };
    });
  //TODO: 肥大化するのでどうにかして抑制する
  const { teamRoutes, teamRoot } = useTeamRoutes();
  const { userRoutes, userRoot } = useUserRoutes();
  const { postRoutes, postRoot } = usePostRoutes();
  const prefixedTeamRoutes = addPrefixRoutes(teamRoutes, teamRoot);
  const prefixedUserRoutes = addPrefixRoutes(userRoutes, userRoot);
  const prefixedPostRoutes = addPrefixRoutes(postRoutes, postRoot);
  const prefixedRoutes = [
    ...prefixedTeamRoutes,
    ...prefixedUserRoutes,
    ...prefixedPostRoutes,
  ];
  const findPageTitle = (path: string): string =>
    prefixedRoutes.find((route) => route.path === path)?.name || "";

  return { findPageTitle };
};
