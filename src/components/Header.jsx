import Logo from './Logo';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import ModeSwitcher from './ModeSwitcher';
import ContactMe from './ContactMe';
import PropTypes from 'prop-types'

const Header = ({ darkMode, onToggleMode, isMobile }) => {
  return (
    <div className="flex items-center justify-between ">
      <Logo />
      <div className='order-2 md:order-2'>
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </div>
      <div className='flex items-center gap-5 order-1 md:order-2'>
        <ModeSwitcher darkMode={darkMode} onToggleMode={onToggleMode} />
       {!isMobile && <ContactMe />}
      </div>
    </div>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  onToggleMode: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
}

export default Header;
