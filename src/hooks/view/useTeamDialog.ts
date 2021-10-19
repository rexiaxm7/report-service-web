import { ChangeEvent, useCallback, useContext, useState } from "react";
import { useTeam } from "../api/useTeam";
import { DisplayTeam, RegisterTeam } from "../../types/Team";
import { TeamModalContext } from "../../providers/TeamModalProvider";
import { SelectedTeamContext } from "../../providers/SelectedTeamProvider";

export const useTeamDialog = () => {
  const DEFAULT_ALERT_START_DAYS = 25;
  const DEFAULT_INPUT_START_DATE = 20;
  const useSelectedTeamContext = () => useContext(SelectedTeamContext);
  const { selectedTeam, setSelectedTeam } = useSelectedTeamContext();
  const { updateTeam, registerTeam } = useTeam();

  const useModalContext = () => useContext(TeamModalContext);
  const { isTeamModalOpen, setIsTeamModalOpen } = useModalContext();

  const [inputStartDate, setInputStartDate] = useState<number>(
    DEFAULT_INPUT_START_DATE
  );
  const [alertStartDays, setAlertStartDays] = useState<number>(
    DEFAULT_ALERT_START_DAYS
  );
  const [sendingMessageUrl, setSendingMessageUrl] = useState<string>("");
  const [teamName, setTeamName] = useState<string>("");
  const onChangeTeamName = (e: ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };
  const onChangeAlertStartDays = (e: ChangeEvent<HTMLInputElement>) => {
    setAlertStartDays(Number(e.target.value));
  };
  const onChangeInputStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    setInputStartDate(Number(e.target.value));
  };

  const onChangeSendingMessageUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setSendingMessageUrl(e.target.value);
  };

  const closeDialog = useCallback(() => {
    setIsTeamModalOpen(false);
    setSelectedTeam(null);
  }, [setIsTeamModalOpen, setSelectedTeam]);

  const onClickUpdate = useCallback(
    (id) => {
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
    [teamName, inputStartDate, alertStartDays, updateTeam, closeDialog]
  );

  const onClickRegister = useCallback(() => {
    const target: RegisterTeam = {
      name: teamName,
      input_start_date: inputStartDate,
      alert_start_days: alertStartDays,
      sending_message_url: sendingMessageUrl,
    };
    registerTeam(target);
    closeDialog();
  }, [alertStartDays, closeDialog, inputStartDate, registerTeam, teamName]);

  const onClickCancel = useCallback(() => {
    closeDialog();
  }, [closeDialog]);

  return {
    teamName,
    setTeamName,
    onChangeTeamName,
    onChangeAlertStartDays,
    onChangeInputStartDate,
    onChangeSendingMessageUrl,
    onClickCancel,
    onClickUpdate,
    onClickRegister,
    isTeamModalOpen,
    setIsTeamModalOpen,
    alertStartDays,
    setAlertStartDays,
    inputStartDate,
    setInputStartDate,
    sendingMessageUrl,
    setSendingMessageUrl,
    DEFAULT_INPUT_START_DATE,
    DEFAULT_ALERT_START_DAYS,
    selectedTeam,
  };
};
