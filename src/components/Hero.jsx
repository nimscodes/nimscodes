import LeftHero from './LeftHero';
// import RightHero from './RightHero';
// import PropTypes from 'prop-types'

const Hero = () => {
  return (
    <div id='home' className="flex flex-col md:flex-row justify-between">
      <LeftHero />
      {/* <RightHero isMobile={isMobile} /> */}
    </div>
  );
};

// Hero.propTypes = { 
//   isMobile: PropTypes.bool.isRequired,
// }

export default Hero;
