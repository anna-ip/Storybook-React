import {useState} from 'react';
import "./App.css";
import { LoadingButton } from './components/button';
import icon from './assets/icons/loading.svg';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
    }, 900)
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>React Storybook</p>
      </header>
      <main className="App-header">
        <LoadingButton isLoading={isLoading} icon={icon} onClick={handleOnClick}/>
      </main>
    </div>
  );
}

export default App;
