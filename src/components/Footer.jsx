import Logo from './Logo';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full flex flex-col pt-5 pb-2 border-t border-gray-200 dark:border-gray-700">
      <div className="flex flex-col gap-3 md:flex-row md:justify-between">
        <div className="flex flex-col gap-5">
          <Logo />
          <p className="text-xs text-gray-400">
            Frontend Web Developer and Aspiring Full Stack Developer
          </p>
        </div>
        <div className="text-gray-400 flex text-2xl gap-10 md:self-end py-2">
          <a
            href="https://github.com/nimscodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/panimako/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/nims_prince/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/hexaboy07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-10 text-sm">
        ©Copyright 2023. made by @nimscodes
      </div>
    </div>
  );
};

export default Footer;
