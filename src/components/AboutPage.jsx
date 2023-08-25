import RightHero from './RightHero';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const skills = [
    {
      label: 'languages',
      list: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'jQuery', 'Python'],
    },
    {
      label: 'frameworks/libraries',
      list: ['React', 'Redux', 'Tailwind CSS', 'NodeJS', 'ExpressJS, Mongoose'],
    },
    
    { label: 'database', list: ['MongoDB', 'PostgreSQL'] },
    {
      label: 'tools',
      list: [
        'Docker',
        'Kubernetes',
        'Skaffold',
        'Google Cloud',
        'RESTful APIs',
      ],
    },
    {
      label: 'SDLC',
      list: ['Agile', 'Git and GitHub', 'Mocha', 'Chai', 'Jest'],
    },
  ];

  const renderedSkills = skills.map((skill) => {
    return (
      <div key={skill.label} className="border dark:border-gray-700">
        <h3 className="border dark:border-gray-700 p-1 text-gold-metallic">{skill.label}</h3>
        <ul className="flex gap-2 p-1 items-center flex-wrap text-gray-400">
          {skill.list.map((language, index) => {
            return <li key={index}>{language}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col md:flex-row py-10 md:py-0 justify-between">
        <div className="relative md:w-[48%] flex flex-col justify-end gap-5 md:gap-4 mb-5">
          <div className="absolute w-60 h-60 transform rotate-45 shadow-2xl md:top-[75%] md:left-[40%] top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "></div>
          <div className="flex flex-col justfiy-between gap-20 h-full ">
            <div className="flex-1 flex flex-col gap-4">
              <h1 className="text-4xl">About Me</h1>
              <p className="text-xs text-gray-400">—WHO AM I?</p>
            </div>
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.0 }}
              className="flex flex-col gap-5 dark:text-gray-400"
            >
              <p>
                Hello, I{"'"}m{' '}
                <span className="text-gray-400 dark:text-gray-600">
                  Prince Andrews Nimako
                </span>{' '}
              </p>
              <p>
                I am a dedicated{' '}
                <span className="text-gold-metallic">
                  frontend web developer
                </span>{' '}
                with a wealth of self-taught coding experience backed by a
                rigorous 16-week intensive coding Bootcamp, driven by a passion
                for technology and unyeilding desire to craft exceptional
                digital experiences.
              </p>
              <p>
                Proficient in an array of technologies from HTML to Redux, I
                bring a unique fusion of project management insights from my
                mechanical engineering background and the finesse of a dedicated
                developer. Whether leading teams in production environments or
                collaborating on dynamic web applications, I{"'"}m committed to
                driving results and fostering innovation through collaborative
                teamwork.
              </p>
            </motion.div>
          </div>
        </div>
        <RightHero />
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-xs text-gray-400">—SKILLS</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {renderedSkills}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
