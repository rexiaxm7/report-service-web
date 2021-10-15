import React, { memo, useEffect, VFC } from "react";
import { OperationButton } from "../atoms/buttons/OperationButton";
import { Container, Grid, Pagination } from "@mui/material";
import { OperationDialog } from "../molecules/OperationDialog";
import { useUser } from "../../hooks/api/useUser";

export const Sandbox: VFC = memo(() => {
  useEffect(() => {
    getUser(1);
  }, []);

  const { getUser, user } = useUser();
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
        <Grid direction={"column"} item xs={6}></Grid>
      </Grid>
    </Container>
  );
});
