import React from 'react';
import { BaseButton, LoadingButton } from '../button';
import { Input } from '../input';

export default {
  title: 'Subscriptions',
};

const Template = (args) => (
  <>
    <Input variant='small' placeholder='Subscription placeholder' />
    <BaseButton {...args} />
    <LoadingButton {...args} />
  </>
);

export const Subscriptions = Template.bind({});
Subscriptions.args = {
  variant: 'primary',
  children: 'Primary',
  onCLick: () => console.log('clicked'),
};
