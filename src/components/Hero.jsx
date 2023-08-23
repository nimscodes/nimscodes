import LeftHero from './LeftHero';
import RightHero from './RightHero';


import './hero.css'

const Hero = ({ isMobile }) => {
  return (
    <div className="flex flex-col md:flex-row py-10 md:py-0 justify-between mt-10 md:mt-0">
      <LeftHero />
      <RightHero isMobile={isMobile} />
    </div>
  );
};

export default Hero;
