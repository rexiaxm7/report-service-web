import { memo, useEffect, VFC } from "react";
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
import { DisplayUser } from "../../../types/User";
import { useUserDialog } from "../../../hooks/view/useUserDialog";
import { useUserTable } from "../../../hooks/view/useUserTable";

type Props = {
  user: DisplayUser | null;
};

export const UserDialog: VFC<Props> = memo((props) => {
  const { user } = props;
  const { isUserModalOpen, setIsUserModalOpen } = useUserDialog();
  const { setSelectedUser } = useUserTable();

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
  } = useUserDialog();
  const { selectedUser } = useUserTable();

  useEffect(() => {
    setUserName(user?.name ?? "");
    setTeamId(user?.team_id ?? 0);
  }, [user]);

  useEffect(() => {
    setSelectedUser(null);
  }, [isUserModalOpen]);

  return (
    // チーム名
    //所属ユーザー変更
    //更新ボタン
    <div>
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
                      value={user?.id}
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
                  <InputLabel htmlFor={"teamId"}>チームID</InputLabel>
                  <Input
                    type={"number"}
                    id={"teamId"}
                    value={teamId}
                    fullWidth
                    onChange={onChangeTeamId}
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
              selectedUser ? onClickUpdate(user?.id) : onClickRegister()
            }
            color="primary"
          >
            {selectedUser ? "更新" : "登録"}
          </OperationButton>
        </DialogActions>
      </Dialog>
    </div>
  );
});
