import { useCallback, useEffect, useState } from "react";
import { GridSortModel } from "@mui/x-data-grid";
import dayjs from "dayjs";
import dataGridJaJP from "../../components/organisms/users/dataGridJaJP";
import { useOperationDialog } from "./useOperationDialog";
import { DisplayTeam } from "../../types/Team";

export const useMonthlyReportTable = () => {
  type ReportTypes = any;
  const [pageSize, setPageSize] = useState(10);
  const rowsPerPageOptions = [10, 25, 50, 100];
  const localizationJapanese = dataGridJaJP;

  const defaultDate = dayjs().format();
  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: "id",
      sort: "asc",
    },
  ]);

  const [rows, setRows] = useState<Array<ReportTypes>>([]);
  const getMonthlyReports = () => {
    const data = [
      {
        id: 1,
        userName: "苗字 名前1",
        teamName: "チーム名1",
        date: defaultDate,
        text: "月報内容",
      },
      {
        id: 2,
        userName: "苗字 名前2",
        teamName: "チーム名2",
        date: defaultDate,
        text: "月報内容",
      },
      {
        id: 3,
        userName: "苗字 名前3",
        teamName: "チーム名3",
        date: defaultDate,
        text: "月報内容",
      },
      {
        id: 4,
        userName: "苗字 名前4",
        teamName: "チーム名4",
        date: defaultDate,
        text: "月報内容",
      },
      {
        id: 5,
        userName: "苗字 名前5",
        teamName: "チーム名5",
        date: defaultDate,
        text: "月報内容",
      },
      {
        id: 6,
        userName: "苗字 名前6",
        teamName: "チーム名6",
        date: defaultDate,
        text: "月報内容",
      },
      {
        id: 7,
        userName: "苗字 名前7",
        teamName: "チーム名7",
        date: defaultDate,
        text: "月報内容",
      },
      {
        id: 8,
        userName: "苗字 名前8",
        teamName: "チーム名8",
        date: defaultDate,
        text: "月報内容",
      },
      {
        id: 9,
        userName: "苗字 名前9",
        teamName: "チーム名9",
        date: defaultDate,
        text: "月報内容",
      },
      {
        id: 10,
        userName: "苗字 名前10",
        teamName: "チーム名10",
        date: defaultDate,
        text: "月報内容",
      },
      {
        id: 11,
        userName: "苗字 名前11",
        teamName: "チーム名11",
        date: defaultDate,
        text: "月報内容",
      },
    ];
    setRows(data);
  };

  useEffect(() => {
    //そのまま書くと何故か描画されない
    setTimeout(() => getMonthlyReports(), 0);
  }, []);

  return {
    rows,
    rowsPerPageOptions,
    pageSize,
    localizationJapanese,
    sortModel,
    setSortModel,
    setPageSize,
  };
};
