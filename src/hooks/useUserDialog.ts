import { useCallback, useState } from "react";
import { useMessage } from "./useMessage";

export const useUserDialog = () => {
  const { showMessage } = useMessage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggleUserDialog = useCallback((status = false) => {
    console.log("toggleUserDialog");
    setIsDialogOpen(status);
  }, []);
  return {
    isDialogOpen,
    toggleUserDialog,
  };
};
