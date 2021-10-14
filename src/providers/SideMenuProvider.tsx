import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type IsOpen = boolean;

export type SideMenuContextType = {
  isOpen: IsOpen;
  setIsOpen: Dispatch<SetStateAction<IsOpen>>;
};

export const SideMenuContext = createContext<SideMenuContextType>(
  {} as SideMenuContextType
);
export const SideMenuProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<IsOpen>(false);
  return (
    <SideMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideMenuContext.Provider>
  );
};
