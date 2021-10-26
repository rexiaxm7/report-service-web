import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";
import { useAuth } from "../api/useAuth";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginUser } from "../../atom/LoginUser";

export const useLoginForm = () => {
  const { login } = useAuth();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, setLoginUser] = useRecoilState(LoginUser);
  const [error, setError] = useState(false);

  const onChangeLoginId = (e: ChangeEvent<HTMLInputElement>) =>
    setLoginId(e.target.value);

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const onClickLogin = async (setErr: any) => {
    await login(loginId, password, setErr);
  };

  return {
    loginId,
    password,
    onChangeLoginId,
    onChangePassword,
    onClickLogin,
    error,
    setError,
    loginUser,
    setLoginUser,
  };
};
