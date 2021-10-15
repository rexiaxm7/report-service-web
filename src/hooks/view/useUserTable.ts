import { useCallback, useContext, useState } from "react";
import { useMessage } from "./useMessage";
import { DisplayUser } from "../../types/User";
import { useUser } from "../api/useUser";
import { useUserDialog } from "./useUserDialog";
import { MessageModalContext } from "../../providers/MessageModalProvider";

export type OnClickButtonProps = {
  user: DisplayUser;
};

export const useUserTable = () => {
  const { showMessage } = useMessage();
  const { deleteUser } = useUser();
  const { setIsUserModalOpen } = useUserDialog();
  const { setIsMessageModalOpen, isMessageModalOpen } = useMessage();

  //ユーザー選択
  const [selectedUser, setSelectedUser] = useState<DisplayUser | null>(null);

  //テーブルの行数
  const [pageSize, setPageSize] = useState(10);
  const rowsPerPageOptions = [10, 25, 50, 100];

  //テーブルのボタン操作
  const onClickEditButton = useCallback((props: OnClickButtonProps) => {
    console.log("onClickEditButton");
    const { user } = props;
    console.log(props);
    setSelectedUser(user);
    setIsUserModalOpen(true);
  }, []);

  const onClickAddButton = useCallback(() => {
    console.log("onClickAddButton");
    setSelectedUser(null);
    setIsUserModalOpen(true);
  }, []);

  const onClickDeleteButton = useCallback((props: OnClickButtonProps) => {
    console.log("onClickDeleteButton");
    const { user } = props;
    setSelectedUser(user);
    setIsMessageModalOpen(true);
  }, []);

  const onClickActionButton = useCallback(
    (selectedUser: DisplayUser | null) => deleteUser(selectedUser!.id),
    []
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
