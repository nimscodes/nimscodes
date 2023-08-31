import ContactMe from './ContactMe';
import Download from './Download';
import { motion } from 'framer-motion';

const LeftHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      className="relative w-full h-screen flex flex-col justify-center gap-5"
    >
      <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] transform rotate-45 shadow-2xl top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "></div>
      <span className="text-sm md:text-md py-2 text-gold-metallic">— HI, MY NAME IS</span>
      <span className="dark:text-gray-300 font-bold text-2xl sm:text-4xl md:text-5xl lg:text-7xl tracking-tighter">
        Prince Andrews <span className="text-gold-metallic">Nimako</span>,
      </span>
      <span className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-400">
        a Frontend Web Developer.
      </span>
      <p className="w-[95%] sm:w-[70%] md:w-[50%] mt-5">
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
