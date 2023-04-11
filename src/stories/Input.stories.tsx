import React from "react"
import { Meta, Story } from "@storybook/react"
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

export const Default = Template.bind({})

Default.args = {
  placeholder: "Enter your name...",
  type: "text",
  id: "name",
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  placeholder: "Enter your name...",
  type: "text",
  id: "name",
  label: "Name",
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

export const AsTextArea = Template.bind({})

AsTextArea.args = {
  placeholder: "Enter your name...",
  id: "description",
  label: "Description",
  as: "textarea",
  rows: 6,
  resize: "none",
}
