import React, { useState } from 'react';
import { BaseDropdown } from './index';
import { storiesOf } from '@storybook/react';
import search from '../../assets/icons/search.svg';
import { DropDownWithSubMenu } from './DropDownWithSubMenu';

const stories = storiesOf('Dropdown', module);

const mainMenu = ['Alan', 'Karen', 'John', 'Susan'];

stories.add('Base dropdown', () => {
  const [open, setOpen] = useState(false);

  const handleToggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div style={{ width: 'fit-content' }}>
      <BaseDropdown toggleDropdown={handleToggleDropdown} isOpen={open} icon={search} />
    </div>
  );
});

stories.add('Dropdown with Sub menu', () => {
  const [open, setOpen] = useState(false);

  const handleToggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div style={{ width: 'fit-content' }}>
      <DropDownWithSubMenu
        toggleDropdown={handleToggleDropdown}
        isOpen={open}
        icon={search}
        mainMenu={mainMenu}
        subMenu={mainMenu}
      />
    </div>
  );
});
