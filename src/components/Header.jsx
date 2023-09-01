import Logo from './Logo';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import ModeSwitcher from './ModeSwitcher';
import ContactMe from './ContactMe';
import PropTypes from 'prop-types';

const Header = ({ darkMode, onToggleMode, isMobile, activeNavItem }) => {
  return (
    <div className='sticky top-0 z-50 bg-gray-100 dark:bg-gun-metal shadow dark:text-gray-300'>
      <div className="p-5 md:px-10 md:py-0 flex items-center justify-between ">
        <Logo />
        <div className="order-2 md:order-2">
          {isMobile ? <MobileNav /> : <DesktopNav activeNavItem={activeNavItem}/>}
        </div>
        <div className="flex items-center gap-5 order-1 md:order-2">
          <ModeSwitcher darkMode={darkMode} onToggleMode={onToggleMode} />
          {!isMobile && <ContactMe />}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  onToggleMode: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  activeNavItem: PropTypes.string.isRequired
};

export default Header;
