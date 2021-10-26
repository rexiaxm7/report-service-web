import { SetStateAction, useCallback, useState } from "react";
import api from "../../axios";
import { useMessage } from "../view/useMessage";
import { useRecoilState, useResetRecoilState } from "recoil";
import { LoginUser } from "../../atom/LoginUser";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
  const { createMessage } = useMessage();
  const [loginUser, setLoginUser] = useRecoilState(LoginUser);
  const resetLoginUser = useResetRecoilState(LoginUser);
  const history = useHistory();
  const login = useCallback(
    async (loginId: string, password: string, setError: any) => {
      console.log("executed login");
      const data = {
        email: loginId,
        password: password,
      };

      await api
        .post(`/login`, data)
        .then((res: any) => {
          const response = JSON.parse(res.data);
          setLoginUser(response.user);
          //TODO: メソッドの外で実行したい
          history.push("/users");
        })
        .catch((e) => {
          resetLoginUser();
          createMessage(e, "ログインに失敗しました");
          //TODO: メソッドの外で実行したい
          setError(true);
        });
    },
    [setLoginUser]
  );

  return { login };
};
