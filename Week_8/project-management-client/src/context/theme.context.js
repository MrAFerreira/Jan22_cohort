import { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProviderWrapper(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    console.log(theme);
    return theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProviderWrapper };
