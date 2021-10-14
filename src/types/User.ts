import { User } from "./api";

export type DisplayUser = Pick<User, "id" | "name">;
