import { atom } from "recoil";

export type LoginUserType = {
  id: number;
  name: string;
  team_id: number;
  email: string;
  admin_flag: boolean;
} | null;

export const LoginUser = atom({
  key: "sampleListState",
  default: null,
});
