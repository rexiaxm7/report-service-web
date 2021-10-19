import { User } from "./api";

export type DisplayUser = Pick<User, "id" | "name" | "team_id">;
export type RegisterUser = Pick<DisplayUser, "name" | "team_id">;
