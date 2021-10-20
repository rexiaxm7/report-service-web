import { Team, User } from "./api";

type UpdateTeam = {
  team: Pick<Team, "id">;
};

type DisplayTeam = {
  team: Pick<Team, "id" | "name">;
};

type RegisterTeam = UpdateTeam;
export type DisplayUser = Pick<User, "id" | "name"> & DisplayTeam;
export type UpdateUser = Pick<User, "id" | "name"> & UpdateTeam;
export type RegisterUser = Pick<User, "name"> & RegisterTeam;
