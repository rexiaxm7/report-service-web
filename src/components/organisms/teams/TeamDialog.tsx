import { memo, useContext, useEffect, VFC } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Input,
  InputLabel,
} from "@mui/material";
import { OperationButton } from "../../atoms/buttons/OperationButton";
import { useTeamDialog } from "../../../hooks/view/useTeamDialog";

type Props = {};

export const TeamDialog: VFC<Props> = memo((props) => {
  const {
    selectedTeam,
    teamName,
    setTeamName,
    setInputStartDate,
    setAlertStartDays,
    alertStartDays,
    inputStartDate,
    isTeamModalOpen,
    setIsTeamModalOpen,
    onChangeTeamName,
    onChangeAlertStartDays,
    onChangeInputStartDate,
    onChangeSendingMessageUrl,
    setSendingMessageUrl,
    sendingMessageUrl,
    onClickCancel,
    onClickUpdate,
    onClickRegister,
    DEFAULT_ALERT_START_DAYS,
    DEFAULT_INPUT_START_DATE,
  } = useTeamDialog();

  useEffect(() => {
    setTeamName(selectedTeam?.name ?? "");
    setInputStartDate(
      selectedTeam?.input_start_date ?? DEFAULT_INPUT_START_DATE
    );
    setAlertStartDays(
      selectedTeam?.alert_start_days ?? DEFAULT_ALERT_START_DAYS
    );

    setSendingMessageUrl(selectedTeam?.sending_message_url ?? "");
  }, [isTeamModalOpen]);

  return (
    <>
      <Dialog
        open={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"編集"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                {selectedTeam && (
                  <Grid item xs={12}>
                    <InputLabel htmlFor={"teamId"}>チームID</InputLabel>
                    <Input
                      id={"teamId"}
                      value={selectedTeam?.id}
                      readOnly
                      disableUnderline
                      fullWidth
                    />
                  </Grid>
                )}

                <Grid item xs={12}>
                  <InputLabel htmlFor={"teamName"}>チーム名</InputLabel>
                  <Input
                    id={"teamName"}
                    value={teamName}
                    fullWidth
                    onChange={onChangeTeamName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor={"inputStartDate"}>
                    月報入力開始日
                  </InputLabel>
                  <Input
                    type={"number"}
                    id={"inputStartDate"}
                    value={inputStartDate}
                    fullWidth
                    onChange={onChangeInputStartDate}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor={"alertStartDays"}>
                    月報入力警告日
                  </InputLabel>
                  <Input
                    type={"number"}
                    id={"alertStartDays"}
                    value={alertStartDays}
                    fullWidth
                    onChange={onChangeAlertStartDays}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor={"sendingMessageUrl"}>
                    送信先URL
                  </InputLabel>
                  <Input
                    type={"url"}
                    id={"sendingMessageUrl"}
                    value={sendingMessageUrl}
                    fullWidth
                    onChange={onChangeSendingMessageUrl}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <OperationButton onClick={() => onClickCancel()} color="inherit">
            キャンセル
          </OperationButton>
          <OperationButton
            onClick={() =>
              selectedTeam ? onClickUpdate(selectedTeam?.id) : onClickRegister()
            }
            color="primary"
          >
            {selectedTeam ? "更新" : "登録"}
          </OperationButton>
        </DialogActions>
      </Dialog>
    </>
  );
});
