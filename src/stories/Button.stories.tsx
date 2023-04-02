import React from "react"
import { Story, Meta } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
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

// The following code is used to test the button component

interface TestExpectedStyles {
  "background-color": string
  color: string
  padding: string
  gap: string
}

interface TestArgs {
  canvasElement: HTMLElement
  story: Story<ButtonProps>
  expectedStyles: TestExpectedStyles
}

const testButton = async ({
  canvasElement,
  story,
  expectedStyles,
}: TestArgs) => {
  // Get canvas element
  const canvas = within(canvasElement)

  // Get button element
  const button = await canvas.getByText(story.args?.children as string, {
    selector: "button",
  })

  // Test button text
  expect(button.innerText).toBe(story.args?.children as string)

  // Test button ExpectedStyles
  Object.entries(expectedStyles).forEach(([key, value]) => {
    expect(button).toHaveStyle(`${key}: ${value}`)
  })

  // Test button click event
  await userEvent.click(button)
  expect(button).toHaveFocus()
}

// Stories for the button component

export const Default = Template.bind({})

Default.args = {
  children: "Default Button",
}

Default.play = async ({ canvasElement }) =>
  testButton({
    canvasElement,
    story: Default,
    expectedStyles: {
      "background-color": "rgba(0, 0, 0, 0)",
      color: "#ffffff",
      padding: "10px 32px",
      gap: "16px",
    },
  })

export const Primary = Template.bind({})
Primary.args = {
  children: "Primary Button",
  variant: "primary", 
}

Primary.play = async ({ canvasElement }) =>
  testButton({
    canvasElement,
    story: Primary,
    expectedStyles: {
      "background-color": "#295bf6",
      color: "#ffffff",
      padding: "10px 32px",
      gap: "16px",
    },
  })

export const Secondary = Template.bind({})
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
}

Secondary.play = async ({ canvasElement }) =>
  testButton({
    canvasElement,
    story: Secondary,
    expectedStyles: {
      "background-color": "rgba(255, 255, 255, 0.1);",
      color: "#ffffff",
      padding: "10px 32px",
      gap: "16px",
    },
  })

export const SmallDefault = Template.bind({})
SmallDefault.args = {
  children: "Small Default Button",
  size: "small",
}

SmallDefault.play = async ({ canvasElement }) =>
  testButton({
    canvasElement,
    story: SmallDefault,
    expectedStyles: {
      "background-color": "rgba(0, 0, 0, 0)",
      color: "#ffffff",
      padding: "10px 24px",
      gap: "10px",
    },
  })

export const SmallPrimary = Template.bind({})
SmallPrimary.args = {
  children: "Small Primary Button",
  size: "small",
  variant: "primary",
}

SmallPrimary.play = async ({ canvasElement }) =>
  testButton({
    canvasElement,
    story: SmallPrimary,
    expectedStyles: {
      "background-color": "#295bf6",
      color: "#ffffff",
      padding: "10px 24px",
      gap: "10px",
    },
  })

export const SmallSecondary = Template.bind({})
SmallSecondary.args = {
  children: "Small Secondary Button",
  size: "small",
  variant: "secondary",
}

SmallSecondary.play = async ({ canvasElement }) =>
  testButton({
    canvasElement,
    story: SmallSecondary,
    expectedStyles: {
      "background-color": "rgba(255, 255, 255, 0.1);",
      color: "#ffffff",
      padding: "10px 24px",
      gap: "10px",
    },
  })
