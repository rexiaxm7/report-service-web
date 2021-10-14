import React, { memo, ReactElement, useEffect, useState, VFC } from "react";
import { UserTableHeader } from "./UserTableHeader";
import { DataGrid } from "@mui/x-data-grid";
import dataGridJaJP from "./dataGridJaJP";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useUsers } from "../../../hooks/useUsers";
import { useUserTable } from "../../../hooks/useUserTable";

type Props = {};
export const UserTable: VFC<Props> = memo((props) => {
  const { users, getUsers, setUsers } = useUsers();
  const {
    onClickDeleteButton,
    onClickEditButton,
    rowsPerPageOptions,
    setPageSize,
    pageSize,
  } = useUserTable();
  const localizationJapanese = dataGridJaJP;

  //TODO:rendercellをどうにかしてhooksに持っていきたい
  const headers = [
    { field: "id", headerName: "ID", disableClickEventBubbling: true },
    {
      field: "name",
      headerName: "ユーザー名",
      flex: 0.7,
      editable: false,
      disableClickEventBubbling: true,
    },
    {
      field: "operation",
      headerName: " ",
      sortable: false,
      editable: false,
      flex: 0.25,
      minWidth: 110,
      renderCell: (params: any): ReactElement => {
        return (
          <div>
            <IconButton color={"success"}>
              <EditIcon onClick={() => onClickEditButton(params.id)} />
            </IconButton>
            <IconButton color={"error"}>
              <DeleteIcon onClick={() => onClickDeleteButton(params.id)} />
            </IconButton>
          </div>
        );
      },
      disableClickEventBubbling: true,
    },
  ];

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  return (
    <>
      <UserTableHeader />
      <DataGrid
        disableColumnMenu
        autoHeight
        localeText={localizationJapanese}
        rows={users}
        columns={headers}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        disableSelectionOnClick
      />
      {/*// モーダル*/}
    </>
  );
});
