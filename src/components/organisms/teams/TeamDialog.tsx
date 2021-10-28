import { memo, useEffect, VFC } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { OperationButton } from "../../atoms/buttons/OperationButton";
import { useTeamDialog } from "../../../hooks/view/useTeamDialog";

type Props = {};

export const TeamDialog: VFC<Props> = memo((props) => {
  const {
    selectedTeam,
    isTeamModalOpen,
    setIsTeamModalOpen,
    onClickCancel,
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = useTeamDialog();

  return (
    <>
      <Dialog
        open={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {selectedTeam ? "編集" : "追加"}
        </DialogTitle>
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
                  <Grid container alignItems={"center"}>
                    <Grid item xs={9}>
                      <TextField
                        label={"チーム名"}
                        error={Boolean(errors.teamName)}
                        helperText={errors.teamName?.message}
                        {...register("teamName")}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={3} pl={2}>
                      <Box>
                        <span>チーム</span>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type={"number"}
                    label={"月報入力開始日"}
                    error={Boolean(errors.inputStartDate)}
                    helperText={errors.inputStartDate?.message}
                    {...register("inputStartDate")}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"月報入力警告日"}
                    type={"number"}
                    error={Boolean(errors.alertStartDays)}
                    helperText={errors.alertStartDays?.message}
                    {...register("alertStartDays")}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"送信先URL"}
                    type={"url"}
                    error={Boolean(errors.sendingMessageUrl)}
                    helperText={errors.sendingMessageUrl?.message}
                    {...register("sendingMessageUrl")}
                    fullWidth
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
          <OperationButton onClick={handleSubmit(onSubmit)} color="primary">
            {selectedTeam ? "更新" : "登録"}
          </OperationButton>
        </DialogActions>
      </Dialog>
    </>
  );
});
