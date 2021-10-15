import { User } from "./api";

export type DisplayUser = Pick<User, "id" | "name">;

export type RegisterUser = {
  name: string;
};
