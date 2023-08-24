import { useEffect, useState } from 'react';
import useDarkMode from './hooks/use-dark-mode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import Header from './components/Header';
import Footer from './components/Footer'

const App = () => {
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
    <Router>
      <div className="font-josefin min-h-screen p-5 md:py-0 bg-gray-100 dark:bg-gun-metal text-gun-metal dark:text-gray-100">
        <div className="relative sm:w-[90%] h-full mx-auto space-y-20">
          <Header
            darkMode={darkMode}
            onToggleMode={onToggleMode}
            isMobile={isMobile}
          />
          <Routes>
            <Route exact path="/" element={<HomePage isMobile={isMobile} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<ProjectsPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
