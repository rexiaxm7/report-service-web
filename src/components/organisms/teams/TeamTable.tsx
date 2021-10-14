import React, { memo, useEffect, VFC } from "react";
import { TeamTableHeader } from "./TeamTableHeader";
import { DataGrid } from "@mui/x-data-grid";
import dataGridJaJP from "../users/dataGridJaJP";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { useTeams } from "../../../hooks/useTeams";
import { useTeamTable } from "../../../hooks/useTeamTable";

type Props = {};
export const TeamTable: VFC<Props> = memo((props) => {
  const { teams, getTeams, setTeams } = useTeams();
  const {
    onClickDeleteButton,
    onClickEditButton,
    rowsPerPageOptions,
    setPageSize,
    pageSize,
  } = useTeamTable();
  const localizationJapanese = dataGridJaJP;

  //TODO:rendercellをどうにかしてhooksに持っていきたい
  const headers = [
    { field: "id", headerName: "ID", disableClickEventBubbling: true },
    {
      field: "name",
      headerName: "チーム名",
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
      renderCell: (params: any) => {
        return (
          <div>
            <IconButton color={"error"}>
              <DeleteIcon onClick={() => onClickDeleteButton(params.id)} />
            </IconButton>
            <IconButton
              onClick={() => onClickEditButton(params.id)}
              color={"success"}
            >
              <EditIcon />
            </IconButton>
          </div>
        );
      },
      disableClickEventBubbling: true,
    },
  ];

  useEffect(() => {
    setTeams(getTeams());
  }, []);

  return (
    <>
      <TeamTableHeader />
      <DataGrid
        disableColumnMenu
        autoHeight
        localeText={localizationJapanese}
        rows={teams}
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
