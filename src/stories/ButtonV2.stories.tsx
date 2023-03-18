import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "../components/ui/button/ButtonV2";

export default {
  title: "ButtonV2",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    variant: {
      options: ["default", "primary", "secondary"],
      control: { type: "radio" },
    },
  },
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "primary",
};


export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "secondary",
};

export const Small = Template.bind({});
Small.args = {
  children: "Small Button",
  size: "small",
};

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  children: "Small Primary Button",
  size: "small",
  variant: "primary",
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  children: "Small Secondary Button",
  size: "small",
  variant: "secondary",
};
