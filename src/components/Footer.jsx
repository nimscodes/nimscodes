import Logo from './Logo';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <div className="flex flex-col p-5 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col gap-3 md:flex-row md:justify-between">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="text-xs text-gray-400">
            Frontend Web Developer and Aspiring Full Stack Developer
          </p>
        </div>
        <SocialIcons />
      </div>
      <div className="flex justify-center mt-10 text-sm">
        ©Copyright 2023. made by @nimscodes
      </div>
    </div>
  );
};

export default Footer;
