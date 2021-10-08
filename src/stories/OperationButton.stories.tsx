import React, {ReactNode} from 'react'
import {OperationButton} from '../components/atoms/buttons/OperationButton'
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'form/Button',
    component: OperationButton,
} as ComponentMeta<typeof OperationButton>

const Template: ComponentStory<typeof OperationButton> = (args) => <OperationButton {...args} />;


export const Operation = Template.bind({})
Operation.args = {
    color:'error',
    children:"bobobo",
    icon:null,
    onClick : () => {},
    disabled:true,
}