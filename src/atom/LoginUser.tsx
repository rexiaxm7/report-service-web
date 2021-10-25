import { atom } from "recoil";

type LoginUserType = {
  id: number;
  name: string;
  team_id: number;
  email: string;
  admin_flag: boolean;
};

export const LoginUser = atom({
  key: "sampleListState",
  default: null,
});
