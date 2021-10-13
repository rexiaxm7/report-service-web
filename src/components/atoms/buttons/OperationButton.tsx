import { memo, ReactNode, VFC } from "react";
import { Button } from "@mui/material";

type Props = {
  //TODO : 色の型にしたい
  color?: any;
  children: string;
  icon?: ReactNode;
  //FIXME: 型を付ける
  onClick: any;
  disabled?: boolean;
};
export const OperationButton: VFC<Props> = memo((props) => {
  const {
    color = "primary",
    children,
    icon = null,
    onClick,
    disabled = false,
  } = props;
  return (
    <Button
      disabled={disabled}
      color={color}
      variant="contained"
      startIcon={icon}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
