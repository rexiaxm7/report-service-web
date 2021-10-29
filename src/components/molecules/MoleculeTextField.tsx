//Atomic design用のテストコンポーネント
import { TextField } from "@mui/material";
import { memo, VFC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  error: boolean;
  helperText: string | undefined;
  label: string;
  required: boolean;
} & UseFormRegisterReturn;

export const MoleculeTextField: VFC<Props> = memo((props) => {
  const { error, helperText, label, required } = props;
  const register: UseFormRegisterReturn = props;
  return (
    <TextField
      label={label}
      required={required}
      error={error}
      helperText={helperText}
      {...register}
      fullWidth
    />
  );
});
