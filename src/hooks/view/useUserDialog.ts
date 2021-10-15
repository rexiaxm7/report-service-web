import { ChangeEvent, useCallback, useState } from "react";
import { useMessage } from "./useMessage";
import { useUser } from "../api/useUser";
import { DisplayUser } from "../../types/User";

export const useUserDialog = () => {
  const { showMessage } = useMessage();
  const { updateUser } = useUser();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const toggleUserDialog = useCallback((status = false) => {
    console.log(`toggleUserDialog:${status}`);
    setIsDialogOpen(status);
  }, []);

  const onClickUpdate = useCallback(
    (id, toggleDialog) => {
      const target: DisplayUser = {
        id,
        name: userName,
      };
      updateUser(target);
      toggleDialog(false);
    },
    [userName]
  );

  const onClickCancel = useCallback((toggleDialog) => {
    toggleDialog(false);
  }, []);

  return {
    isDialogOpen,
    toggleUserDialog,
    userName,
    setUserName,
    onChangeUserName,
    onClickCancel,
    onClickUpdate,
  };
};
