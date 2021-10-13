import { memo, VFC } from "react";
import {
  FormControl,
  FormGroup,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { OperationButton } from "../../atoms/buttons/OperationButton";

type Props = {};
export const MonthlyReportForm: VFC<Props> = memo((props) => {
  //日付の状態
  //月報入力テキストエリアの状態
  //日付の取得
  //月報入力テキストエリアのonChange
  //キャンセルボタンクリック
  //更新/登録ボタンクリック
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor={"dateInput"}>年月</InputLabel>
                  <Input
                    id={"dateInput"}
                    readOnly
                    value={"aaa"}
                    disableUnderline={true}
                  />
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <FormGroup>
                <FormControl fullWidth>
                  <TextField
                    multiline
                    rows={25}
                    label={"報告内容"}
                    aria-describedby="my-helper-text"
                  />
                </FormControl>
              </FormGroup>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent={"flex-end"} columnSpacing={1}>
          <Grid item>
            <OperationButton color={"inherit"} onClick={() => {}}>
              キャンセル
            </OperationButton>
          </Grid>
          <Grid item>
            <OperationButton onClick={() => {}}>送信</OperationButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});
