import { expect } from "@storybook/jest"
import { Meta, Story } from "@storybook/react"
import { userEvent, within } from "@storybook/testing-library"
import React from "react"
import Input, { InputProps } from "../components/ui/input/InputV2"

const meta: Meta<InputProps> = {
  title: "Input",
  component: Input,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [
          "text",
          "email",
          "password",
          "number",
          "tel",
          "url",
          "search",
          "date",
          "time",
          "datetime-local",
          "month",
          "week",
          "color",
        ],
      },
      description: "The type of input to render. Only used for input.",
    },
    placeholder: {
      control: {
        type: "text",
      },
      description: "The placeholder text for the input.",
    },
    id: {
      control: {
        type: "text",
      },
      description: "The id of the input. This is required for accessibility.",
    },
    label: {
      control: {
        type: "text",
      },
      description: "The label for the input.",
    },
    error: {
      control: {
        type: "text",
      },
      description:
        "The error message for the input. If this is passed, the input will be in an error state.",
    },
    isRequired: {
      control: {
        type: "boolean",
      },
      description: "Whether or not the input is required.",
    },
    as: {
      control: {
        type: "select",
        options: ["input", "textarea"],
      },
      description:
        "The type of input to render. If not passed, defaults to input.",
    },
    rows: {
      control: {
        type: "number",
      },
      description:
        "The number of rows for the textarea. Only used for textarea.",
    },
    resize: {
      control: {
        type: "select",
        options: ["none", "both", "horizontal", "vertical"],
      },
      description:
        "The resize property for the textarea. Only used for textarea.",
    },
  },
}

export default meta

const Template: Story<InputProps> = args => <Input {...args} />

interface TestArgs {
  canvasElement: HTMLElement
  story: Story<InputProps>
  value: string
}

const testInput = async ({ canvasElement, story, value }: TestArgs) => {
  const canvas = within(canvasElement)

  const input = await canvas.getByPlaceholderText(
    story.args?.placeholder as string
  )

  expect(input).toBeInTheDocument()

  await userEvent.type(input, value)
  expect(input).toHaveValue(value)

  await userEvent.clear(input)
  expect(input).toHaveValue("")

  await userEvent.click(input)
  expect(input).toHaveFocus()

  input.blur()

  return input
}

export const Default = Template.bind({})

Default.args = {
  placeholder: "Enter your name...",
  type: "text",
  id: "name",
}

Default.play = async ({ canvasElement }) => {
  testInput({ canvasElement, story: Default, value: "John Doe" })
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  placeholder: "Enter your name...",
  type: "text",
  id: "name",
  label: "Name",
}

WithLabel.play = async ({ canvasElement }) => {
  const input = await testInput({
    canvasElement,
    story: WithLabel,
    value: "John Doe",
  })

  const canvas = within(canvasElement)

  const label = await canvas.getByText(WithLabel.args?.label as string, {
    selector: "label",
  })

  expect(label).toBeInTheDocument()
  expect(label).toHaveAttribute("for", WithLabel.args?.id as string)

  await label.click()
  expect(input).toHaveFocus()

  input.blur()
}

export const WithError = Template.bind({})
WithError.args = {
  placeholder: "Enter your name...",
  type: "text",
  id: "name",
  label: "Name",
  error: "This field is required",
  isRequired: true,
}

WithError.play = async ({ canvasElement }) => {
  await testInput({
    canvasElement,
    story: WithError,
    value: "John Doe",
  })

  const canvas = within(canvasElement)

  const error = await canvas.getByText(WithError.args?.error as string, {
    selector: "span",
  })

  expect(error).toBeInTheDocument()
}

export const AsTextArea = Template.bind({})

AsTextArea.args = {
  placeholder: "Enter your name...",
  id: "description",
  label: "Description",
  as: "textarea",
  rows: 6,
  resize: "none",
}

AsTextArea.play = async ({ canvasElement }) => {
  const input = await testInput({
    canvasElement,
    story: AsTextArea,
    value: "John Doe",
  })

  expect(input).toHaveAttribute("rows", AsTextArea.args?.rows?.toString())
  expect(input).toHaveStyle(`resize: ${AsTextArea.args?.resize}`)
  expect(input.tagName).toBe("TEXTAREA")
}
