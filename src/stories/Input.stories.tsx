import React from "react"
import { Meta, Story } from "@storybook/react"
import Input, { InputProps } from "../components/ui/input/InputV2"

const meta: Meta<InputProps> = {
  title: "Input",
  component: Input,
  argTypes: {},
}

export default meta

const Template: Story<InputProps> = args => <Input {...args} />


export const Default = Template.bind({})

Default.args = {
    placeholder: "Enter your name...",
    type: "text",
    name: "name",
    id: "name",
    label: "Name",
}