import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

function useDarkMode() {
  return useContext(DarkModeContext);
}

function DarkModeProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
}

export { useDarkMode, DarkModeProvider };
