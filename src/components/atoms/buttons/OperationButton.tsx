import {memo, ReactNode, VFC} from "react";

type Props = {
    color?:string;
    children:string;
    icon?:ReactNode;
    onClick : () =>void;
    disabled?:boolean
}
export const OperationButton: VFC<Props> = memo((props) => {
    const { color = 'primary', children , icon = null , onClick , disabled } = props
    return (
        <div></div>
    )
})