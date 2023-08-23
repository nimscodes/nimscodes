import { HiOutlineHome } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineWorkOutline, MdOutlineMailOutline } from 'react-icons/md';

const DesktopNav = () => {
  return (
    <div className="flex items-center shadow-inner px-5 py-2">
      <ul className="flex gap-8 ">
        <li>
          <a href="#home" className="flex flex-col items-center cursor-pointer p-1">
            <HiOutlineHome size={40} className="" />
            <span className="text-xs">Home</span>
          </a>
        </li>
        <li>
          <a href="#about" className="flex flex-col items-center p-1 cursor-pointer">
            <BsPerson size={40} className="font-bold" />
            <span className="text-xs">About</span>
          </a>
        </li>
        <li>
          <a href="#work" className="flex flex-col items-center p-1 cursor-pointer">
            <MdOutlineWorkOutline size={40} className="" />
            <span className="text-xs">Work</span>
          </a>
        </li>
      </ul>
     
    </div>
  );
};

export default DesktopNav;
