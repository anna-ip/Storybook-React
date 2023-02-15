import React from "react";
import Dropdown from './Dropdown';

export default {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const PrimaryDropdown = Template.bind({});
PrimaryDropdown.args = {
  children: "Primary",
};