import { useEffect, useState } from 'react';
import useDarkMode from './hooks/use-dark-mode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <div className="flex flex-col font-space-mono w-full min-h-screen bg-gray-100 dark:bg-gun-metal text-gun-metal dark:text-gray-100">
        <Header
          darkMode={darkMode}
          onToggleMode={onToggleMode}
          isMobile={isMobile}
        />
        <div className="w-full flex-1 sm:w-[90%] mx-auto space-y-20 p-5 md:py-0">
          <Routes>
            <Route exact path="/" element={<HomePage isMobile={isMobile} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<ProjectsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
