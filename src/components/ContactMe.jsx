import { MdOutlineMailOutline } from 'react-icons/md';

const ContactMe = () => {
  return (
    <a
      href="#home"
      className=" bg-gold-metallic font-semibold px-4 py-3 shadow-xl mx-1 text-black flex items-center justify-center gap-1 cursor-pointer"
    >
      <span className="text-sm">Contact Me!</span>
      <MdOutlineMailOutline size={20} />
    </a>
  );
};

export default ContactMe;
