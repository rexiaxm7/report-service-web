import { memo, VFC } from "react";
import { MonthlyReportForm } from "../organisms/monthlyreport/MonthlyReportForm";
import { Card, CardContent } from "@mui/material";

export const MonthlyReport: VFC = memo((props) => {
  return (
    <Card>
      <CardContent>
        <MonthlyReportForm />
      </CardContent>
    </Card>
  );
});
