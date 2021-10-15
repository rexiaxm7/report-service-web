import { useCallback, useContext } from "react";
import { useMessage } from "./useMessage";
import { OperationModalContext } from "../../providers/OperationModalProvider";
import { UserModalContext } from "../../providers/UserModalProvider";

export const useOperationDialog = () => {
  const { showMessage } = useMessage();
  const useOperationModalContext = () => useContext(OperationModalContext);

  const { isOperationModalOpen, setIsOperationModalOpen } =
    useOperationModalContext();

  const onClickOperation = useCallback((toggleDialog) => {}, []);
  const onClickCancel = useCallback(() => {
    setIsOperationModalOpen(false);
  }, []);

  return {
    isOperationModalOpen,
    setIsOperationModalOpen,
    onClickCancel,
    onClickOperation,
  };
};
