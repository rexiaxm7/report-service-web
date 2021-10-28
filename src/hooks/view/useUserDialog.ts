import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useUser } from "../api/useUser";
import { RegisterUser, UpdateUser } from "../../types/User";
import { UserModalContext } from "../../providers/UserModalProvider";
import { SelectedUserContext } from "../../providers/SelectedUserProvider";
import { useTeams } from "../api/useTeams";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useValidationDomain } from "./useValidationDomain";

export const useUserDialog = () => {
  const {
    userNameDomain,
    passwordDomain,
    emailDomain,
    teamIdDomain,
    adminDomain,
  } = useValidationDomain();
  const { getTeams, teams } = useTeams();

  const [showPassword, setShowPassword] = useState(false);
  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const useSelectedUserContext = () => useContext(SelectedUserContext);
  const { setSelectedUser, selectedUser } = useSelectedUserContext();
  const { updateUser, registerUser } = useUser();
  const useModalContext = () => useContext(UserModalContext);
  const { isUserModalOpen, setIsUserModalOpen } = useModalContext();

  const closeDialog = useCallback(() => {
    setSelectedUser(null);
    setIsUserModalOpen(false);
  }, [setIsUserModalOpen, setSelectedUser]);

  const isUpdate = useMemo(() => {
    return !!selectedUser;
  }, [selectedUser]);

  const onClickUpdate = useCallback(
    (id, data) => {
      const { userName, email, admin, teamId } = data;
      const target: UpdateUser = {
        id,
        name: userName,
        email,
        admin,
        team_id: teamId!,
      };
      updateUser(target);
      closeDialog();
    },
    [updateUser]
  );

  const onClickRegister = useCallback(
    (data) => {
      const { userName, email, admin, teamId, password } = data;
      const target: RegisterUser = {
        name: userName,
        email,
        admin,
        team_id: teamId!,
        password,
      };
      registerUser(target);
      closeDialog();
    },
    [registerUser]
  );

  const onClickCancel = useCallback(() => {
    closeDialog();
  }, [closeDialog]);

  const commonSchema = {
    teamId: teamIdDomain,
    admin: adminDomain,
    email: emailDomain,
    userName: userNameDomain,
  };
  const updateSchema = yup.object(commonSchema);
  const registerSchema = yup.object({
    ...commonSchema,
    password: passwordDomain,
  });

  interface UserFormInput {
    userName: string;
    teamId: number;
    admin: boolean;
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<UserFormInput>({
    // 追加
    resolver: yupResolver(isUpdate ? updateSchema : registerSchema),
  });

  const onSubmit: SubmitHandler<UserFormInput> = (data: any) => {
    isUpdate ? onClickUpdate(selectedUser?.id, data) : onClickRegister(data);
  };

  const setDefaultValueToForm = () => {
    setValue("userName", "");
    setValue("teamId", -1);
    setValue("admin", false);
    setValue("email", "");
    setValue("password", "");
    setShowPassword(false);
  };
  const setSelectedUserValueToForm = () => {
    setValue("userName", selectedUser!.name);
    setValue("teamId", selectedUser!.team?.id);
    setValue("admin", selectedUser!.admin);
    setValue("email", selectedUser!.email);
  };

  useEffect(() => {
    if (!isUserModalOpen) return;
    isUpdate ? setSelectedUserValueToForm() : setDefaultValueToForm();
  }, [isUserModalOpen]);

  //TODO: ダイアログを開くたびにチームを更新した方が良い？
  useEffect(() => {
    getTeams();
  }, []);

  return {
    onClickCancel,
    isUserModalOpen,
    setIsUserModalOpen,
    selectedUser,
    teams,
    onClickShowPassword,
    showPassword,
    register,
    handleSubmit,
    errors,
    control,
    onSubmit,
  };
};
