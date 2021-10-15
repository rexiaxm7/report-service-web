import React, { memo, VFC } from "react";
import { DisplayUser } from "../../../types/User";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type onClickButtonProps = {
  user: DisplayUser;
};
type Props = {
  user: DisplayUser;
  onClickEditButton: (buttonProps: onClickButtonProps) => void;
  onClickDeleteButton: (buttonProps: onClickButtonProps) => void;
};
export const UserTableOperationButton: VFC<Props> = memo((props) => {
  const { user, onClickEditButton, onClickDeleteButton } = props;
  return (
    <div>
      <IconButton color={"success"} onClick={() => onClickEditButton({ user })}>
        <EditIcon />
      </IconButton>
      <IconButton color={"error"} onClick={() => onClickDeleteButton({ user })}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
});
