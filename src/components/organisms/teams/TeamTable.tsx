import React, { memo, useEffect, VFC } from "react";
import { TeamTableHeader } from "./TeamTableHeader";
import {
  DataGrid,
  GridToolbar,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import { useTeamTable } from "../../../hooks/view/useTeamTable";
import { TeamDialog } from "./TeamDialog";
import { OperationDialog } from "../../molecules/OperationDialog";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {};
export const TeamTable: VFC<Props> = memo((props) => {
  const {
    rowsPerPageOptions,
    setPageSize,
    pageSize,
    onClickDeleteButton,
    onClickEditButton,
    onClickActionButton,
    selectedTeam,
    message,
    deleteTeamMessage,
    setIsOperationModalOpen,
    localizationJapanese,
    teams,
    getTeams,
    sortModel,
    setSortModel,
  } = useTeamTable();

  useEffect(() => {
    //そのまま書くと何故か描画されない
    setTimeout(() => getTeams(), 0);
  }, [message]);

  //TODO:rendercellをどうにかしてhooksに持っていきたい
  const headers: any = [
    { field: "id", headerName: "ID", disableClickEventBubbling: true },
    {
      field: "name",
      headerName: "チーム名",
      flex: 0.1,
      editable: false,
      disableClickEventBubbling: true,
      valueFormatter: (params: GridValueFormatterParams) => {
        return params.value + "チーム";
      },
    },
    {
      field: "input_start_date",
      headerName: "月報入力開始日",
      sortable: false,
      editable: false,
      flex: 0.15,
      minWidth: 110,
      disableClickEventBubbling: true,
      valueFormatter: (params: GridValueFormatterParams) => {
        return `毎月${params.value}日 `;
      },
    },
    {
      field: "alert_start_days",
      headerName: "月報入力警告日",
      sortable: false,
      editable: false,
      flex: 0.15,
      minWidth: 110,
      disableClickEventBubbling: true,
      valueFormatter: (params: GridValueFormatterParams) => {
        return `毎月${params.value}日 `;
      },
    },
    {
      field: "sending_message_url",
      headerName: "送信先URL",
      sortable: false,
      editable: false,
      flex: 0.2,
      minWidth: 220,
      valueFormatter: (params: GridValueFormatterParams) => {
        return params.value || `未設定`;
      },
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
        const selectedTeam = param.row;
        return (
          <>
            <div>
              <Tooltip title="編集" placement="top">
                <IconButton
                  color={"success"}
                  onClick={() => onClickEditButton({ selectedTeam })}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="削除" placement="top">
                <IconButton
                  color={"error"}
                  onClick={() => onClickDeleteButton({ selectedTeam })}
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
      <TeamTableHeader />
      <div style={{ width: "100%" }}>
        <DataGrid
          components={{
            Toolbar: GridToolbar,
          }}
          sortModel={sortModel}
          rows={teams}
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
      <TeamDialog />
      <OperationDialog
        onClickCancel={() => setIsOperationModalOpen(false)}
        onClickAction={() => onClickActionButton(selectedTeam)}
        title={"削除"}
        message={deleteTeamMessage(selectedTeam)}
      />
    </>
  );
});
