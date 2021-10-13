//TODO:汎用部分をTableHeaderとしてmoleculeに分割したい

import { memo, VFC } from "react";
import { OperationButton } from "../../atoms/buttons/OperationButton";
import { FormControl, Grid, Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};
export const UserTableHeader: VFC<Props> = memo((props) => {
  //検索インプットの状態
  //追加ボタンをクリック
  return (
    <>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={2}
      >
        <Grid item>
          <FormControl variant="standard">
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item>
          <OperationButton>追加</OperationButton>
        </Grid>
      </Grid>
    </>
  );
});
