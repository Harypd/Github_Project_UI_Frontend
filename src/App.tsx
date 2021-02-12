import React, { useEffect, useState } from 'react';
import RepositorySearch from './pages/repository-search';
import './assets/styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import './i18n';

// Possible theme values
// Note: every component maintains it's own state for dark and light theme
export enum Theme {
  light = 'light',
  dark = 'dark'
};

interface IContext {
  theme: string,
  toggleTheme: React.Dispatch<React.SetStateAction<void>>
}

export const ThemeContext = React.createContext({
  theme: Theme.light,
  toggleTheme: () => { }
} as IContext);

/* 
  Created this intermediate component for integration of router or any similar package if required
  This would be relevant in case of application growing further.
  Also using ToastContainer to render a toast in case of error. This toast will be rendered right in the center of the screen.
*/
const App = () => {
  const [theme, setTheme] = useState(Theme.light);
  const toggleTheme = () => {
    const selectedTheme = theme === Theme.light ? Theme.dark : Theme.light;
    localStorage.setItem('theme', selectedTheme);
    setTheme(selectedTheme);
  };

  useEffect(() => {
    const selectedTheme = localStorage.getItem('theme') === Theme.light ? Theme.light : Theme.dark;
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  }, [])
  // Suspense is mandatory here as it allows the component to load the required language JSON
  return (
    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Suspense fallback="loading...">       
          <RepositorySearch />
          <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Suspense>
      </ThemeContext.Provider>
   
  );
};

export default App;
