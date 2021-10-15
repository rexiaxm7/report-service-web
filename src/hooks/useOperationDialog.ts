import { useCallback, useState } from "react";
import { useMessage } from "./useMessage";

export const useOperationDialog = () => {
  const { showMessage } = useMessage();
  const [isOperationDialogOpen, setIsOperationDialogOpen] = useState(false);

  const onClickOperation = useCallback((toggleDialog) => {}, []);
  const onClickCancel = useCallback((toggleDialog) => {
    toggleDialog(false);
  }, []);

  const toggleOperationDialog = useCallback((status = false) => {
    console.log(`toggleUserDialog:${status}`);
    setIsOperationDialogOpen(status);
  }, []);

  return {
    toggleOperationDialog,
    isOperationDialogOpen,
    onClickCancel,
    onClickOperation,
  };
};
