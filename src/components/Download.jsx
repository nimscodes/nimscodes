import { FaDownload } from 'react-icons/fa';

const Download = () => {
  const resumeFilePath = '/resume/resume1.pdf';
  return (
    <a
      href={resumeFilePath}
      download="resume1.pdf"
      className="cursor-pointer flex items-center justify-center px-4 py-3 gap-2 border-b shadow-xl border-gun-metal "
    >
      <span>Download Resume</span>
      <FaDownload size={15} className="text-tea-rose-red" />
    </a>
  );
};

export default Download;
