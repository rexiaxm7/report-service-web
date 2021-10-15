import { memo, ReactNode, VFC } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { OperationButton } from "../atoms/buttons/OperationButton";
import { useOperationDialog } from "../../hooks/view/useOperationDialog";

type Props = {
  onClickAction: () => void;
  onClickCancel: () => void;
  actionButtonColor?: string;
  actionButtonName?: string;
  cancelButtonColor?: string;
  cancelButtonName?: string;
  message?: string | ReactNode;
  title?: string;
};
export const OperationDialog: VFC<Props> = memo((props) => {
  const { isOperationModalOpen, setIsOperationModalOpen } =
    useOperationDialog();
  const {
    title,
    onClickAction,
    onClickCancel,
    cancelButtonColor = "inherit",
    actionButtonColor = "primary",
    message,
    cancelButtonName = "キャンセル",
    actionButtonName = "OK",
  } = props;
  return (
    <Dialog
      open={isOperationModalOpen}
      onClose={() => setIsOperationModalOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
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
