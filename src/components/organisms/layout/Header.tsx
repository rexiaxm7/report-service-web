import React, { memo, useState, VFC } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useHeader } from "../../../hooks/view/useHeader";
import { useHistory } from "react-router-dom";

type Props = {
  onClickMenu: any;
};
export const Header: VFC<Props> = memo((props) => {
  const { onClickApplicationTitle, loginUser, loginUserName, setLoginUser } =
    useHeader();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const onClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClickLogout = () => {
    localStorage.removeItem("token");
    setLoginUser(null);
    history.push("/");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <Box>
              <IconButton onClick={onClickMenu}>
                <AccountCircleIcon style={{ color: "white" }} />
              </IconButton>
              <span>{loginUserName}</span>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={onClickLogout}>ログアウト</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
});
