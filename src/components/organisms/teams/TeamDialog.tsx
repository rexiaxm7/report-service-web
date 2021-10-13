import { memo, useState, VFC } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

type Props = {
  id: number;
};
export const TeamDialog: VFC<Props> = memo((props) => {
  const { id } = props;
  const [open, setOpen] = useState(false); // 確認ダイアログの表示/非表示

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
          <DialogContentText id="alert-dialog-description">
            ID「{id}」を本当に削除しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="primary"
            autoFocus
          >
            やめる
          </Button>
          <Button onClick={(e) => deleteRow(id, e)} color="primary">
            削除する
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
