//TODO:汎用部分をTableHeaderとしてmoleculeに分割したい

import { ChangeEvent, memo, useState, VFC } from "react";
import { OperationButton } from "../../atoms/buttons/OperationButton";
import { FormControl, Grid, Input, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type Props = {};
export const UserTableHeader: VFC<Props> = memo((props) => {
  const [searchText, setSearchText] = useState("");

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const addUser = () => {
    //openDialog
  };

  const onClickAddButton = () => {
    addUser();
  };

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
              onChange={onChangeSearchInput}
            />
          </FormControl>
        </Grid>
        <Grid item>
          <OperationButton onClick={() => onClickAddButton}>
            追加
          </OperationButton>
        </Grid>
      </Grid>
    </>
  );
});
