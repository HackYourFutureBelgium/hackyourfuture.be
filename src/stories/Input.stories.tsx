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
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    id: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    error: {
      control: {
        type: "text",
      },
    },
    isRequired: {
      control: {
        type: "boolean",
      },
    },
  },
}

export default meta

const Template: Story<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  placeholder: "Enter your name...",
  type: "text",
  name: "name",
  id: "name",
}

export const WithLabel = Template.bind({})

WithLabel.args = {
  placeholder: "Enter your name...",
  type: "text",
  name: "name",
  id: "name",
  label: "Name",
}

export const WithError = Template.bind({})
WithError.args = {
  placeholder: "Enter your name...",
  type: "text",
  name: "name",
  id: "name",
  label: "Name",
  error: "This field is required",
  isRequired: true,
}
