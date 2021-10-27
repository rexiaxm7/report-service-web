//TODO:汎用部分をTableHeaderとしてmoleculeに分割したい

import { memo, VFC } from "react";
import { OperationButton } from "../../atoms/buttons/OperationButton";
import { Grid } from "@mui/material";
import { useUserTable } from "../../../hooks/view/useUserTable";

type Props = {};
export const UserTableHeader: VFC<Props> = memo((props) => {
  const { onClickAddButton, loginUser } = useUserTable();

  return !loginUser.admin ? (
    <></>
  ) : (
    <>
      <Grid container alignItems={"center"} justifyContent={"end"} mb={2}>
        <Grid item>
          <OperationButton onClick={() => onClickAddButton()}>
            追加
          </OperationButton>
        </Grid>
      </Grid>
    </>
  );
});
