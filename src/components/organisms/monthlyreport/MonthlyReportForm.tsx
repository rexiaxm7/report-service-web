import { memo, useEffect, VFC } from "react";
import {
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormGroup,
  Grid,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { OperationButton } from "../../atoms/buttons/OperationButton";
import ReactMarkdown from "react-markdown";
import { useMonthlyReportForm } from "../../../hooks/view/useMonthlyReportForm";
import dayjs from "dayjs";

type Props = {};
export const MonthlyReportForm: VFC<Props> = memo((props) => {
  const {
    toggleShowPreview,
    isShowPreview,
    text,
    onChangeText,
    yearMonth,
    onClickSendButton,
    setMonth,
    setYear,
  } = useMonthlyReportForm();

  useEffect(() => {
    return () => {
      setYear(dayjs().year());
      setMonth(dayjs().month());
    };
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent={"end"}>
          <Grid item>
            プレビュー:
            <Checkbox value={isShowPreview} onClick={toggleShowPreview} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <FormGroup>
                <FormControl>
                  <InputLabel htmlFor={"dateInput"}>年月</InputLabel>
                  <Input
                    id={"dateInput"}
                    readOnly
                    value={yearMonth}
                    disableUnderline={true}
                  />
                </FormControl>
              </FormGroup>
            </Grid>
            <Grid item xs={isShowPreview ? 6 : 12}>
              <FormGroup>
                <FormControl fullWidth>
                  <TextField
                    multiline
                    rows={25}
                    label={"報告内容"}
                    value={text}
                    aria-describedby="my-helper-text"
                    onChange={onChangeText}
                  />
                </FormControl>
              </FormGroup>
            </Grid>
            {isShowPreview && (
              <Grid item md={6} xs={12} textAlign={"start"} justifySelf={"end"}>
                <Grid container justifyContent={"center"} height={"100%"}>
                  <Grid item xs={12}>
                    <Card style={{ height: "100%" }} elevation={1}>
                      <CardContent>
                        <ReactMarkdown>{text}</ReactMarkdown>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            )}

            <Grid item xs={12}>
              <Grid container justifyContent={"flex-end"} columnSpacing={1}>
                <Grid item>
                  <OperationButton onClick={onClickSendButton}>
                    送信
                  </OperationButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
});
