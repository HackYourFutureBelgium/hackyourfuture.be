import React from "react"
import { Story, Meta } from "@storybook/react"
import Button, { ButtonProps } from "../components/ui/button/ButtonV2"
import styled from "styled-components"

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Text or other elements to be rendered inside the button",
    },
    onClick: { action: "clicked", description: "Click event" },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
      description: "Size of the button",
      defaultValue: "medium",
    },
    variant: {
      options: ["default", "primary", "secondary"],
      control: { type: "radio" },
      description: "Variant of the button",
      defaultValue: "default",
    },
    HTMLElement: {
      options: ["button", "a"],
      control: { type: "radio" },
      description: "HTMLElement of the button",
      defaultValue: "button",
    },
  },
  decorators: [
    Story => (
      <StyledDiv>
        <Story />
      </StyledDiv>
    ),
  ],
}

export default meta

const StyledDiv = styled.div`
  // TODO: Replace color with theme color variable
  background-color: #040419;
  padding: 20px;
`

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "Default Button",
}

export const Primary = Template.bind({})
Primary.args = {
  children: "Primary Button",
  variant: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
}

export const SmallDefault = Template.bind({})
SmallDefault.args = {
  children: "Small Default Button",
  size: "small",
}

export const SmallPrimary = Template.bind({})
SmallPrimary.args = {
  children: "Small Primary Button",
  size: "small",
  variant: "primary",
}

export const SmallSecondary = Template.bind({})
SmallSecondary.args = {
  children: "Small Secondary Button",
  size: "small",
  variant: "secondary",
}
