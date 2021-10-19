import { useCallback } from "react";
import { useHistory } from "react-router-dom";

export const useHeader = () => {
  const history = useHistory();
  const onClickApplicationTitle = useCallback(() => history.push("/"), []);
  const onClickUserManagement = useCallback(
    () => history.push("/home/user_management"),
    []
  );

  const onClickSetting = useCallback(
    (props) => history.push("/home/setting"),
    []
  );
  return { onClickApplicationTitle };
};
