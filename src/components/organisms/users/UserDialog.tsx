import { memo, VFC } from "react";
import { Controller } from "react-hook-form";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from "@mui/material";
import { OperationButton } from "../../atoms/buttons/OperationButton";
import { useUserDialog } from "../../../hooks/view/useUserDialog";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type Props = {};

export const UserDialog: VFC<Props> = memo((props) => {
  const {
    onClickCancel,
    isUserModalOpen,
    setIsUserModalOpen,
    selectedUser,
    teams,
    onClickShowPassword,
    showPassword,
    register,
    handleSubmit,
    errors,
    control,
    onSubmit,
  } = useUserDialog();

  return (
    <>
      <Dialog
        open={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {selectedUser ? "編集" : "追加"}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3} mt={2} width={"100%"}>
            <FormControl>
              <Controller
                name="teamId"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    select
                    label="チーム"
                    fullWidth
                    error={Boolean(errors.teamId)}
                    helperText={errors.teamId?.message}
                  >
                    <MenuItem value={-1} disabled>
                      選択してください
                    </MenuItem>
                    {teams.map((team) => (
                      <MenuItem value={team.id}>{team.name}</MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </FormControl>

            {selectedUser && (
              <FormControl>
                <InputLabel htmlFor={"userId"}>ユーザーID</InputLabel>
                <Input
                  value={selectedUser?.id}
                  readOnly
                  disableUnderline
                  fullWidth
                />
              </FormControl>
            )}
            <FormControl error={Boolean(errors.admin)}>
              <FormLabel component="legend">権限</FormLabel>
              <Controller
                control={control}
                name="admin"
                render={({ field }) => (
                  <RadioGroup {...field} row>
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label="メンバー"
                    />
                    <FormControlLabel
                      value={true}
                      control={<Radio />}
                      label="チームリーダー"
                    />
                  </RadioGroup>
                )}
              />
              {errors.admin?.message && (
                <FormHelperText>{errors.admin?.message}</FormHelperText>
              )}
            </FormControl>
            <TextField
              label={"ユーザー名"}
              required
              error={Boolean(errors.userName)}
              helperText={errors.userName?.message}
              {...register("userName")}
              fullWidth
            />

            <TextField
              type={"email"}
              label={"メールアドレス"}
              required
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...register("email")}
              fullWidth
            />
            {!selectedUser ? (
              <TextField
                label={"パスワード"}
                required
                fullWidth
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={onClickShowPassword}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
            ) : (
              <></>
            )}
          </Stack>
        </DialogContent>
        <DialogActions>
          <OperationButton onClick={() => onClickCancel()} color="inherit">
            キャンセル
          </OperationButton>
          <OperationButton onClick={handleSubmit(onSubmit)} color="primary">
            {selectedUser ? "更新" : "登録"}
          </OperationButton>
        </DialogActions>
      </Dialog>
    </>
  );
});
