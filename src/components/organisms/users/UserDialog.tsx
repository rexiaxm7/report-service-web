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

type Props = {
  toggleUserDialog: (isOpen?: boolean) => void;
  user: DisplayUser | null;
  isDialogOpen: boolean;
};

export const UserDialog: VFC<Props> = memo((props) => {
  const { user, isDialogOpen, toggleUserDialog } = props;

  const {
    userName,
    setUserName,
    onChangeUserName,
    onClickCancel,
    onClickUpdate,
  } = useUserDialog();

  useEffect(() => {
    setUserName(user?.name ?? "");
  }, [user, toggleUserDialog]);

  return (
    // チーム名
    //所属ユーザー変更
    //更新ボタン
    <div>
      <Dialog
        open={isDialogOpen}
        onClose={() => toggleUserDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"確認"}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={3}>
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
                <Grid item xs={12}>
                  <InputLabel htmlFor={"userName"}>ユーザー名</InputLabel>
                  <Input
                    id={"userName"}
                    value={userName}
                    fullWidth
                    onChange={onChangeUserName}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <OperationButton
            onClick={() => onClickCancel(toggleUserDialog)}
            color="inherit"
          >
            キャンセル
          </OperationButton>
          <OperationButton
            onClick={() => onClickUpdate(user?.id, toggleUserDialog)}
            color="primary"
          >
            更新
          </OperationButton>
        </DialogActions>
      </Dialog>
    </div>
  );
});
