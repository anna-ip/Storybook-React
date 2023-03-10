import {useState} from 'react';
import "./App.css";
import { BaseDropdown } from './components/dropdown/BaseDropdown';
import search from './assets/icons/search.svg';

const App = () => {
  const [open, setOpen] = useState(false)

  const handleToggleDropdown = () => {
    setOpen(!open);
    console.log('toggle')
  };
 

  return (
    <div className="App">
      <header className="App-header">
        <p>React Storybook</p>
      </header>
      <main className="App-header">
        <BaseDropdown toggleDropdown={handleToggleDropdown} isOpen={open} icon={search}/>
      </main>
    </div>
  );
}

export default App;