export const useValidationMessage = () => {
  const REQUIRED = (domain: string) => `${domain}は必須です`;
  const REQUIRED_SELECT = (domain: string) => `${domain}を選択してください`;
  const MIN_STRING_INPUT = (min: number, domain: string) =>
    `${domain}は${min}文字以上で入力してください`;
  const MIN_NUMBER_INPUT = (min: number, domain: string) =>
    `${domain}は${min}以上で入力してください`;
  const MAX_NUMBER_INPUT = (max: number, domain: string) =>
    `${domain}は${max}以下で入力してください`;
  const MATCHES_PASSWORD = () =>
    `パスワードは英数字及び記号を最低1文字以上使用してください`;
  const FORMAT = (domain: string) => `${domain}の形式が正しくありません`;
  return {
    REQUIRED,
    REQUIRED_SELECT,
    MIN_STRING_INPUT,
    MIN_NUMBER_INPUT,
    MAX_NUMBER_INPUT,
    MATCHES_PASSWORD,
    FORMAT,
  };
};
