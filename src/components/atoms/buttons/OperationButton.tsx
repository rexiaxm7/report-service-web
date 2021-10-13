import { memo, ReactNode, VFC } from "react";
import { Button } from "@mui/material";

type Props = {
  //TODO : 色の型にしたい
  color?: any;
  children: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};
export const OperationButton: VFC<Props> = memo((props) => {
  const { color = "primary", children, icon = null, onClick, disabled } = props;
  return (
    <Button color={color} variant="contained" startIcon={icon}>
      {children}
    </Button>
  );
});
