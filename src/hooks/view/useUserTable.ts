import { useCallback, useContext, useState } from "react";
import { DisplayUser } from "../../types/User";
import { useUser } from "../api/useUser";
import { useUserDialog } from "./useUserDialog";
import { useOperationDialog } from "./useOperationDialog";
import { SelectedUserContext } from "../../providers/SelectedUserProvider";
import { useUsers } from "../api/useUsers";
import { useMessage } from "./useMessage";
import dataGridJaJP from "../../components/organisms/users/dataGridJaJP";
import { MessageContext } from "../../providers/MessageProvider";

export type OnClickButtonProps = {
  selectedUser: DisplayUser;
};

export const useUserTable = () => {
  const { users, getUsers } = useUsers();
  const { deleteUserMessage } = useMessage();
  const localizationJapanese = dataGridJaJP;

  const useMessageContext = () => useContext(MessageContext);
  const { message } = useMessageContext();

  const useSelectedUserContext = () => useContext(SelectedUserContext);
  const { selectedUser, setSelectedUser } = useSelectedUserContext();
  const { deleteUser } = useUser();
  const { setIsUserModalOpen } = useUserDialog();
  const { setIsOperationModalOpen } = useOperationDialog();
  //テーブルの行数
  const [pageSize, setPageSize] = useState(10);
  const rowsPerPageOptions = [10, 25, 50, 100];

  const onClickAddButton = useCallback(() => {
    console.log("onClickAddButton");
    setSelectedUser(null);
    setIsUserModalOpen(true);
  }, [setIsUserModalOpen, setSelectedUser]);

  const onClickEditButton = useCallback(
    (props: OnClickButtonProps) => {
      const { selectedUser } = props;
      setSelectedUser(selectedUser);
      setIsUserModalOpen(true);
    },
    [setIsUserModalOpen, setSelectedUser]
  );

  const onClickDeleteButton = useCallback(
    (props: OnClickButtonProps) => {
      const { selectedUser } = props;
      setSelectedUser(selectedUser);
      setIsOperationModalOpen(true);
    },
    [setIsOperationModalOpen, setSelectedUser]
  );

  const onClickActionButton = useCallback(
    (selectedUser: DisplayUser | null) => {
      deleteUser(selectedUser!.id);
      setIsOperationModalOpen(false);
    },
    [deleteUser, setIsOperationModalOpen]
  );

  return {
    pageSize,
    setPageSize,
    rowsPerPageOptions,
    onClickEditButton,
    onClickDeleteButton,
    onClickActionButton,
    onClickAddButton,
    users,
    getUsers,
    selectedUser,
    setIsOperationModalOpen,
    deleteUserMessage,
    localizationJapanese,
    message,
  };
};
