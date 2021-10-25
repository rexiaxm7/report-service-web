import { useCallback, useState } from "react";
import api from "../../axios";
import { useMessage } from "../view/useMessage";
import { useRecoilState } from "recoil";
import { LoginUser } from "../../atom/LoginUser";

export const useAuth = () => {
  const { createMessage } = useMessage();
  const [loginUser, setLoginUser] = useRecoilState(LoginUser);

  // const preLogin = useCallback((): any => {
  //   api
  //     .get(`/prelogin`)
  //     .then((res) => {})
  //     .catch((e) => createMessage(e, "ログインに失敗しました"));
  // }, [createMessage]);
  const login = useCallback(async (loginId: string, password: string) => {
    const formData = new FormData();
    formData.append("email", loginId);
    formData.append("password", password);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    await api
      .post(`/login`, formData, config)
      .then((res: any) => {
        const response = JSON.parse(res.data);
        setLoginUser(response.user);
      })
      .catch((e) => createMessage(e, "ログインに失敗しました"));
  }, []);

  return { login };
};
