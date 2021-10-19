import React, { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useHeader } from "../../../hooks/view/useHeader";

type Props = {
  onClickMenu: any;
};
export const Header: VFC<Props> = memo((props) => {
  const { onClickMenu } = props;
  const { onClickApplicationTitle } = useHeader();

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
              onClick={onClickMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <span
                style={{ cursor: "pointer" }}
                onClick={onClickApplicationTitle}
              >
                月報管理システム
              </span>
            </Typography>
            <div>
              <IconButton>
                <AccountCircleIcon style={{ color: "white" }} />
              </IconButton>
              <span>ユーザー名</span>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
});
