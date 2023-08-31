import { HiOutlineHome } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineWorkOutline } from 'react-icons/md';
// import {  useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const DesktopNav = () => {
  // const location = useLocation();

  const links = [
    {
      label: 'Home',
      path: '/',
      icon: <HiOutlineHome size={30} className="text-gray-400" />,
    },
    {
      label: 'About',
      path: '#about',
      icon: <BsPerson size={30} className="text-gray-400" />,
    },
    {
      label: 'Work',
      path: '#work',
      icon: <MdOutlineWorkOutline size={30} className="text-gray-400" />,
    },
  ];

  const active = 'border-b-2 border-tea-rose-red';

  const renderedLinks = links.map((link) => {
    return (
      <motion.li
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        key={link.label}
      >
        <a
          href={link.path}
          className={`${
            location.pathname === link.path && active
          } flex flex-col items-center cursor-pointer p-2 hover:border-b-2`}
        >
          {link.icon}
          <span>{link.label}</span>
        </a>
      </motion.li>
    );
  });

  return (
    <div className="flex items-center px-5 py-2">
      <ul className="flex gap-5 md:gap-10 ">{renderedLinks}</ul>
    </div>
  );
};

export default DesktopNav;
