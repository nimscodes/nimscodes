import { useEffect, useState } from 'react';
import useDarkMode from './hooks/use-dark-mode';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  );
  const onToggleMode = (mode) => {
    setTheme(colorTheme);
    setDarkMode(!mode);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className="font-josefin min-h-screen p-5 md:py-0 bg-gray-100 dark:bg-gun-metal text-gun-metal dark:text-gray-100">
      <div className='sm:w-[90%] mx-auto'>
        <Header
          darkMode={darkMode}
          onToggleMode={onToggleMode}
          isMobile={isMobile}
        />
        <Hero isMobile={isMobile} />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}

export default App;
