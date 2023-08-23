import desktopProf from '../assets/my-profile.png';
import mobileProf from '../assets/my-profile-mobile.png';

const RightHero = ({ isMobile }) => {
  return (
    <div className="flex items-center justify-center md:w-[48%] shadow-inner h-auto border-b border-gold-metallic">
      <div className="relative z-0">
        <div className="absolute w-40 h-40 transform rotate-45 shadow-inner top-[20%] "></div>
        <div className="absolute w-40 h-40 transform rotate-45 shadow-xl top-[35%]"></div>
        <div className="absolute w-40 h-40 transform rotate-45 shadow-inner top-[55%]"></div>
        <div className="absolute w-40 h-40 transform rotate-45 shadow-inner top-[20%] right-0 "></div>
        <div className="absolute w-40 h-40 transform rotate-45 shadow-xl top-[35%] right-0"></div>
        <div className="absolute w-40 h-40 transform rotate-45 shadow-inner top-[55%] right-0"></div>
        <img
          src={isMobile ? mobileProf : desktopProf}
          alt="profile"
          className="h-full w-full object-cover relative z-10"
        />
      </div>
    </div>
  );
};

export default RightHero;