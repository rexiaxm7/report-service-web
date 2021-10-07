import React, { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Header: VFC = memo(() => {
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickUserManagement = useCallback(
    () => history.push("/home/user_management"),
    []
  );
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
});
