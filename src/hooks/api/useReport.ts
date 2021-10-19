import { useCallback, useContext, useState } from "react";
import api from "../../axios";
import { useMessage } from "../view/useMessage";
import { DisplayReport, RegisterReport } from "../../types/Report";
import { MessageContext } from "../../providers/MessageProvider";

export const useReport = () => {
  const useMessageContext = () => useContext(MessageContext);
  const { addMessage } = useMessageContext();
  const { createMessage } = useMessage();
  const [report, setReport] = useState<DisplayReport | null>(null);
  const getReport = useCallback(
    (reportId: number) => {
      console.log("getReport");
      api
        .get(`/reports/${reportId}`)
        .then((res) => {
          const { id, month, year, content, user_id } = res.data;
          const displayReport: DisplayReport = {
            id,
            month,
            year,
            content,
            user_id,
          };
          setReport(displayReport);
        })
        .catch((e) => createMessage(e, "月報を取得できませんでした"));
    },
    [createMessage]
  );

  const registerReport = useCallback(
    (report: RegisterReport) => {
      /*登録処理*/
      api
        .post(`/reports`, report)
        .then((res) => {
          setReport(null);
          createMessage(res, "月報を提出しました");
        })
        .catch((e) => createMessage(e, "月報の提出に失敗しました"));
    },
    [createMessage]
  );

  const updateReport = useCallback(
    (report: DisplayReport) => {
      api
        .put(`/reports/${report.id}`, report)
        .then((res) => {
          createMessage(res, "月報を更新しました");
        })
        .catch((e) => {
          createMessage(e, "月報の更新に失敗しました");
        });
    },
    [createMessage]
  );

  const deleteReport = useCallback(
    (reportId: number) => {
      api
        .delete(`/reports/${reportId}`)
        .then((res) => {
          createMessage(res, "月報を削除しました");
        })
        .catch((e) => {
          createMessage(e, "月報の削除に失敗しました");
        })
        .finally(() => setReport(null));
    },
    [addMessage]
  );

  return { report, getReport, updateReport, deleteReport, registerReport };
};
