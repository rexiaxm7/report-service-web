import React, { memo, useEffect, VFC } from "react";
import { UserTableHeader } from "./UserTableHeader";
import {
  DataGrid,
  GridToolbar,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import { useUserTable } from "../../../hooks/view/useUserTable";
import { UserDialog } from "./UserDialog";
import { OperationDialog } from "../../molecules/OperationDialog";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {};
export const UserTable: VFC<Props> = memo((props) => {
  const {
    rowsPerPageOptions,
    setPageSize,
    pageSize,
    onClickDeleteButton,
    onClickEditButton,
    onClickActionButton,
    users,
    getUsers,
    selectedUser,
    setIsOperationModalOpen,
    deleteUserMessage,
    localizationJapanese,
    message,
    sortModel,
    setSortModel,
  } = useUserTable();

  useEffect(() => {
    //そのまま書くと何故か描画されない
    setTimeout(() => getUsers(), 0);
  }, [message]);

  //TODO:rendercellをどうにかしてhooksに持っていきたい
  const headers: any = [
    {
      field: "id",
      flex: 0.1,
      headerName: "ID",
      disableClickEventBubbling: true,
    },
    {
      field: "name",
      headerName: "ユーザー名",
      flex: 0.5,
      editable: false,
      disableClickEventBubbling: true,
    },
    {
      field: "team",
      headerName: "チーム",
      sortable: false,
      editable: false,
      flex: 0.3,
      disableClickEventBubbling: true,
      valueGetter: (params: any) => params.row?.team?.name,
      valueFormatter: (params: GridValueFormatterParams) => {
        return params.value + "チーム";
      },
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
              <Tooltip title="編集" placement="top">
                <IconButton
                  color={"success"}
                  onClick={() => onClickEditButton({ selectedUser })}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="削除" placement="top">
                <IconButton
                  color={"error"}
                  onClick={() => onClickDeleteButton({ selectedUser })}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
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
          components={{
            Toolbar: GridToolbar,
          }}
          sortModel={sortModel}
          rows={users}
          columns={headers}
          disableColumnMenu
          autoHeight
          localeText={localizationJapanese}
          pageSize={pageSize}
          rowsPerPageOptions={rowsPerPageOptions}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          disableSelectionOnClick
          onSortModelChange={(model) => setSortModel(model)}
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
