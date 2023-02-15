import React from "react";
import Input from "./Input";
import search from '../../../assets/icons/search.svg'

export default {
  title: "Input",
  component: Input,
  argTypes: {
    variant: {
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => <Input {...args} />;
const TemplateWithIcon = (args) => <Input {...args}/>;

export const SmallInput = Template.bind({});
SmallInput.args = {
  variant: "small",
  placeholder: "Small size",
};
export const MediumInput = Template.bind({});
MediumInput.args = {
  variant: "medium",
  placeholder: "Medium size",
};
export const LargeInput = Template.bind({});
LargeInput.args = {
  variant: "large",
  placeholder: "Large size",
};
export const InputWithIcon = Template.bind({});
InputWithIcon.args = {
  variant: "large",
  placeholder: "Large size with Icon",
  src:`${search}`,
};

// export const SmallInput = () => (
//   <Input type="text" variant="small" placeholder="Small size" />
// );
