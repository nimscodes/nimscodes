import desktopProf from '../assets/my-profile.png';
import mobileProf from '../assets/my-profile-mobile.png';
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const RightHero = ({ isMobile }) => {
  return (
    <motion.div className="overflow-hidden shadow-md flex rounded-full md:rounded-none items-center justify-center md:w-[48%] md:shadow-inner h-auto border-b border-gold-metallic">
      <div className="relative z-0 w-full h-full flex items-center justify-center">
        <div className="absolute w-40 h-40 transform rotate-45 shadow-inner top-[20%] "></div>
        <div className="absolute w-40 h-40 transform rotate-45 shadow-xl top-[35%]"></div>
        <div className="absolute w-40 h-40 transform rotate-45 shadow-inner top-[55%]"></div>
        <div className="absolute w-40 h-40 transform rotate-45 shadow-inner top-[20%] right-0 "></div>
        <div className="absolute w-40 h-40 transform rotate-45 shadow-xl top-[35%] right-0"></div>
        <div className="absolute w-40 h-40 transform rotate-45 shadow-inner top-[55%] right-0"></div>
        <img
          src={isMobile ? mobileProf : desktopProf}
          alt="profile"
          className="w-[250px] md:w-full object-cover relative z-10"
        />
      </div>
    </motion.div>
  );
};

RightHero.propTypes = {
  isMobile: PropTypes.bool.isRequired
}

export default RightHero;
