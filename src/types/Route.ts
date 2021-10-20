import { ReactElement } from "react";

export type Route = {
  path: string;
  exact: boolean;
  children: ReactElement;
  redirect?: string;
};
