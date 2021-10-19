import { useMemo, useState } from "react";
import dayjs from "dayjs";
import { useReport } from "../api/useReport";

export const useMonthlyReportForm = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState(dayjs().format());
  const { registerReport } = useReport();
  const [year, setYear] = useState(1);
  const [month, setMonth] = useState(1);
  const yearMonth = useMemo(
    () => `${dayjs(date).year()}年${dayjs(date).month() + 1}月`,
    [date]
  );

  const onClickSendButton = () => {
    //TODO:　ログイン実装後にユーザーIDを対応するものに変える
    const report = {
      user_id: 1,
      year: year,
      month: month,
      content: text,
    };
    registerReport(report);
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
  };
};
