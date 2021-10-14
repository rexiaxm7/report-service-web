import { useCallback, useState } from "react";
import { useMessage } from "./useMessage";
import { DisplayUser } from "../types/User";

export type OnClickButtonProps = {
  user: DisplayUser;
  onOpen: () => void;
};
export const useUserTable = () => {
  const { showMessage } = useMessage();

  //テーブルの行数
  const [pageSize, setPageSize] = useState(10);
  const rowsPerPageOptions = [10, 25, 50, 100];

  //テーブルのボタン操作
  const onClickEditButton = useCallback((props: OnClickButtonProps) => {
    console.log("onClickEditButton");
    const { user, onOpen } = props;
    console.log(props);
    setSelectedUser(user);
    onOpen();
  }, []);
  const onClickDeleteButton = useCallback((props: OnClickButtonProps) => {
    console.log("onClickDeleteButton");
    const { user, onOpen } = props;
    setSelectedUser(user);
    onOpen();
  }, []);

  //ユーザー選択
  const [selectedUser, setSelectedUser] = useState<DisplayUser | null>(null);

  return {
    pageSize,
    setPageSize,
    rowsPerPageOptions,
    onClickEditButton,
    onClickDeleteButton,
    setSelectedUser,
    selectedUser,
  };
};
