import React, { memo, ReactNode, useContext, VFC } from "react";
import { Header } from "../organisms/layout/Header";
import {
  Alert,
  Box,
  Container,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
} from "@mui/material";
import { useSideMenu } from "../../hooks/view/useSideMenu";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import { useHistory } from "react-router-dom";
import { MessageContext } from "../../providers/MessageProvider";

type Props = {
  children: ReactNode;
};
type sideMenuTypes = {
  displayName: string;
  icon: any;
  path: string;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const useMessageContext = () => useContext(MessageContext);
  const { message, removeMessage, visible } = useMessageContext();
  const { children } = props;
  const { isOpen, setIsOpen } = useSideMenu();
  const toggleDrawer = () => setIsOpen(!isOpen);

  const onClickSideMenu = (route: sideMenuTypes): any => {
    history.push(route.path);
  };
  const history = useHistory();
  const handleClose = () => {
    removeMessage();
  };
  const routes: Array<sideMenuTypes> = [
    { displayName: "ユーザー一覧", icon: <PersonIcon />, path: "/users" },
    { displayName: "チーム一覧", icon: <PeopleAltIcon />, path: "/teams" },
    {
      displayName: "月報提出",
      icon: <DescriptionIcon />,
      path: "/monthly-report",
    },
  ];
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={visible}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={
            message?.status === 200 ||
            message?.status === 201 ||
            message?.status === 202 ||
            message?.status === 203 ||
            message?.status === 204
              ? "success"
              : "error"
          }
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message?.message}
        </Alert>
      </Snackbar>
      <div>
        <Header onClickMenu={toggleDrawer} />
        <Container>
          <Grid
            container
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>
        </Container>
        <Drawer
          anchor={"left"}
          open={isOpen}
          onClose={toggleDrawer}
          variant={"temporary"}
        >
          <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
            <List>
              {routes.map((route, index) => (
                <ListItem
                  button
                  key={route.displayName}
                  onClick={() => onClickSideMenu(route)}
                >
                  <ListItemIcon>{route.icon}</ListItemIcon>
                  <ListItemText primary={route.displayName} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>
    </>
  );
});
