import React, { memo, useEffect, VFC } from "react";
import { useTeams } from "../../hooks/useTeams";

export const Teams: VFC = memo(() => {
  const { teams, getTeams } = useTeams();

  useEffect(() => {
    getTeams();
  }, [getTeams]);

  return (
    <div>
      {teams.map((team) => {
        return <p>{team.name}</p>;
      })}
    </div>
  );
});
