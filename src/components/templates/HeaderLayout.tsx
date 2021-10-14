import React, { memo, MouseEventHandler, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useSideMenu } from "../../hooks/useSideMenu";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DescriptionIcon from "@mui/icons-material/Description";
import { useHistory } from "react-router-dom";

type Props = {
  children: ReactNode;
};
type sideMenuTypes = {
  displayName: string;
  icon: any;
  path: string;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  const { isOpen, setIsOpen } = useSideMenu();
  const toggleDrawer = () => setIsOpen(!isOpen);

  const onClickSideMenu = (route: sideMenuTypes): any => {
    history.push(route.path);
  };
  const history = useHistory();
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
      <Header onClickMenu={toggleDrawer} />
      {children}
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
    </>
  );
});
