import { Report } from "./api";

export type DisplayReport = Pick<
  Report,
  "id" | "user_id" | "year" | "month" | "content"
>;
export type RegisterReport = Pick<
  DisplayReport,
  "user_id" | "year" | "month" | "content"
>;
