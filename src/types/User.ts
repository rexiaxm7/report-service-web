import { Team, User } from "./api";

type DisplayTeam = {
  team: Pick<Team, "id" | "name">;
};

export type DisplayUser = Pick<User, "id" | "name" | "email" | "admin"> &
  DisplayTeam;
export type UpdateUser = Pick<
  User,
  "id" | "name" | "email" | "admin" | "team_id"
>;

export type RegisterUser = Pick<
  User,
  "name" | "email" | "admin" | "team_id" | "password"
>;
