import { ReactElement } from "react";

export type RouteTypes = {
  name?: string;
  path: string;
  exact: boolean;
  children: ReactElement;
  redirect?: string | null;
  isPrivate?: boolean | null;
};
