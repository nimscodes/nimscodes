import LeftHero from './LeftHero';
import RightHero from './RightHero';
import PropTypes from 'prop-types'

const Hero = ({ isMobile }) => {
  return (
    <div id='home' className="flex flex-col md:flex-row py-10 md:py-0 justify-between mt-10 md:mt-0">
      <LeftHero />
      <RightHero isMobile={isMobile} />
    </div>
  );
};

Hero.propTypes = { 
  isMobile: PropTypes.bool.isRequired,
}

export default Hero;
