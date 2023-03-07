import React, {useState} from "react";
import {BaseButton, LoadingButton} from "./index";
import { storiesOf } from '@storybook/react';
import loadingIcon from '../../assets/icons/loading.svg'

const stories = storiesOf('Button', module);

stories.add('Primary Button', () => {
  const [value, setValue] = useState('Hello');

  const setChange = () => {
    setValue(value === 'Hello' ? 'Bye' : 'Hello');
  };

  return <BaseButton onClick={setChange} variant='primary'>{value}</BaseButton>;
});

stories.add('Secondary Button', () => {
  const [value, setValue] = useState('Hello');

  const setChange = () => {
    setValue(value === 'Hello' ? 'Bye' : 'Hello');
  };

  return <BaseButton onClick={setChange} variant='secondary'>{value}</BaseButton>;
});

stories.add('Success Button', () => {
  const [value, setValue] = useState('Hello');

  const setChange = () => {
    setValue(value === 'Hello' ? 'Bye' : 'Hello');
  };

  return <BaseButton onClick={setChange} variant='success'>{value}</BaseButton>;
});

stories.add('Danger Button', () => {
  const [value, setValue] = useState('Hello');

  const setChange = () => {
    setValue(value === 'Hello' ? 'Bye' : 'Hello');
  };

  return <BaseButton onClick={setChange} variant='danger'>{value}</BaseButton>;
});

stories.add('Loading Button', () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
    }, 900)
  };

  return <LoadingButton icon={loadingIcon} onClick={handleOnClick} variant='danger' isLoading={isLoading} loadingColor='green'/>;
});


