import { useState } from "react";
import { useMessage } from "./useMessage";

export const useUserTable = () => {
  const { showMessage } = useMessage();
  //テーブルの行数
  const [pageSize, setPageSize] = useState(10);
  const rowsPerPageOptions = [10, 25, 50, 100];
  const editUser = (id: number) => {};
  const deleteUser = (id: number) => {};
  const onClickEditButton = (id: number) => {
    editUser(id);
  };
  //削除ボタンのクリック
  const onClickDeleteButton = (id: number) => {
    deleteUser(id);
  };
  return {
    pageSize,
    setPageSize,
    rowsPerPageOptions,
    onClickEditButton,
    onClickDeleteButton,
  };
};
