import React, { memo, useEffect, VFC } from "react";
import { UserTableHeader } from "./UserTableHeader";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import dataGridJaJP from "./dataGridJaJP";
import { useUsers } from "../../../hooks/useUsers";
import { useUserTable } from "../../../hooks/useUserTable";
import { useUserDialog } from "../../../hooks/useUserDialog";
import { UserDialog } from "./UserDialog";
import { UserTableOperationButton } from "./UserTableOperationButton";
import { OperationDialog } from "../../molecules/OperationDialog";
import { useOperationDialog } from "../../../hooks/useOperationDialog";
import { useMessage } from "../../../hooks/useMessage";
import { DisplayUser } from "../../../types/User";

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
  const { toggleOperationDialog, isOperationDialogOpen } = useOperationDialog();
  const { deleteUserMessage } = useMessage();

  const userDelete = (selectedUser: DisplayUser | null) => {
    //削除処理
  };

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
      renderCell: (param: any) => (
        <UserTableOperationButton
          user={param.row}
          toggleUserDialog={toggleUserDialog}
          toggleOperationDialog={toggleOperationDialog}
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
        components={{
          Toolbar: GridToolbar,
        }}
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
      <OperationDialog
        toggleOperationDialog={() => toggleOperationDialog()}
        isDialogOpen={isOperationDialogOpen}
        onClickCancel={() => toggleOperationDialog(false)}
        onClickAction={() => userDelete(selectedUser)}
        title={"削除"}
        message={deleteUserMessage(selectedUser)}
      />
    </>
  );
});
