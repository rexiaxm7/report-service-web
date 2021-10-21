import { memo, VFC } from "react";
import { MonthlyReportForm } from "../organisms/monthlyreport/MonthlyReportForm";
import { Card } from "@mui/material";

export const MonthlyReport: VFC = memo((props) => {
  return (
    <Card>
      <MonthlyReportForm />
    </Card>
  );
});
