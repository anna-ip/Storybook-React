import React, { useState } from 'react';
import './App.css';
import search from './assets/icons/search.svg';
import { DropDownWithSubMenu } from './components/dropdown/DropDownWithSubMenu';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDropdown = () => {
    setOpen(!open);
    console.log('toggle');
  };

  const mainMenu = ['Alan', 'Karen', 'John', 'Susan'];

  return (
    <div className='App'>
      <header className='App-header'>
        <p>React Storybook</p>
      </header>
      <main className='App-header'>
        <DropDownWithSubMenu
          toggleDropdown={handleToggleDropdown}
          isOpen={open}
          icon={search}
          mainMenu={mainMenu}
          subMenu={mainMenu}
        />
      </main>
    </div>
  );
};

export default App;
