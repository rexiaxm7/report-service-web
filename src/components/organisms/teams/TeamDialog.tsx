import { memo, useEffect, VFC } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Stack,
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
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {selectedTeam ? "編集" : "追加"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} mt={2} width={"100%"}>
            {selectedTeam && (
              <FormControl>
                <InputLabel htmlFor={"teamId"}>チームID</InputLabel>
                <Input
                  id={"teamId"}
                  value={selectedTeam?.id}
                  readOnly
                  disableUnderline
                  fullWidth
                />
              </FormControl>
            )}
            <FormControl>
              <Grid container alignItems={"center"}>
                <Grid item xs={9}>
                  <TextField
                    label={"チーム名"}
                    required
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
            </FormControl>
            <FormControl>
              <TextField
                type={"number"}
                label={"月報入力開始日"}
                required
                error={Boolean(errors.inputStartDate)}
                helperText={errors.inputStartDate?.message}
                {...register("inputStartDate")}
                fullWidth
              />
            </FormControl>
            <FormControl>
              <TextField
                label={"月報入力警告日"}
                required
                type={"number"}
                error={Boolean(errors.alertStartDays)}
                helperText={errors.alertStartDays?.message}
                {...register("alertStartDays")}
                fullWidth
              />
            </FormControl>
            <FormControl>
              <TextField
                label={"送信先URL"}
                type={"url"}
                error={Boolean(errors.sendingMessageUrl)}
                helperText={errors.sendingMessageUrl?.message}
                {...register("sendingMessageUrl")}
                fullWidth
              />
            </FormControl>
          </Stack>
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
