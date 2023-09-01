import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { HiOutlineHome } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineWorkOutline } from 'react-icons/md';
import ContactMe from './ContactMe';
import SocialIcons from './SocialIcons';
import { motion } from 'framer-motion'

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClick = () => {
    setIsMenuOpen(false)
  }
  const links = [
    {
      label: 'Home',
      path: '#home',
      icon: <HiOutlineHome size={25} className="text-tea-rose-red" />,
    },
    {
      label: 'About',
      path: '#about',
      icon: <BsPerson size={25} className="text-tea-rose-red" />,
    },
    {
      label: 'Work',
      path: '#work',
      icon: <MdOutlineWorkOutline size={25} className="text-tea-rose-red" />,
    },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <li key={link.label}>
        <a href={link.path} onClick={handleClick} className="flex items-center gap-3 cursor-pointer">
          {link.icon}
          <span className="text-sm">{link.label}</span>
        </a>
      </li>
    );
  });

  return (
    <motion.div className={`relative z-40`}>
      <button
        className="fixed z-50 top-5 right-5 focus:outline-none text-3xl"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <IoClose /> : <HiMenuAlt3 />}
      </button>

      {/* Naviation Menu */}
      <div
        className={
          isMenuOpen
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/50'
            : ''
        }
      >
        <div
          className={`fixed z-1000 top-0 right-0 h-full w-4/5 p-5  bg-gray-100 text-black dark:bg-gun-metal dark:text-white transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mt-[80px] sm:w-3/4 mx-auto">
            <ul className="flex flex-col gap-6">{renderedLinks}</ul>
            <div className="flex flex-col gap-10 mt-[70px]">
              <ContactMe onClick={handleClick} />
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
