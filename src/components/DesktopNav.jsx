import { HiOutlineHome } from 'react-icons/hi';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom'

const DesktopNav = () => {
  const location = useLocation();

  const links = [
    { label: 'Home', path: '/', icon: <HiOutlineHome size={40} className='text-gray-400' /> },
    { label: 'About', path: '/about', icon: <BsPerson size={40} className='text-gray-400' /> },
    { label: 'Work', path: '/work', icon: <MdOutlineWorkOutline size={40} className='text-gray-400' /> },
  ];

  const active= 'border-b-2 border-tea-rose-red';

  const renderedLinks = links.map(link => {
    return (
      <li key={link.label}>
          <Link to={link.path} className={`${location.pathname === link.path && active} flex flex-col items-center cursor-pointer p-2 hover:border-b-2`}>
            {link.icon}
            <span className="text-xs">{link.label}</span>
          </Link>
      </li>
    )
  })

  return (
    <div className="flex items-center shadow-inner px-5 py-2">
      <ul className="flex gap-5 ">
        {renderedLinks}
      </ul>
     
    </div>
  );
};

export default DesktopNav;
