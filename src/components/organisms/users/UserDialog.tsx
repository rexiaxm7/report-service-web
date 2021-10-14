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

type Props = {
  id: number;
};
export const UserDialog: VFC<Props> = memo((props) => {
  const { id } = props;
  const [open, setOpen] = useState(false); // 確認ダイアログの表示/非表示

  const updateUser = (id: number) => {
    /*更新処理*/
    console.log(id);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteRow = (id: number, e: any) => {
    // (ここで削除処理)
    setOpen(false);
  };
  //日付
  //テキストエリア
  //キャンセルボタン
  //操作ボタン
  return (
    // チーム名
    //所属ユーザー変更
    //更新ボタン
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        削除
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
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
          <OperationButton onClick={handleClose} color="inherit">
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
