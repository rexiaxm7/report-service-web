import { useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginUser, LoginUserType } from "../../atom/LoginUser";

export const useHeader = () => {
  const history = useHistory();
  const onClickApplicationTitle = useCallback(() => history.push("/"), []);
  const [loginUser, setLoginUser] = useRecoilState<LoginUserType>(LoginUser);
  const loginUserName = useMemo(
    () => (loginUser ? loginUser.name : ""),
    [loginUser]
  );
  return { onClickApplicationTitle, loginUser, loginUserName, setLoginUser };
};
