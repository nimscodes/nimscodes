import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const icons = [
  {
    label: 'github',
    icon: <FaGithub />,
    link: 'https://github.com/nimscodes'
  },
  {
    label: 'linkedin',
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/panimako/"
  },
  {
    label: 'instagram',
    icon: <FaInstagram />,
    link: "https://instagram.com/nims_prince"
  },
  {
    label: 'twitter',
    icon: <FaTwitter />,
    link: "https://twitter.com/hexaboy07"
  },
];

const renderedIcons = icons.map((icon) => {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      key={icon.label}
      href={icon.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon.icon}
    </motion.a>
  );
});

const SocialIcons = () => {
  return (
    <div className="flex gap-10 items-center text-2xl text-gray-400">
      {renderedIcons}
    </div>
  );
};

export default SocialIcons;
