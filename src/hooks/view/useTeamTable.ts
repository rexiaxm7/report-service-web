import { useCallback, useContext, useState } from "react";
import { DisplayTeam } from "../../types/Team";
import { useTeam } from "../api/useTeam";
import { useTeamDialog } from "./useTeamDialog";
import { useOperationDialog } from "./useOperationDialog";
import { SelectedTeamContext } from "../../providers/SelectedTeamProvider";
import { useMessage } from "./useMessage";
import dataGridJaJP from "../../components/organisms/users/dataGridJaJP";
import { MessageContext } from "../../providers/MessageProvider";
import { useTeams } from "../api/useTeams";
import { GridSortModel } from "@mui/x-data-grid";

export type OnClickButtonProps = {
  selectedTeam: DisplayTeam;
};

export const useTeamTable = () => {
  const { teams, getTeams } = useTeams();
  const { deleteTeamMessage } = useMessage();
  const localizationJapanese = dataGridJaJP;
  const useMessageContext = () => useContext(MessageContext);
  const { message } = useMessageContext();

  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: "id",
      sort: "asc",
    },
  ]);

  const useSelectedTeamContext = () => useContext(SelectedTeamContext);
  const { selectedTeam, setSelectedTeam } = useSelectedTeamContext();
  const { deleteTeam } = useTeam();
  const { setIsTeamModalOpen } = useTeamDialog();
  const { setIsOperationModalOpen } = useOperationDialog();
  //テーブルの行数
  const [pageSize, setPageSize] = useState(10);
  const rowsPerPageOptions = [10, 25, 50, 100];

  const onClickAddButton = useCallback(() => {
    console.log("onClickAddButton");
    setSelectedTeam(null);
    setIsTeamModalOpen(true);
  }, [setIsTeamModalOpen, setSelectedTeam]);

  const onClickEditButton = useCallback(
    (props: OnClickButtonProps) => {
      const { selectedTeam } = props;
      setSelectedTeam(selectedTeam);
      setIsTeamModalOpen(true);
    },
    [setIsTeamModalOpen, setSelectedTeam]
  );

  const onClickDeleteButton = useCallback(
    (props: OnClickButtonProps) => {
      const { selectedTeam } = props;
      setSelectedTeam(selectedTeam);
      setIsOperationModalOpen(true);
    },
    [setIsOperationModalOpen, setSelectedTeam]
  );

  const onClickActionButton = useCallback(
    (selectedTeam: DisplayTeam | null) => {
      deleteTeam(selectedTeam!.id);
      setIsOperationModalOpen(false);
    },
    [deleteTeam, setIsOperationModalOpen]
  );

  return {
    pageSize,
    setPageSize,
    rowsPerPageOptions,
    onClickEditButton,
    onClickDeleteButton,
    onClickActionButton,
    onClickAddButton,
    setIsOperationModalOpen,
    selectedTeam,
    deleteTeamMessage,
    localizationJapanese,
    message,
    teams,
    getTeams,
    sortModel,
    setSortModel,
  };
};
