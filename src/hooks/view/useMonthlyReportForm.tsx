import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { useReport } from "../api/useReport";
import { useOperationDialog } from "./useOperationDialog";
import { useMessage } from "./useMessage";
import { useRecoilValue } from "recoil";
import { LoginUser } from "../../atom/LoginUser";
export const useMonthlyReportForm = () => {
  const [date, setDate] = useState(dayjs().format());
  const { registerReport } = useReport();
  const [year, setYear] = useState(dayjs(date).year());
  const [month, setMonth] = useState(dayjs(date).month());
  const { setIsOperationModalOpen } = useOperationDialog();
  const yearMonth = useMemo(
    () => `${dayjs(date).year()}年${dayjs(date).month() + 1}月分報告書`,
    [date]
  );
  const loginUser = useRecoilValue(LoginUser);
  const template = `
${loginUser!.name}の${dayjs(date).month() + 1}月分の報告です。

### ■残業時間(${dayjs(date).date()}日時点)

### ■残業時間(当月見込)

### ■作業状況

### ■何か一言
`;
  const [text, setText] = useState(template);
  const { registerReportMessage } = useMessage();

  const onClickSendButton = () => {
    setIsOperationModalOpen(true);
  };

  const onClickCancel = () => {
    setIsOperationModalOpen(false);
  };

  const onClickRegister = () => {
    //TODO:　ログイン実装後にユーザーIDを対応するものに変える
    const report = {
      user_id: loginUser.id,
      year: year,
      month: month,
      content: text,
    };
    registerReport(report);
    setIsOperationModalOpen(false);
  };

  const [isShowPreview, setIsShowPreview] = useState(false);
  const onChangeText = (e: any) => setText(e.target.value);
  const toggleShowPreview = () => setIsShowPreview(!isShowPreview);
  return {
    isShowPreview,
    setIsShowPreview,
    toggleShowPreview,
    onChangeText,
    text,
    setText,
    date,
    setDate,
    setMonth,
    setYear,
    yearMonth,
    onClickSendButton,
    year,
    month,
    onClickRegister,
    onClickCancel,
    registerReportMessage,
  };
};
