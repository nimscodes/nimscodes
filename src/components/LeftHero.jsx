import ContactMe from './ContactMe';
import Download from './Download';
import { motion } from 'framer-motion';

const LeftHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="relative md:w-[48%] flex flex-col justify-end gap-5 md:gap-4 mb-5"
    >
      <div className="absolute w-60 h-60 transform rotate-45 shadow-2xl md:top-[75%] md:left-[40%] top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "></div>
      <span className="text-xs md:text-md text-gray-500">— MY NAME IS</span>
      <span className="font-semibold text-3xl md:text-4xl">
        Prince Andrews <span className="text-gold-metallic">Nimako</span>
      </span>
      <span className="font-pacifico text-3xl md:text-4xl text-gray-500">
        a Frontend Web Developer
      </span>
      <p className="text-sm mt-4 w-[85%] md:w-[70%]">
        Based in the UK, I am a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <div className="flex flex-col md:items-center md:flex-row mt-20 md:mt-10 gap-4">
        <ContactMe />
        <Download />
      </div>
    </motion.div>
  );
};

export default LeftHero;
