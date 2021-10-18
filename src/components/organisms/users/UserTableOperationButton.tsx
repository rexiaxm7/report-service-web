import React, { memo, VFC } from "react";
import { DisplayUser } from "../../../types/User";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type onClickButtonProps = {
  selectedUser: DisplayUser;
};
type Props = {
  selectedUser: DisplayUser;
  onClickEditButton: (buttonProps: onClickButtonProps) => void;
  onClickDeleteButton: (buttonProps: onClickButtonProps) => void;
};

export const UserTableOperationButton: VFC<Props> = memo((props) => {
  const { selectedUser, onClickEditButton, onClickDeleteButton } = props;
  return (
    <>
      <div>
        <IconButton
          color={"success"}
          onClick={() => onClickEditButton({ selectedUser })}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color={"error"}
          onClick={() => onClickDeleteButton({ selectedUser })}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </>
  );
});
