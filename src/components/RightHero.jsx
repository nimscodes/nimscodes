import desktopProf from '../assets/my-profile.png';
import mobileProf from '../assets/my-profile-mobile.png';
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const RightHero = ({ isMobile }) => {
  return (
    <motion.div className="flex self-center md:w-[35%] shadow-md">
      <div className="relative z-0 w-full h-full flex items-center justify-center">
        <div className="absolute w-20 h-40 transform rotate-45 shadow-inner top-[20%] left-0"></div>
        <div className="absolute w-20 h-40 transform rotate-45 shadow-xl top-[35%] left-0"></div>
        <div className="absolute w-20 h-40 transform rotate-45 shadow-inner top-[55%] left-0"></div>
        <div className="absolute w-20 h-40 transform rotate-45 shadow-inner top-[20%] right-0 "></div>
        <div className="absolute w-20 h-40 transform rotate-45 shadow-xl top-[35%] right-0"></div>
        <div className="absolute w-20 h-40 transform rotate-45 shadow-inner top-[55%] right-0"></div>
        <img
          src={isMobile ? mobileProf : desktopProf}
          alt="profile"
          className="w-[50%] md:w-[70%] z-10 border-b border-gold-metallic object-cover"
        />
      </div>
    </motion.div>
  );
};

RightHero.propTypes = {
  isMobile: PropTypes.bool.isRequired
}

export default RightHero;
