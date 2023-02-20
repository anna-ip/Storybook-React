import React from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import Dropdown from '../dropdown/Dropdown';

export default {
  title: "Subscriptions",
};

const Template = (args) => (
  <>
    <Input variant="small" placeholder="Subscription placeholder" />
    <Button {...args}/>
    <Dropdown/>
  </>
);

export const Subscriptions = Template.bind({});
Subscriptions.args = {
  variant: "primary",
  children: "Primary",
  onCLick: () => console.log('clicked'),
};
