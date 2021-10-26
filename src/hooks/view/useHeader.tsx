import { useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LoginUser, LoginUserType } from "../../atom/LoginUser";

export const useHeader = () => {
  const history = useHistory();
  const onClickApplicationTitle = useCallback(() => history.push("/"), []);
  const loginUser = useRecoilValue<LoginUserType>(LoginUser);
  const loginUserName = useMemo(
    () => (loginUser ? loginUser.name : ""),
    [loginUser]
  );
  return { onClickApplicationTitle, loginUser, loginUserName };
};
