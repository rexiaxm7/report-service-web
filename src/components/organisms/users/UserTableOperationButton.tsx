import React, { memo, VFC } from "react";
import { DisplayUser } from "../../../types/User";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type onClickButtonProps = {
  user: DisplayUser;
  onOpen: () => void;
};
type Props = {
  user: DisplayUser;
  onClickEditButton: (buttonProps: onClickButtonProps) => void;
  onClickDeleteButton: (buttonProps: onClickButtonProps) => void;
  toggleUserDialog: (isOpen?: boolean) => void;
  toggleOperationDialog: (isOpen?: boolean) => void;
};
export const UserTableOperationButton: VFC<Props> = memo((props) => {
  const {
    user,
    onClickEditButton,
    onClickDeleteButton,
    toggleUserDialog,
    toggleOperationDialog,
  } = props;
  return (
    <div>
      <IconButton
        color={"success"}
        onClick={() =>
          onClickEditButton({
            user,
            onOpen: () => toggleUserDialog(true),
          })
        }
      >
        <EditIcon />
      </IconButton>
      <IconButton
        color={"error"}
        onClick={() =>
          onClickDeleteButton({
            user,
            onOpen: () => toggleOperationDialog(true),
          })
        }
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
});
