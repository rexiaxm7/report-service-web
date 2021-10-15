import { ChangeEvent, useCallback, useContext, useState } from "react";
import { useMessage } from "./useMessage";
import { useUser } from "../api/useUser";
import { DisplayUser, RegisterUser } from "../../types/User";
import { UserModalContext } from "../../providers/UserModalProvider";

export const useUserDialog = () => {
  const { showMessage } = useMessage();
  const { updateUser, registerUser } = useUser();

  const useModalContext = () => useContext(UserModalContext);
  const { isUserModalOpen, setIsUserModalOpen } = useModalContext();

  const [userName, setUserName] = useState<string>("");
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const [isEdit, setIsEdit] = useState<Boolean>(true);
  const onClickEditOrUpdate = (id?: number) => {
    isEdit ? onClickUpdate(id) : onClickRegister();
  };

  const onClickUpdate = useCallback(
    (id) => {
      const target: DisplayUser = {
        id,
        name: userName,
      };
      updateUser(target);
      setIsUserModalOpen(false);
    },
    [userName]
  );

  const onClickRegister = useCallback(() => {
    const target: RegisterUser = {
      name: userName,
    };
    registerUser(target);
    setIsUserModalOpen(false);
  }, [userName]);

  const onClickCancel = useCallback(() => {
    setIsUserModalOpen(false);
  }, []);

  return {
    userName,
    setUserName,
    onChangeUserName,
    onClickCancel,
    onClickUpdate,
    onClickEditOrUpdate,
    setIsEdit,
    isUserModalOpen,
    setIsUserModalOpen,
  };
};
