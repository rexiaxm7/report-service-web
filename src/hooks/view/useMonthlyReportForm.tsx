import { useMemo, useState } from "react";
import dayjs from "dayjs";

export const useMonthlyReportForm = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState(dayjs().format());
  const yearMonth = useMemo(
    () => `${dayjs(date).year()}年${dayjs(date).month() + 1}月`,
    [date]
  );
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
    yearMonth,
  };
};
