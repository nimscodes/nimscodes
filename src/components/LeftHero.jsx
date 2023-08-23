import ContactMe from './ContactMe';
import Download from './Download';

const LeftHero = () => {
  return (
    <div className="md:w-[48%] flex flex-col justify-end gap-3 mb-5">
      <span className="text-xs md:text-md text-gray-400 dark:text-gray-600">
        —— MY NAME IS
      </span>
      <span className="font-semibold text-4xl md:text-6xl">
        Prince <span className="text-gold-metallic">Nimako</span>
      </span>
      <span className="font-pacifico text-3xl md:text-4xl text-gray-500">
        a Frontend Developer
      </span>
      <p className="text-sm mt-4 w-[85%] md:w-[70%]">
        Based in the UK, I am a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <div className="flex flex-col md:flex-row mt-8 gap-4">
        <ContactMe />
        <Download />
      </div>
    </div>
  );
};

export default LeftHero;
