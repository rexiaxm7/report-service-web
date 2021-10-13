import React, { memo, VFC } from "react";
import { UserTableHeader } from "./UserTableHeader";
import { DataGrid } from "@mui/x-data-grid";
import dataGridJaJP from "./dataGridJaJP";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

type Props = {};
export const UserTable: VFC<Props> = memo((props) => {
  //現在ページ
  //テーブルの行数
  //編集ボタンのクリック
  //削除ボタンのクリック

  const localizationJapanese = dataGridJaJP;
  const headers = [
    { field: "id", headerName: "ID", disableClickEventBubbling: true },
    {
      field: "userName",
      headerName: "ユーザー名",
      flex: 0.7,
      editable: false,
      disableClickEventBubbling: true,
    },
    {
      field: "delete",
      headerName: " ",
      sortable: false,
      editable: false,
      flex: 0.25,
      minWidth: 110,
      renderCell: (params: any) => {
        return (
          <div>
            <IconButton color={"error"}>
              <DeleteIcon />
            </IconButton>
            <IconButton color={"success"}>
              <EditIcon />
            </IconButton>
          </div>
        );
      },
      disableClickEventBubbling: true,
    },
  ];
  const datas = [
    { id: 1, userName: "UserName1" },
    { id: 2, userName: "UserName2" },
    { id: 3, userName: "UserName3" },
    { id: 4, userName: "UserName4" },
    { id: 5, userName: "UserName5" },
    { id: 6, userName: "UserName6" },
    { id: 7, userName: "UserName7" },
    { id: 8, userName: "UserName8" },
    { id: 9, userName: "UserName9" },
    { id: 10, userName: "UserName10" },
    { id: 11, userName: "UserName11" },
  ];
  return (
    <>
      <UserTableHeader></UserTableHeader>
      <DataGrid
        disableColumnMenu
        autoHeight
        localeText={localizationJapanese}
        rows={datas}
        columns={headers}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
      {/*// モーダル*/}
    </>
  );
});
