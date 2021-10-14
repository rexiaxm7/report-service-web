import React, { memo, useState, VFC } from "react";
import { UserTable } from "../organisms/users/UserTable";
import { Container } from "@mui/material";

export const Users: VFC = memo(() => {
  return (
    <Container>
      <UserTable />
    </Container>
  );
});
