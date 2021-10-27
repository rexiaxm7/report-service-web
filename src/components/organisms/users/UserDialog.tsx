import { memo, useEffect, VFC } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
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
} from "@mui/material";
import { OperationButton } from "../../atoms/buttons/OperationButton";
import { useUserDialog } from "../../../hooks/view/useUserDialog";
import { Visibility, VisibilityOff } from "@mui/icons-material";

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
      >
        <DialogTitle id="alert-dialog-title">
          {selectedUser ? "編集" : "追加"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputLabel htmlFor={"team"}>チーム</InputLabel>
              <Select
                id={"team"}
                value={`${teamId}`}
                fullWidth
                onChange={onChangeTeamId}
              >
                <MenuItem value={undefined} disabled>
                  選択してください
                </MenuItem>
                {teams.map((team) => (
                  <MenuItem value={team.id}>{team.name}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                {selectedUser && (
                  <Grid item xs={12}>
                    <InputLabel htmlFor={"userId"}>ユーザーID</InputLabel>
                    <Input
                      id={"userId"}
                      value={selectedUser?.id}
                      readOnly
                      disableUnderline
                      fullWidth
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <InputLabel htmlFor={"email"}>権限</InputLabel>
                  <RadioGroup
                    aria-label="authority"
                    name="radio-group"
                    value={admin}
                    onChange={onChangeAdmin}
                    row
                  >
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
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor={"userName"}>ユーザー名</InputLabel>
                  <Input
                    id={"userName"}
                    value={userName}
                    fullWidth
                    onChange={onChangeUserName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor={"email"}>メールアドレス</InputLabel>
                  <Input
                    id={"email"}
                    value={email}
                    fullWidth
                    onChange={onChangeEmail}
                  />
                </Grid>
                {!selectedUser ? (
                  <Grid item xs={12}>
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
                  </Grid>
                ) : (
                  <></>
                )}
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <OperationButton onClick={() => onClickCancel()} color="inherit">
            キャンセル
          </OperationButton>
          <OperationButton
            onClick={() =>
              selectedUser ? onClickUpdate(selectedUser?.id) : onClickRegister()
            }
            color="primary"
            disabled={!canRegister}
          >
            {selectedUser ? "更新" : "登録"}
          </OperationButton>
        </DialogActions>
      </Dialog>
    </>
  );
});
