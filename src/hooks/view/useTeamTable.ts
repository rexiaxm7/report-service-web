import { useState } from "react";
import { useMessage } from "./useMessage";

export const useTeamTable = () => {
  const { showMessage } = useMessage();
  //テーブルの行数
  const [pageSize, setPageSize] = useState(10);
  const rowsPerPageOptions = [10, 25, 50, 100];

  const editTeam = (id: number) => {};
  const deleteTeam = (id: number) => {};
  //編集ボタンのクリック
  const onClickEditButton = (id: number) => {
    console.log("onClickEditButton");
    editTeam(id);
  };
  //削除ボタンのクリック
  const onClickDeleteButton = (id: number) => {
    console.log("onClickDeleteButton");
    deleteTeam(id);
  };

  const onClickActionButton = () => {};

  return {
    pageSize,
    setPageSize,
    rowsPerPageOptions,
    onClickEditButton,
    onClickDeleteButton,
  };
};
