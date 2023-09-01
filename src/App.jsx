import { useEffect, useState } from 'react';
import useDarkMode from './hooks/use-dark-mode';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeNavItem, setActiveNavItem] = useState('home');
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

    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop - 10
          
        ) {
          setActiveNavItem(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div>
      <div className="flex flex-col font-space-mono w-full min-h-screen bg-gray-100 dark:bg-gun-metal text-gun-metal dark:text-gray-400">
        <Header
          activeNavItem={activeNavItem}
          darkMode={darkMode}
          onToggleMode={onToggleMode}
          isMobile={isMobile}
        />
        <div className="w-full flex-1 sm:w-[90%] mx-auto space-y-20 p-5 md:py-0">
          <HomePage isMobile={isMobile} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
