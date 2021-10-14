import { memo, ReactNode, VFC } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { OperationButton } from "../atoms/buttons/OperationButton";

type Props = {
  onClickAction: () => void;
  onClickCancel: () => void;
  isDialogOpen: boolean;
  toggleConfirmDialog: (isOpen?: boolean) => void;
  cancelButtonColor?: string;
  actionButtonColor?: string;
  message?: string | ReactNode;
  cancelButtonName?: string;
  actionButtonName?: string;
};
export const ConfirmDialog: VFC<Props> = memo((props) => {
  const {
    onClickAction,
    onClickCancel,
    cancelButtonColor = "inherit",
    actionButtonColor = "primary",
    isDialogOpen,
    toggleConfirmDialog,
    message,
    cancelButtonName = "キャンセル",
    actionButtonName = "OK",
  } = props;
  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => toggleConfirmDialog(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"確認"}</DialogTitle>
      <DialogContent>{message}</DialogContent>
      <DialogActions>
        <OperationButton onClick={onClickCancel} color={cancelButtonColor}>
          {cancelButtonName}
        </OperationButton>
        <OperationButton onClick={onClickAction} color={actionButtonColor}>
          {actionButtonName}
        </OperationButton>
      </DialogActions>
    </Dialog>
  );
});
