import Logo from './Logo';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <div className="static w-full bottom-0 z-50 bg-gray-100 dark:text-gray-300 dark:bg-gun-metal border-t border-gray-200 dark:border-gray-700 mt-20">
      <div className="p-5 md:p-10 pb-2 flex flex-col ">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="text-xs text-gray-500">
              Frontend Web Developer and Aspiring Full Stack Developer
            </p>
          </div>
          <SocialIcons />
        </div>
        <div className="flex justify-center mt-5 text-xs">
          ©Copyright 2023. made by @nimscodes
        </div>
      </div>
    </div>
  );
};

export default Footer;
