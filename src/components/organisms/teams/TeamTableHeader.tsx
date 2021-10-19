//TODO:汎用部分をTableHeaderとしてmoleculeに分割したい

import { memo, VFC } from "react";
import { OperationButton } from "../../atoms/buttons/OperationButton";
import { Grid } from "@mui/material";
import { useTeamTable } from "../../../hooks/view/useTeamTable";

type Props = {};
export const TeamTableHeader: VFC<Props> = memo((props) => {
  const { onClickAddButton } = useTeamTable();

  return (
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
