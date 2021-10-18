import { useState } from "react";
import { useMessage } from "./useMessage";
import { useUserDialog } from "./useUserDialog";

export const useTeamTable = () => {
  //テーブルの行数
  const [pageSize, setPageSize] = useState(10);
  const rowsPerPageOptions = [10, 25, 50, 100];
  const { setIsMessageModalOpen } = useMessage();
  const { setIsUserModalOpen } = useUserDialog();

  //編集ボタンのクリック
  const onClickEditButton = (id: number) => {
    console.log("onClickEditButton");
    setIsUserModalOpen(true);
  };
  //削除ボタンのクリック
  const onClickDeleteButton = (id: number) => {
    console.log("onClickDeleteButton");
    setIsMessageModalOpen(true);
  };

  return {
    pageSize,
    setPageSize,
    rowsPerPageOptions,
    onClickEditButton,
    onClickDeleteButton,
  };
};
