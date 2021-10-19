import { memo, VFC } from "react";
import { MonthlyReportForm } from "../organisms/monthlyreport/MonthlyReportForm";

export const MonthlyReport: VFC = memo((props) => {
  return (
    <>
      <MonthlyReportForm />
    </>
  );
});
