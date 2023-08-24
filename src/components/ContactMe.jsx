import { MdOutlineMailOutline } from 'react-icons/md';

const ContactMe = () => {
  const email = 'princenims1994@gmail.com';
  const subject = 'Enquiries'

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  return (
    <a
      href={mailtoLink}
      className=" bg-gold-metallic font-semibold px-4 py-3 shadow-xl mx-1 text-black flex items-center justify-center gap-1 cursor-pointer"
    >
      <span className="text-sm">Contact Me!</span>
      <MdOutlineMailOutline size={20} />
    </a>
  );
};

export default ContactMe;
