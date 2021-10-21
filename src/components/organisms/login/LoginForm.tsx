import React, { memo, VFC } from "react";
import {
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const LoginForm: VFC = memo((props) => {
  return (
    <>
      <Card style={{ height: "300px" }}>
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
                <form>
                  <Grid item>
                    <FormControl>
                      <InputLabel>ログインID</InputLabel>
                      <Input />
                    </FormControl>
                  </Grid>
                  <Grid item mt={2}>
                    <FormControl>
                      <InputLabel>パスワード</InputLabel>
                      <Input />
                    </FormControl>
                  </Grid>
                </form>
              </Grid>
              <Divider flexItem orientation="vertical" />
              <Grid item xs={3}>
                <Button size={"large"}>
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
