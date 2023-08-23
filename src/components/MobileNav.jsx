import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { HiOutlineHome } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineWorkOutline, MdOutlineMailOutline } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={`relative z-40`}>
      <button
        className="fixed z-50 top-6 right-5 focus:outline-none text-3xl"
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
          className={`fixed z-1000 top-0 right-0 h-full w-4/5 p-5  bg-gray-100 text-black dark:bg-gun-metal dark:text-white transform transition-transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mt-[80px] sm:w-3/4 mx-auto">
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href="#home"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <HiOutlineHome size={25} className="text-tea-rose-red" />
                  <span className="text-sm">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <BsPerson size={25} className="text-tea-rose-red" />
                  <span className="text-sm">About</span>
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="flex items-center  gap-3 cursor-pointer"
                >
                  <MdOutlineWorkOutline
                    size={25}
                    className="text-tea-rose-red"
                  />
                  <span className="text-sm">Work</span>
                </a>
              </li>
              
            </ul>
            <div className="flex flex-col gap-5 mt-[70px]">
              <a
                href="#home"
                className="bg-gold-metallic font-semibold p-2 mx-1 text-black flex items-center justify-center gap-1 cursor-pointer"
              >
                <span className="text-sm">Contact Me!</span>
                <MdOutlineMailOutline size={20}  />
              </a>
              <div className='flex justify-between items-center text-2xl mx-2'>
                <FaGithub/>
                <FaLinkedin />
                <FaInstagram />
                <FaTwitter /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
