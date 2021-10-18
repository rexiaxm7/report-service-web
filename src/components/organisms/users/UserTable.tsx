import React, { memo, useContext, useEffect, VFC } from "react";
import { UserTableHeader } from "./UserTableHeader";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import dataGridJaJP from "./dataGridJaJP";
import { useUsers } from "../../../hooks/api/useUsers";
import { useUserTable } from "../../../hooks/view/useUserTable";
import { UserDialog } from "./UserDialog";
import { OperationDialog } from "../../molecules/OperationDialog";
import { useOperationDialog } from "../../../hooks/view/useOperationDialog";
import { useMessage } from "../../../hooks/view/useMessage";
import { MessageContext } from "../../../providers/MessageProvider";
import { SelectedUserContext } from "../../../providers/SelectedUserProvider";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {};
export const UserTable: VFC<Props> = memo((props) => {
  const { users, getUsers } = useUsers();
  const {
    rowsPerPageOptions,
    setPageSize,
    pageSize,
    onClickDeleteButton,
    onClickEditButton,
    onClickActionButton,
  } = useUserTable();
  const useSelectedUserContext = () => useContext(SelectedUserContext);
  const { selectedUser } = useSelectedUserContext();
  const { setIsOperationModalOpen } = useOperationDialog();
  const { deleteUserMessage } = useMessage();
  const localizationJapanese = dataGridJaJP;

  const useMessageContext = () => useContext(MessageContext);
  const { message } = useMessageContext();

  useEffect(() => {
    //そのまま書くと何故か描画されない
    setTimeout(() => getUsers(), 0);
  }, [message]);

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
      field: "team_id",
      headerName: "チームID",
      sortable: false,
      editable: false,
      flex: 0.1,
      minWidth: 110,
      disableClickEventBubbling: true,
    },
    {
      field: "operation",
      headerName: " ",
      sortable: false,
      editable: false,
      flex: 0.1,
      minWidth: 110,
      renderCell: (param: any) => {
        const selectedUser = param.row;
        return (
          <>
            <div>
              <IconButton
                color={"success"}
                onClick={() => onClickEditButton({ selectedUser })}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color={"error"}
                onClick={() => onClickDeleteButton({ selectedUser })}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </>
        );
      },
      disableClickEventBubbling: true,
    },
  ];

  return (
    <>
      <UserTableHeader />
      <div style={{ width: "100%" }}>
        <DataGrid
          sortModel={[{ field: "id", sort: "asc" }]}
          components={{
            Toolbar: GridToolbar,
          }}
          rows={users}
          columns={headers}
          disableColumnMenu
          autoHeight
          localeText={localizationJapanese}
          pageSize={pageSize}
          rowsPerPageOptions={rowsPerPageOptions}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          disableSelectionOnClick
        />
      </div>
      <UserDialog />
      <OperationDialog
        onClickCancel={() => setIsOperationModalOpen(false)}
        onClickAction={() => onClickActionButton(selectedUser)}
        title={"削除"}
        message={deleteUserMessage(selectedUser)}
      />
    </>
  );
});
