import { memo, useEffect, VFC } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { OperationButton } from "../../atoms/buttons/OperationButton";
import { useUserDialog } from "../../../hooks/view/useUserDialog";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {};

export const UserDialog: VFC<Props> = memo((props) => {
  const {
    email,
    setEmail,
    onChangeEmail,
    userName,
    setUserName,
    onChangeUserName,
    password,
    setPassword,
    onChangePassword,
    setTeamId,
    teamId,
    onChangeTeamId,
    admin,
    setAdmin,
    onChangeAdmin,
    onClickCancel,
    onClickUpdate,
    onClickRegister,
    selectedUser,
    isUserModalOpen,
    setIsUserModalOpen,
    getTeams,
    teams,
    canRegister,
    onClickShowPassword,
    showPassword,
    setShowPassword,
  } = useUserDialog();

  const schema = yup.object({
    teamId: yup.number().required("チームを選択してください"),
    admin: yup.boolean().required("権限を選択してください"),
    email: yup
      .string()
      .required("メールアドレスは必須です")
      .email("正しいメールアドレスを入力してください"),
    userName: yup.string().required("ユーザー名を入力してください"),
    password: yup
      .string()
      .required("パスワードは必須です")
      .min(6, "少ないよ")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&].*$/,
        "パスワード弱いよ"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SampleFormInput>({
    // 追加
    resolver: yupResolver(schema),
  });

  // フォームの型
  interface SampleFormInput {
    userName: string;
    teamId: number;
    admin: boolean;
    email: string;
    password: string;
  }

  const onSubmit: SubmitHandler<SampleFormInput> = (data: any) => {
    selectedUser ? onClickUpdate(selectedUser?.id) : onClickRegister();
  };

  useEffect(() => {
    if (isUserModalOpen) {
      getTeams();
      setUserName(selectedUser?.name ?? "");
      setTeamId(selectedUser?.team?.id ?? undefined);
      setAdmin(selectedUser?.admin ?? false);
      setEmail(selectedUser?.email ?? "");
      setPassword(selectedUser ? "dummy" : "");
      setShowPassword(false);
    }
  }, [isUserModalOpen]);

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
          <Stack spacing={3} width={"100%"}>
            <FormControl>
              <Controller
                name="teamId"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="チーム"
                    fullWidth
                    error={Boolean(errors.teamId)}
                    helperText={errors.teamId?.message}
                  >
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
              label={"メールアドレス"}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...register("email")}
              fullWidth
              onChange={onChangeEmail}
            />

            {!selectedUser ? (
              <Box>
                <InputLabel htmlFor="password">パスワード</InputLabel>
                <Input
                  fullWidth
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={onChangePassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={onClickShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>
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
