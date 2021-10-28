import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTeam } from "../api/useTeam";
import { DisplayTeam, RegisterTeam } from "../../types/Team";
import { TeamModalContext } from "../../providers/TeamModalProvider";
import { SelectedTeamContext } from "../../providers/SelectedTeamProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useValidationDomain } from "./useValidationDomain";
import { UpdateUser } from "../../types/User";

export const useTeamDialog = () => {
  const {
    teamNameDomain,
    inputStartDateDomain,
    alertStartDaysDomain,
    sendingMessageUrlDomain,
  } = useValidationDomain();
  const DEFAULT_ALERT_START_DAYS = 25;
  const DEFAULT_INPUT_START_DATE = 20;
  const useSelectedTeamContext = () => useContext(SelectedTeamContext);
  const { selectedTeam, setSelectedTeam } = useSelectedTeamContext();
  const { updateTeam, registerTeam } = useTeam();

  const useModalContext = () => useContext(TeamModalContext);
  const { isTeamModalOpen, setIsTeamModalOpen } = useModalContext();

  const closeDialog = useCallback(() => {
    setIsTeamModalOpen(false);
    setSelectedTeam(null);
  }, [setIsTeamModalOpen, setSelectedTeam]);

  const onClickUpdate = useCallback(
    (id, data) => {
      const { teamName, inputStartDate, alertStartDays, sendingMessageUrl } =
        data;
      const target: DisplayTeam = {
        id,
        name: teamName,
        input_start_date: inputStartDate,
        alert_start_days: alertStartDays,
        sending_message_url: sendingMessageUrl,
      };
      updateTeam(target);
      closeDialog();
    },
    [updateTeam]
  );

  const onClickRegister = useCallback(
    (data) => {
      const { teamName, inputStartDate, alertStartDays, sendingMessageUrl } =
        data;
      const target: RegisterTeam = {
        name: teamName,
        input_start_date: inputStartDate,
        alert_start_days: alertStartDays,
        sending_message_url: sendingMessageUrl,
      };
      registerTeam(target);
      closeDialog();
    },
    [registerTeam]
  );

  const onClickCancel = useCallback(() => {
    closeDialog();
  }, [closeDialog]);

  interface TeamFormInput {
    teamName: number;
    inputStartDate: number;
    alertStartDays: number;
    sendingMessageUrl: number;
  }
  const isUpdate = useMemo(() => {
    return !!selectedTeam;
  }, [selectedTeam]);
  const commonSchema = {
    teamName: teamNameDomain,
    inputStartDate: inputStartDateDomain,
    alertStartDays: alertStartDaysDomain,
    sendingMessageUrl: sendingMessageUrlDomain,
  };
  const updateSchema = yup.object(commonSchema);
  const registerSchema = yup.object({
    ...commonSchema,
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
    clearErrors,
  } = useForm<TeamFormInput>({
    // 追加
    resolver: yupResolver(isUpdate ? updateSchema : registerSchema),
  });

  type FormData = {
    name: any;
    defaultValue: any;
    value?: any;
  };
  const formData: Array<FormData> = [
    {
      name: "teamName",
      defaultValue: "",
      value: selectedTeam?.name,
    },
    {
      name: "inputStartDate",
      defaultValue: DEFAULT_INPUT_START_DATE,
      value: selectedTeam?.input_start_date,
    },
    {
      name: "alertStartDays",
      defaultValue: DEFAULT_ALERT_START_DAYS,
      value: selectedTeam?.alert_start_days,
    },
    {
      name: "sendingMessageUrl",
      defaultValue: "",
      value: selectedTeam?.sending_message_url,
    },
  ];

  const onSubmit: SubmitHandler<TeamFormInput> = (data: any) => {
    isUpdate ? onClickUpdate(selectedTeam?.id, data) : onClickRegister(data);
  };
  const initializeForm = () => {
    for (const target of formData) {
      const { name, defaultValue } = target;
      setValue(name, defaultValue);
    }
  };
  const initializeUpdateForm = () => {
    const targets: Array<any> = formData.filter(
      (target: any) => "value" in target
    );
    for (const target of targets) {
      const { name, value } = target;
      setValue(name, value);
    }
  };
  const clearFormError = () => {
    const targets: any = formData.map((target: any) => target.id);
    for (const target of targets) {
      clearErrors(target);
    }
  };
  useEffect(() => {
    if (!isTeamModalOpen) return;
    clearFormError();
    isUpdate ? initializeUpdateForm() : initializeForm();
  }, [isTeamModalOpen]);

  return {
    selectedTeam,
    isTeamModalOpen,
    setIsTeamModalOpen,
    onClickCancel,
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
