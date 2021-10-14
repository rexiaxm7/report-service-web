import { memo, useState, VFC } from "react";
import {
  Button,
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

type Props = {
  toggleUserDialog: (isOpen?: boolean) => void;
  user: DisplayUser | null;
  isDialogOpen: boolean;
};
export const UserDialog: VFC<Props> = memo((props) => {
  const { user, isDialogOpen, toggleUserDialog } = props;
  const updateUser = (id: number) => {
    /*更新処理*/
    console.log(id);
  };
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
                  <InputLabel htmlFor={"userName"}>ユーザー名</InputLabel>
                  <Input
                    id={"userName"}
                    value={"苗字 名前"}
                    disableUnderline={true}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <OperationButton
            onClick={() => toggleUserDialog(false)}
            color="inherit"
          >
            キャンセル
          </OperationButton>
          <OperationButton onClick={() => updateUser(1)} color="primary">
            更新
          </OperationButton>
        </DialogActions>
      </Dialog>
    </div>
  );
});
