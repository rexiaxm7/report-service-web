import { Team } from "./api";

export type DisplayTeam = Pick<
  Team,
  | "id"
  | "name"
  | "input_start_date"
  | "alert_start_days"
  | "sending_message_url"
>;
export type RegisterTeam = Pick<
  Team,
  "name" | "input_start_date" | "alert_start_days" | "sending_message_url"
>;
