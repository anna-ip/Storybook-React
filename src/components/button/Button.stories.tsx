import React, {useState} from "react";
import {Button} from "./Button";
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Button', module);

stories.add('Primary Button', () => {
  const [value, setValue] = useState('Hello');

  const setChange = () => {
    setValue(value === 'Hello' ? 'Bye' : 'Hello');
  };

  return <Button onClick={setChange} variant='primary'>{value}</Button>;
});

stories.add('Secondary Button', () => {
  const [value, setValue] = useState('Hello');

  const setChange = () => {
    setValue(value === 'Hello' ? 'Bye' : 'Hello');
  };

  return <Button onClick={setChange} variant='secondary'>{value}</Button>;
});

stories.add('Success Button', () => {
  const [value, setValue] = useState('Hello');

  const setChange = () => {
    setValue(value === 'Hello' ? 'Bye' : 'Hello');
  };

  return <Button onClick={setChange} variant='success'>{value}</Button>;
});

stories.add('Danger Button', () => {
  const [value, setValue] = useState('Hello');

  const setChange = () => {
    setValue(value === 'Hello' ? 'Bye' : 'Hello');
  };

  return <Button onClick={setChange} variant='danger'>{value}</Button>;
});


