import { useCallback, useContext } from "react";
import { OperationModalContext } from "../../providers/OperationModalProvider";
import { SelectedUserContext } from "../../providers/SelectedUserProvider";

export const useOperationDialog = () => {
  const useOperationModalContext = () => useContext(OperationModalContext);
  const { isOperationModalOpen, setIsOperationModalOpen } =
    useOperationModalContext();

  const useSelectedUserContext = () => useContext(SelectedUserContext);
  const { setSelectedUser } = useSelectedUserContext();

  const closeDialog = useCallback(() => {
    setIsOperationModalOpen(false);
    setSelectedUser(null);
  }, [setIsOperationModalOpen, setSelectedUser]);

  const onClickOperation = useCallback(() => {
    closeDialog();
  }, [closeDialog]);
  const onClickCancel = useCallback(() => {
    closeDialog();
  }, [closeDialog]);

  return {
    isOperationModalOpen,
    setIsOperationModalOpen,
    onClickCancel,
    onClickOperation,
    closeDialog,
  };
};
