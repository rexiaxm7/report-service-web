import { memo, VFC } from "react";
import { MonthlyReportForm } from "../organisms/monthlyreport/MonthlyReportForm";
import { Card, CardContent } from "@mui/material";
import { MonthlyReportTable } from "../organisms/monthlyreport/MonthlyReportTable";

export const MonthlyReports: VFC = memo((props) => {
  return (
    <Card>
      <CardContent>
        <MonthlyReportTable />
      </CardContent>
    </Card>
  );
});
