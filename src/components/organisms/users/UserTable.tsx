import React, { memo, useEffect, VFC } from "react";
import { UserTableHeader } from "./UserTableHeader";
import { DataGrid } from "@mui/x-data-grid";
import dataGridJaJP from "./dataGridJaJP";
import { useUsers } from "../../../hooks/useUsers";
import { useUserTable } from "../../../hooks/useUserTable";
import { useUserDialog } from "../../../hooks/useUserDialog";
import { UserDialog } from "./UserDialog";
import { DisplayUser } from "../../../types/User";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserTableOperationButton } from "./UserTableOperationButton";

type Props = {};
export const UserTable: VFC<Props> = memo((props) => {
  const { users, getUsers, setUsers } = useUsers();
  const {
    rowsPerPageOptions,
    setPageSize,
    pageSize,
    onClickDeleteButton,
    onClickEditButton,
    selectedUser,
  } = useUserTable();
  const localizationJapanese = dataGridJaJP;
  const { toggleUserDialog, isDialogOpen } = useUserDialog();

  //TODO:rendercellをどうにかしてhooksに持っていきたい
  const headers: any = [
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
      flex: 0.1,
      minWidth: 110,
      renderCell: (user: DisplayUser) => (
        <UserTableOperationButton
          user={user}
          toggleUserDialog={toggleUserDialog}
          onClickDeleteButton={onClickDeleteButton}
          onClickEditButton={onClickEditButton}
        />
      ),
      disableClickEventBubbling: true,
    },
  ];

  useEffect(() => {
    console.log("setUsers");
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
      <UserDialog
        toggleUserDialog={() => toggleUserDialog()}
        isDialogOpen={isDialogOpen}
        user={selectedUser}
      />
    </>
  );
});
