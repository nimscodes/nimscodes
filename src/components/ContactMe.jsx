import { MdOutlineMailOutline } from 'react-icons/md';
import { motion } from 'framer-motion';

const ContactMe = ({ ...rest }) => {
  const email = 'princenims1994@gmail.com';
  const subject = 'Enquiries';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  return (
    <motion.a
      {...rest}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      whileTap={{ scale: 0.9 }}
      href={mailtoLink}
      className=" bg-gold-metallic font-semibold px-4 py-3 shadow-xl mx-1 text-black flex items-center justify-center gap-1 cursor-pointer"
    >
      <span className="text-sm">Contact Me!</span>
      <MdOutlineMailOutline size={20} />
    </motion.a>
  );
};

export default ContactMe;
