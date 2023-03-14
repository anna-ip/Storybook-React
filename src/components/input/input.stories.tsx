import React from "react";
import {Input} from './index'
import Search from '../../assets/icons/search-black.svg'
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Input', module);

stories.add('Small Input', () => {
  return <Input variant="small" placeholder="Small size"/>;
});

stories.add('Medium Input', () => {
  return <Input variant="medium" placeholder="Medium size"/>;
});

stories.add('Full width Input', () => {
  return <Input variant="large" placeholder="Full width size"/>;
});

stories.add('Input with Icon', () => {
  return <Input variant="small" placeholder="Input with Icon" src={`${Search}`}/>;
});

stories.add('Input with label', () => {
  return <Input variant="small" label='Name' placeholder="Input with label" src={`${Search}`} />;
});

stories.add('Input with validation', () => {
  return <Input variant="small" validation='* Name is required' placeholder="Input with label" src={`${Search}`} isValid={true}/>;
});

