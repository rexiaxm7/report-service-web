//Atomic design用のテストコンポーネント
import { TextField } from "@mui/material";
import { memo, VFC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  error: boolean;
  helperText: string | undefined;
  register: UseFormRegisterReturn;
  label: string;
  required: boolean;
};

export const MoleculeTextField: VFC<Props> = memo((props) => {
  const { register, error, helperText, label, required } = props;
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
