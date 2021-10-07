export const useMessage = () => {
  const showMessage = (message: string) => {
    alert(message);
  };

  return { showMessage };
};
