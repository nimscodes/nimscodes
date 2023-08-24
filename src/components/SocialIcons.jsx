import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex gap-10 items-center text-2xl text-gray-400">
      <a
        href="https://github.com/nimscodes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/panimako/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.instagram.com/nims_prince/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com/hexaboy07"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialIcons;
