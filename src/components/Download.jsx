import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Download = () => {
  const resumeFilePath = '/resume/resume1.pdf';
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      href={resumeFilePath}
      download="resume1.pdf"
      className="cursor-pointer flex items-center justify-center py-3 px-6 gap-2 border-b shadow-xl border-gun-metal "
    >
      <span>Download Resume</span>
      <FaDownload size={15} className="text-tea-rose-red" />
    </motion.a>
  );
};

export default Download;
