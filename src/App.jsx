import { useState } from "react";
import useDarkMode from "./hooks/use-dark-mode";
import Header from "./components/Header";

function App() {

  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  );
  const onToggleMode = (mode) => {
    setTheme(colorTheme);
    setDarkMode(!mode)
  }

  return (
    <div className="min-h-screen mx-auto p-3 bg-gray-100 dark:bg-gun-metal text-gun-metal dark:text-gray-100">
      <Header darkMode={darkMode} onToggleMode={onToggleMode} />
    
    </div>
  )
}

export default App
