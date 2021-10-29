import React, { memo, useEffect, VFC } from "react";
import {
  DataGrid,
  GridToolbar,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import { OperationDialog } from "../../molecules/OperationDialog";
import dayjs from "dayjs";
import { useMonthlyReportTable } from "../../../hooks/view/useMonthlyReportTable";

type Props = {};
export const MonthlyReportTable: VFC<Props> = memo((props) => {
  const {
    rowsPerPageOptions,
    rows,
    pageSize,
    localizationJapanese,
    sortModel,
    setSortModel,
    setPageSize,
  } = useMonthlyReportTable();

  const headers: any = [
    {
      field: "name",
      headerName: "日付",
      flex: 0.1,
      editable: false,
      disableClickEventBubbling: true,
      valueFormatter: (params: any) => dayjs(params!.value).format("YYYY-MM"),
    },
    {
      field: "userName",
      headerName: "ユーザー名",
      sortable: false,
      editable: false,
      flex: 0.15,
      minWidth: 110,
      disableClickEventBubbling: true,
      valueFormatter: (params: GridValueFormatterParams) => {
        return `${params.value}`;
      },
    },
    {
      field: "teamName",
      headerName: "チーム名",
      sortable: false,
      editable: false,
      flex: 0.15,
      minWidth: 110,
      disableClickEventBubbling: true,
      valueFormatter: (params: GridValueFormatterParams) => {
        return `${params.value}チーム `;
      },
    },
  ];

  return (
    <>
      <div style={{ width: "100%" }}>
        <DataGrid
          components={{
            Toolbar: GridToolbar,
          }}
          sortModel={sortModel}
          rows={rows}
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
    </>
  );
});
