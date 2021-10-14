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
};
export const UserTableOperationButton: VFC<Props> = memo((props) => {
  const { user, onClickEditButton, onClickDeleteButton, toggleUserDialog } =
    props;
  return (
    <div>
      <IconButton color={"success"}>
        <EditIcon
          onClick={() =>
            onClickEditButton({
              user,
              onOpen: () => toggleUserDialog(true),
            })
          }
        />
      </IconButton>
      <IconButton color={"error"}>
        <DeleteIcon
          onClick={() =>
            onClickDeleteButton({
              user,
              onOpen: () => toggleUserDialog(true),
            })
          }
        />
      </IconButton>
    </div>
  );
});
