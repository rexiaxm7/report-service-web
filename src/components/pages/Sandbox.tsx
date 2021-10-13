import React, { memo, VFC } from "react";
import { OperationButton } from "../atoms/buttons/OperationButton";
import { Container, Grid, Pagination } from "@mui/material";
import { UserTable } from "../organisms/users/UserTable";
import { MonthlyReport } from "./MonthlyReport";
import { MonthlyReportForm } from "../organisms/monthlyreport/MonthlyReportForm";

export const Sandbox: VFC = memo(() => {
  return (
    <Container>
      <Grid
        height={"100vh"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        container
        spacing={2}
      >
        <Grid direction={"column"} item xs={6}>
          <OperationButton>ボタン名</OperationButton>
        </Grid>
        <Grid direction={"column"} item xs={6}>
          <Pagination color={"primary"} />
        </Grid>
        <Grid direction={"column"} item xs={12}>
          <MonthlyReport></MonthlyReport>
        </Grid>
      </Grid>
    </Container>
  );
});
