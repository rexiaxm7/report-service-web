import * as yup from "yup";
import { useValidationMessage } from "./useValidationMessage";

export const useValidationDomain = () => {
  const {
    REQUIRED,
    REQUIRED_SELECT,
    MIN_NUMBER_INPUT,
    MATCHES_PASSWORD,
    FORMAT,
  } = useValidationMessage();
  const TEAM = "チーム";
  const AUTHORITY = "権限";
  const USER_NAME = "ユーザー名";
  const EMAIL = "メールアドレス";
  const PASSWORD = "パスワード";

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
    .min(8, MIN_NUMBER_INPUT(8, PASSWORD))
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
      MATCHES_PASSWORD()
    );

  return {
    passwordDomain,
    emailDomain,
    teamIdDomain,
    adminDomain,
    userNameDomain,
  };
};
