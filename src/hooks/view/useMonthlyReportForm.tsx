import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { useReport } from "../api/useReport";
import { useOperationDialog } from "./useOperationDialog";
import { useMessage } from "./useMessage";

export const useMonthlyReportForm = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState(dayjs().format());
  const { registerReport } = useReport();
  const [year, setYear] = useState(dayjs(date).year());
  const [month, setMonth] = useState(dayjs(date).month());
  const { setIsOperationModalOpen } = useOperationDialog();
  const yearMonth = useMemo(
    () => `${dayjs(date).year()}年${dayjs(date).month() + 1}月`,
    [date]
  );
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
      user_id: 1,
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
