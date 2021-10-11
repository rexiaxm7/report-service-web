import React, { memo, useEffect, VFC } from "react";
import {OperationButton} from "../atoms/buttons/OperationButton";

export const Sandbox: VFC = memo(() => {

    return (
        <OperationButton>ボタン名</OperationButton>
    );
});
