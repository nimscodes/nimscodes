import LeftHero from './LeftHero';
import desktopProf from '../assets/my-profile.png';
import mobileProf from '../assets/my-profile-mobile.png';

const Hero = ({ isMobile }) => {
  return (
    <div className="flex flex-col md:flex-row py-10 md:py-0 justify-between mt-10 md:mt-0">
      <LeftHero />
      <div className="flex items-center justify-center md:w-[48%] h-auto">
        <img src={isMobile ?  mobileProf : desktopProf} alt="profile" className='h-full w-full object-cover'/>
      </div>
    </div>
  );
};

export default Hero;
