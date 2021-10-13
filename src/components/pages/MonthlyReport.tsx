import { memo, VFC } from "react";
import { MonthlyReportForm } from "../organisms/monthlyreport/MonthlyReportForm";
import { OperationButton } from "../atoms/buttons/OperationButton";

export const MonthlyReport: VFC = memo((props) => {
  return (
    <>
      <MonthlyReportForm></MonthlyReportForm>
    </>
  );
});
