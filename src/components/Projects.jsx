import { HiOutlineExternalLink } from 'react-icons/hi';
import data from '../../data.json';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const renderedProjects = data.map((project) => {
    return <ProjectCard key={project.id} data={project} />;
  });

  return (
    <div id="work" className='section'>
      <div  className="h-full flex flex-col py-10 gap-10">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col space-y-3 mb-10">
            <h3 className="text-sm md:text-md text-gold-metallic">
              — LATEST WORK
            </h3>
            <h1 className="text-3xl md:text-5xl tracking-tighter font-semibold dark:text-gray-300">
              Projects{' '}
            </h1>
          </div>
          <a
            href="https://github.com/nimscodes?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1"
          >
            <span className="text-sm md:text-md">View more</span>
            <HiOutlineExternalLink
              className="text-tea-rose-red size"
              size={20}
            />
          </a>
        </div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
          {renderedProjects}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
