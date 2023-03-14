import React, {useState} from "react";
import {BaseDropdown} from './index';
import { storiesOf } from '@storybook/react';
import search from '../../assets/icons/search.svg';

const stories = storiesOf('Dropdown', module);

const mainMenu = [
  'Alan',
  'Karen',
  'John', 
  'Susan',
];


stories.add('Base dropdown', () => {
  const [open, setOpen] = useState(false);

  const handleToggleDropdown = () => {
    setOpen(!open);
  };

  return  <BaseDropdown toggleDropdown={handleToggleDropdown} isOpen={open} icon={search} mainMenu={mainMenu} subMenu={mainMenu}/>
});




