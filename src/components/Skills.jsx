import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { motion } from 'framer-motion'

const Skills = () => {
  const skillsIcons = [
    {
      label: 'html5',
      icon: <FaHtml5 size={40} />,
      shadow: 'shadow-inner'
    },
    {
      label: 'css',
      icon: <FaCss3Alt size={40} />,
      shadow: 'shadow-md'
    },
    {
      label: 'js',
      icon: <DiJavascript1 size={40} />,
      shadow: 'shadow-inner'
    },
    {
      label: 'react',
      icon: <FaReact size={40} />,
      shadow: 'shadow-md'
    },
    {
      label: 'tailwind',
      icon: <SiTailwindcss size={40} />,
      shadow: 'shadow-inner'
    },
    {
      label: 'node',
      icon: <FaNodeJs size={40} />,
      shadow: 'shadow-md'
    },
  ];

  const renderedIcons = skillsIcons.map((icon) => {
    return (
      <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        key={icon.label}
        className="relative flex items-center justify-center p-4 cursor-pointer"
      >
        <div className={`absolute inset-0 transform rotate-45 ${icon.shadow}`}></div>
        {icon.icon}
      </motion.div>
    );
  });

  return (
    <div className="text-gray-400 w-full flex flex-row flex-wrap items-center p-4 md:p-[50px] justify-between">
      {renderedIcons}
    </div>
  );
};

export default Skills;
