import React, { memo, VFC } from "react";
import { TeamTableHeader } from "./TeamTableHeader";
import { DataGrid } from "@mui/x-data-grid";
import dataGridJaJP from "../users/dataGridJaJP";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

type Props = {};
export const TeamTable: VFC<Props> = memo((props) => {
  //現在ページ
  //テーブルの行数
  //編集ボタンのクリック
  //削除ボタンのクリック

  const localizationJapanese = dataGridJaJP;
  const headers = [
    { field: "id", headerName: "ID", disableClickEventBubbling: true },
    {
      field: "teamName",
      headerName: "チーム名",
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
    { id: 1, teamName: "TeamName1" },
    { id: 2, teamName: "TeamName2" },
    { id: 3, teamName: "TeamName3" },
    { id: 4, teamName: "TeamName4" },
    { id: 5, teamName: "TeamName5" },
    { id: 6, teamName: "TeamName6" },
    { id: 7, teamName: "TeamName7" },
    { id: 8, teamName: "TeamName8" },
    { id: 9, teamName: "TeamName9" },
    { id: 10, teamName: "TeamName10" },
    { id: 11, teamName: "TeamName11" },
  ];
  return (
    <>
      <TeamTableHeader></TeamTableHeader>
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
