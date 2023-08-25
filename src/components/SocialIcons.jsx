import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const icons = [
  {
    label: 'github',
    icon: <FaGithub />,
  },
  {
    label: 'linkedin',
    icon: <FaLinkedin />,
  },
  {
    label: 'instagram',
    icon: <FaInstagram />,
  },
  {
    label: 'twitter',
    icon: <FaTwitter />,
  },
];

const renderedIcons = icons.map((icon) => {
  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      key={icon.label}
      href="https://github.com/nimscodes"
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
