import { HiOutlineExternalLink } from 'react-icons/hi';
import data from '../../data.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const renderedProjects = data.map((project) => {
    return <ProjectCard key={project.id} data={project} />;
  });

  return (
    <div id='work' className="flex flex-col gap-10 py-10">
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col space-y-3">
          <h3 className="text-xs text-gray-500 py-2">— LATEST WORK</h3>
          <h1 className="text-4xl font-semibold">Projects </h1>
        </div>
        <a
          href="https://github.com/nimscodes?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          <span className="font-pacifico text-gray-500">View more</span>
          <HiOutlineExternalLink className="text-tea-rose-red size" size={20} />
        </a>
      </div>

      <div className="flex justify-between gap-10 flex-wrap">{renderedProjects}</div>
    </div>
  );
};

export default Projects;
