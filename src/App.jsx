import { useEffect, useState } from "react";
import useDarkMode from "./hooks/use-dark-mode";
import Header from "./components/Header";

function App() {
  const [isMobile, setIsMobile] =  useState(window.innerWidth < 768)
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  );
  const onToggleMode = (mode) => {
    setTheme(colorTheme);
    setDarkMode(!mode)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  return (
    <div className="min-h-screen mx-auto p-3 md:py-0 bg-gray-100 dark:bg-gun-metal text-gun-metal dark:text-gray-100">
      <Header darkMode={darkMode} onToggleMode={onToggleMode} isMobile={isMobile} />
    
    </div>
  )
}

export default App
