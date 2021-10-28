import * as yup from "yup";
import { useValidationMessage } from "./useValidationMessage";
import { useDomain } from "./useDomain";
import dayjs from "dayjs";

export const useValidationDomain = () => {
  const {
    REQUIRED,
    REQUIRED_SELECT,
    MIN_NUMBER_INPUT,
    MIN_STRING_INPUT,
    MAX_NUMBER_INPUT,
    MATCHES_PASSWORD,
    FORMAT,
  } = useValidationMessage();

  const {
    INPUT_START_DATE,
    ALERT_START_DAYS,
    TEAM,
    TEAM_NAME,
    USER_NAME,
    EMAIL,
    PASSWORD,
    AUTHORITY,
  } = useDomain();

  const monthEnd = Number(dayjs().endOf("month").format("DD"));

  const teamIdDomain = yup.number().min(1, REQUIRED_SELECT(TEAM));
  const adminDomain = yup.boolean().required(REQUIRED_SELECT(AUTHORITY));
  const userNameDomain = yup.string().required(REQUIRED(USER_NAME));
  const emailDomain = yup
    .string()
    .required(REQUIRED(EMAIL))
    .email(FORMAT(EMAIL));
  const passwordDomain = yup
    .string()
    .required(REQUIRED(PASSWORD))
    .min(8, MIN_STRING_INPUT(8, PASSWORD))
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
      MATCHES_PASSWORD()
    );

  const teamNameDomain = yup.string().required(REQUIRED(TEAM_NAME));
  const inputStartDateDomain = yup
    .number()
    .min(1, MIN_NUMBER_INPUT(1, INPUT_START_DATE))
    .max(monthEnd, MAX_NUMBER_INPUT(monthEnd, INPUT_START_DATE))
    .transform((value) => (isNaN(value) ? undefined : value))
    .required(REQUIRED(INPUT_START_DATE));
  const alertStartDaysDomain = yup
    .number()
    .required(REQUIRED(INPUT_START_DATE))
    .min(1, MIN_NUMBER_INPUT(1, ALERT_START_DAYS))
    .max(monthEnd, MAX_NUMBER_INPUT(monthEnd, ALERT_START_DAYS))
    .transform((value) => (isNaN(value) ? undefined : value))
    .required(REQUIRED(ALERT_START_DAYS));
  const sendingMessageUrlDomain = yup.string();

  return {
    passwordDomain,
    emailDomain,
    teamIdDomain,
    adminDomain,
    userNameDomain,
    teamNameDomain,
    inputStartDateDomain,
    alertStartDaysDomain,
    sendingMessageUrlDomain,
  };
};
