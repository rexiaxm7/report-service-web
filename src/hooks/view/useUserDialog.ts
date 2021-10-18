import { ChangeEvent, useCallback, useContext, useState } from "react";
import { useUser } from "../api/useUser";
import { DisplayUser, RegisterUser } from "../../types/User";
import { UserModalContext } from "../../providers/UserModalProvider";
import { SelectedUserContext } from "../../providers/SelectedUserProvider";

export const useUserDialog = () => {
  const useSelectedUserContext = () => useContext(SelectedUserContext);
  const { setSelectedUser } = useSelectedUserContext();
  const { updateUser, registerUser } = useUser();

  const useModalContext = () => useContext(UserModalContext);
  const { isUserModalOpen, setIsUserModalOpen } = useModalContext();

  const [userName, setUserName] = useState<string>("");
  const [teamId, setTeamId] = useState<number>(0);
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const onChangeTeamId = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamId(Number(e.target.value));
  };

  const closeDialog = useCallback(() => {
    setIsUserModalOpen(false);
    setSelectedUser(null);
  }, [setIsUserModalOpen, setSelectedUser]);

  const onClickUpdate = useCallback(
    (id) => {
      const target: DisplayUser = {
        id,
        name: userName,
        team_id: teamId,
      };
      updateUser(target);
      closeDialog();
    },
    [closeDialog, teamId, updateUser, userName]
  );

  const onClickRegister = useCallback(() => {
    const target: RegisterUser = {
      name: userName,
      team_id: teamId,
    };
    registerUser(target);
    closeDialog();
  }, [closeDialog, registerUser, teamId, userName]);

  const onClickCancel = useCallback(() => {
    closeDialog();
  }, [closeDialog]);

  return {
    userName,
    setUserName,
    onChangeUserName,
    teamId,
    setTeamId,
    onChangeTeamId,
    onClickCancel,
    onClickUpdate,
    onClickRegister,
    isUserModalOpen,
    setIsUserModalOpen,
  };
};
