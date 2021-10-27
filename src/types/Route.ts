import { ReactElement } from "react";

export type RouteTypes = {
  path: string;
  exact: boolean;
  children: ReactElement;
  redirect?: string | null;
  isPrivate?: boolean | null;
};
