import React, { memo, VFC } from "react";
import { LoginForm } from "../organisms/login/LoginForm";
import { Container, Grid } from "@mui/material";

export const UserLogin: VFC = memo(() => {
  return (
    <>
      <Container>
        <Grid
          container
          height={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={6}>
            <LoginForm />
          </Grid>
        </Grid>
      </Container>
    </>
  );
});
