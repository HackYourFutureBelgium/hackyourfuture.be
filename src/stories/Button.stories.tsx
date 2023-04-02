import React from "react"
import { Story, Meta } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
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
    },
    variant: {
      options: ["default", "primary", "secondary"],
      control: { type: "radio" },
      description: "Variant of the button",
    },
    as: {
      options: ["button", "a"],
      control: { type: "radio" },
      description: "HTMLElement of the button",
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

// The following code is used to test the button click event
interface TestArgs {
  canvasElement: HTMLElement
  story: Story<ButtonProps>
}

const testButtonClick = ({ canvasElement, story }: TestArgs) => {
  const canvas = within(canvasElement)

  const button = canvas.getByText(story.args?.children as string, {
    selector: "button",
  })

  userEvent.click(button)
}

// Stories for the button component

export const Default = Template.bind({})

Default.args = {
  children: "Default Button",
}

Default.play = ({ canvasElement }) =>
  testButtonClick({ canvasElement, story: Default })

export const Primary = Template.bind({})
Primary.args = {
  children: "Primary Button",
  variant: "primary",
}

Primary.play = ({ canvasElement }) =>
  testButtonClick({ canvasElement, story: Primary })

export const Secondary = Template.bind({})
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
}

Secondary.play = ({ canvasElement }) =>
  testButtonClick({ canvasElement, story: Secondary })

export const SmallDefault = Template.bind({})
SmallDefault.args = {
  children: "Small Default Button",
  size: "small",
}

SmallDefault.play = ({ canvasElement }) =>
  testButtonClick({ canvasElement, story: SmallDefault })

export const SmallPrimary = Template.bind({})
SmallPrimary.args = {
  children: "Small Primary Button",
  size: "small",
  variant: "primary",
}

SmallPrimary.play = ({ canvasElement }) =>
  testButtonClick({ canvasElement, story: SmallPrimary })

export const SmallSecondary = Template.bind({})
SmallSecondary.args = {
  children: "Small Secondary Button",
  size: "small",
  variant: "secondary",
}

SmallSecondary.play = ({ canvasElement }) =>
  testButtonClick({ canvasElement, story: SmallSecondary })
