import React, { memo, useEffect, VFC } from "react";
import {
  Alert,
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Snackbar,
  Typography,
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLoginForm } from "../../../hooks/view/useLoginForm";

export const LoginForm: VFC = memo((props) => {
  const {
    loginId,
    password,
    onChangeLoginId,
    onChangePassword,
    onClickLogin,
    error,
    setError,
  } = useLoginForm();

  return (
    <>
      <Snackbar
        open={error}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setError(false)}
      >
        <Alert variant={"filled"} color={"error"}>
          ログインに失敗しました
        </Alert>
      </Snackbar>
      <Card style={{ height: "300px", marginTop: "8px" }}>
        <Grid container height={"100%"}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              style={{ backgroundColor: "#2196f3" }}
              py={2}
            >
              <span style={{ color: "#fff" }}>月報管理システム</span>
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container alignItems={"center"}>
              <Grid item xs={8}>
                <form onSubmit={() => onClickLogin(setError)}>
                  <Grid item>
                    <FormControl>
                      <InputLabel>ログインID</InputLabel>
                      <Input
                        value={loginId}
                        onChange={onChangeLoginId}
                        name={"email"}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item mt={2}>
                    <FormControl>
                      <InputLabel>パスワード</InputLabel>
                      <Input
                        name={"password"}
                        value={password}
                        onChange={onChangePassword}
                        type={"password"}
                      />
                    </FormControl>
                  </Grid>
                </form>
              </Grid>
              <Divider flexItem orientation="vertical" />
              <Grid item xs={3}>
                <Button
                  size={"large"}
                  onClick={() => onClickLogin(setError)}
                  type="submit"
                >
                  <ArrowForwardIosIcon></ArrowForwardIosIcon>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
});
