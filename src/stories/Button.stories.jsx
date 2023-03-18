import React from 'react';

import { LegacyButton } from './LegacyButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/LegacyButton',
  component: LegacyButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <LegacyButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'LegacyButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'LegacyButton',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'LegacyButton',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'LegacyButton',
};
