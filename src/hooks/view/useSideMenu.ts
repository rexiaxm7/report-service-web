import { useContext } from "react";
import { SideMenuContext } from "../../providers/SideMenuProvider";

export const useSideMenu = () => useContext(SideMenuContext);
