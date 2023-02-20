import React from "react";
import {Dropdown} from './Dropdown';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Dropdown', module);

stories.add('Search dropdown', () => {
  return <Dropdown/>
});
