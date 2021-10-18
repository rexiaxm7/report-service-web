import { useCallback, useState } from "react";
import { useMessage } from "./useMessage";
import { DisplayUser } from "../../types/User";
import { useUser } from "../api/useUser";
import { useUserDialog } from "./useUserDialog";
import { useOperationDialog } from "./useOperationDialog";

export type OnClickButtonProps = {
  user: DisplayUser;
};

export const useUserTable = () => {
  const { showMessage } = useMessage();
  const { deleteUser } = useUser();
  const { setIsUserModalOpen } = useUserDialog();
  const { setIsOperationModalOpen } = useOperationDialog();

  //ユーザー選択
  const [selectedUser, setSelectedUser] = useState<DisplayUser | null>(null);

  //テーブルの行数
  const [pageSize, setPageSize] = useState(10);
  const rowsPerPageOptions = [10, 25, 50, 100];

  //テーブルのボタン操作
  const onClickEditButton = useCallback(
    (props: OnClickButtonProps) => {
      console.log("onClickEditButton");
      const { user } = props;
      console.log(props);
      setSelectedUser(user);
      setIsUserModalOpen(true);
    },
    [setIsUserModalOpen]
  );

  const onClickAddButton = useCallback(() => {
    console.log("onClickAddButton");

    setSelectedUser(null);
    setIsUserModalOpen(true);
  }, [setIsUserModalOpen]);

  const onClickDeleteButton = useCallback(
    (props: OnClickButtonProps) => {
      const { user } = props;
      setSelectedUser(user);
      setIsOperationModalOpen(true);
    },
    [setIsOperationModalOpen]
  );

  const onClickActionButton = useCallback(
    (selectedUser: DisplayUser | null) => deleteUser(selectedUser!.id),
    [deleteUser]
  );

  return {
    pageSize,
    setPageSize,
    rowsPerPageOptions,
    onClickEditButton,
    onClickDeleteButton,
    setSelectedUser,
    selectedUser,
    onClickActionButton,
    onClickAddButton,
  };
};
