import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export type LoginUserType = {
  id: number;
  name: string;
  team_id: number;
  email: string;
  admin_flag: boolean;
} | null;

const { persistAtom } = recoilPersist();

export const LoginUser = atom({
  key: "sampleListState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
