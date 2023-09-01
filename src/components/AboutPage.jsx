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
      list: [
        'React',
        'Redux',
        'Tailwind CSS',
        'NodeJS',
        'ExpressJS',
        'Mongoose',
      ],
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
      label: 'sdlc',
      list: ['Agile', 'Git and GitHub', 'Mocha', 'Chai', 'Jest'],
    },
  ];

  const renderedSkills = skills.map((skill) => {
    return (
      <div key={skill.label} className="border dark:border-gray-700">
        <h3 className="border dark:border-gray-700 p-1 text-gold-metallic">
          {skill.label}
        </h3>
        <ul className="flex gap-2 p-1 items-center flex-wrap">
          {skill.list.map((language, index) => {
            return <li key={index}>{language}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <div id="about" className="h-full py-10 flex flex-col gap-20 ">
      <div className="flex h-full flex-col md:flex-row justify-between">
        <div className="w-full flex-1  md:w-[50%] flex flex-col justify-end gap-5">
          {/* <div className="absolute w-60 h-60 transform rotate-45 shadow-2xl md:top-[75%] md:left-[40%] top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "></div> */}
          <div className="flex flex-col justfiy-between gap-20 h-full ">
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.0 }}
              className="flex flex-col gap-5 h-full"
            >
              <div className="flex flex-col space-y-3 mb-10">
                <p className="text-sm md:text-md py-2 text-gold-metallic">
                  — WHO AM I?
                </p>
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter dark:text-gray-300">
                  About Me
                </h1>
              </div>
              <div className='flex flex-col gap-3 md:w-[80%]'>
                <p>
                  Hello, I{"'"}m{' '}
                  <span className="">Prince Andrews Nimako.</span>{' '}
                </p>
                <p>
                  I am a dedicated{' '}
                  <span className="text-gold-metallic">
                    frontend web developer
                  </span>{' '}
                  with a wealth of self-taught coding experience backed by a
                  rigorous 16-week intensive coding Bootcamp, driven by a
                  passion for technology and unyeilding desire to craft
                  exceptional digital experiences.
                </p>
                <p>
                  Proficient in an array of technologies from HTML to Redux, I
                  bring a unique fusion of project management insights from my
                  mechanical engineering background and the finesse of a
                  dedicated developer. Whether leading teams in production
                  environments or collaborating on dynamic web applications, I
                  {"'"}m committed to driving results and fostering innovation
                  through collaborative teamwork.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <RightHero />
      </div>
      <div className="flex flex-col gap-5">
        <span className="text-sm md:text-md py-2 text-gold-metallic">
          — SKILLS
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {renderedSkills}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
