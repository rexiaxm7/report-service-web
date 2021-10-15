import { ChangeEvent, useCallback, useState } from "react";
import { useMessage } from "./useMessage";

export const useUserDialog = () => {
  const { showMessage } = useMessage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [userName, setUserName] = useState<string>("");
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const toggleUserDialog = useCallback((status = false) => {
    console.log(`toggleUserDialog:${status}`);
    setIsDialogOpen(status);
  }, []);

  const updateUser = useCallback(
    (id, toggleDialog) => {
      /*更新処理*/
      console.log("更新処理が完了しました");
      console.log(id);
      console.log(userName);
      toggleDialog(false);
      // initializeForm();
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
    updateUser,
  };
};
