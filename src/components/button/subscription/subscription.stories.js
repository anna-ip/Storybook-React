import React from "react";
import Button from "../Button";
import Input from "../input/Input";

export default {
  title: "Subscriptions",
};

const Template = (args) => (
  <>
    <Input variant="small" placeholder="Subscription placeholder" />
    <Button {...args} />
  </>
);

export const Subscriptions = Template.bind({});
Subscriptions.args = {
  variant: "primary",
  children: "Primary",
};
