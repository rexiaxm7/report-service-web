import { memo, useEffect, VFC } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { OperationButton } from "../../atoms/buttons/OperationButton";
import { useUserDialog } from "../../../hooks/view/useUserDialog";

type Props = {};

export const UserDialog: VFC<Props> = memo((props) => {
  const {
    userName,
    setUserName,
    setTeamId,
    teamId,
    onChangeUserName,
    onChangeTeamId,
    onClickCancel,
    onClickUpdate,
    onClickRegister,
    selectedUser,
    setSelectedUser,
    isUserModalOpen,
    setIsUserModalOpen,
    getTeams,
    teams,
    canRegister,
  } = useUserDialog();

  useEffect(() => {
    setUserName(selectedUser?.name ?? "");
    setTeamId(selectedUser?.team?.id ?? undefined);
    getTeams();
  }, [isUserModalOpen]);

  return (
    <>
      <Dialog
        open={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"編集"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                {selectedUser && (
                  <Grid item xs={12}>
                    <InputLabel htmlFor={"userId"}>ユーザーID</InputLabel>
                    <Input
                      id={"userId"}
                      value={selectedUser?.id}
                      readOnly
                      disableUnderline
                      fullWidth
                    />
                  </Grid>
                )}

                <Grid item xs={12}>
                  <InputLabel htmlFor={"userName"}>ユーザー名</InputLabel>
                  <Input
                    id={"userName"}
                    value={userName}
                    fullWidth
                    onChange={onChangeUserName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor={"team"}>チーム</InputLabel>
                  <Select
                    id={"team"}
                    value={`${teamId}`}
                    fullWidth
                    onChange={onChangeTeamId}
                  >
                    <MenuItem value={undefined} disabled>
                      選択してください
                    </MenuItem>
                    {teams.map((team) => (
                      <MenuItem value={team.id}>{team.name}</MenuItem>
                    ))}
                  </Select>
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
              selectedUser ? onClickUpdate(selectedUser?.id) : onClickRegister()
            }
            color="primary"
            disabled={!canRegister}
          >
            {selectedUser ? "更新" : "登録"}
          </OperationButton>
        </DialogActions>
      </Dialog>
    </>
  );
});
