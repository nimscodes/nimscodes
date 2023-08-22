import Logo from './Logo';
import MobileNav from './MobileNav';
import ModeSwitcher from './ModeSwitcher';

const Header = ({ darkMode, onToggleMode }) => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <ModeSwitcher darkMode={darkMode} onToggleMode={onToggleMode} />
      <MobileNav />
    </div>
  );
};

export default Header;
