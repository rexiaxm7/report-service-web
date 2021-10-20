import { ChangeEvent, useCallback, useContext, useMemo, useState } from "react";
import { useUser } from "../api/useUser";
import { RegisterUser, UpdateUser } from "../../types/User";
import { UserModalContext } from "../../providers/UserModalProvider";
import { SelectedUserContext } from "../../providers/SelectedUserProvider";
import { useTeams } from "../api/useTeams";
import { SelectChangeEvent } from "@mui/material";

export const useUserDialog = () => {
  const useSelectedUserContext = () => useContext(SelectedUserContext);
  const { setSelectedUser, selectedUser } = useSelectedUserContext();
  const { updateUser, registerUser } = useUser();

  const { getTeams, teams } = useTeams();

  const useModalContext = () => useContext(UserModalContext);
  const { isUserModalOpen, setIsUserModalOpen } = useModalContext();

  const [userName, setUserName] = useState<string>("");
  const [teamId, setTeamId] = useState<number | undefined>(undefined);
  const canRegister = useMemo(() => {
    return teamId !== undefined;
  }, [teamId]);
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const onChangeTeamId = (e: SelectChangeEvent) => {
    setTeamId(Number(e.target.value));
  };

  const closeDialog = useCallback(() => {
    setSelectedUser(null);
    setIsUserModalOpen(false);
  }, [setIsUserModalOpen, setSelectedUser]);

  const onClickUpdate = useCallback(
    (id) => {
      const target: UpdateUser = {
        id,
        name: userName,
        team: {
          id: teamId!,
        },
      };
      updateUser(target);
      closeDialog();
    },
    [closeDialog, teamId, updateUser, userName]
  );

  const onClickRegister = useCallback(() => {
    const target: RegisterUser = {
      name: userName,
      team: {
        id: teamId!,
      },
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
    selectedUser,
    getTeams,
    teams,
    canRegister,
    setSelectedUser,
  };
};
