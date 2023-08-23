import data from '../../data.json'
import ProjectCard from './ProjectCard';

const Projects = () => {

  const renderedProjects = data.map(project => {
    return <ProjectCard key={project.id} data={project} />
  })
  
  return (
    <div className='flex flex-col gap-5 my-[50px] py-10'>
      <div className='space-y-3'>
        <h3 className='text-xs text-gray-500'>— LATEST WORK</h3>
        <h1 className='text-4xl font-semibold'>Projects </h1>
      </div>
      <div className='flex gap-20 flex-wrap'>
        {renderedProjects}
      </div>
      
    </div>
  )
}

export default Projects