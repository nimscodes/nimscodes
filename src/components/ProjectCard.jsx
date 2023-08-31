import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ProjectCard = ({ data }) => {
  const { name, description, image, live, github, tags } = data;

  const renderedTags = tags.map((tag, index) => {
    return (
      <span className="mr-2 text-sm" key={index}>
        <span className="text-gold-metallic">#</span>
        {tag}{' '}
      </span>
    );
  });

  return (
    <motion.a
      href={live}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.05 }}
      className="relative w-full shadow-2xl test-sm md:text-md flex flex-col overflow-hidden text-gray-200"
    >
      <div className="flex w-full">
        <img
          src={image}
          alt="image"
          className="w-full h-full object-contain transform hover:scale-[110%] transition-transform duration-300 cursor-pointer"
        />
      </div>

      <div className="absolute bottom-0 flex flex-col gap-3 w-full shadow-inner opacity-90 bg-gun-metal p-2">
        <div className="flex flex-col gap-3">
          <h1 className="font-semibold text-gold-metallic">{name}</h1>
          <p className='hidden md:flex'>{description}</p>
          <div className="hidden">{renderedTags}</div>
        </div>
        <div className="text-tea-rose-red sm:flex gap-2 sm:text-xl hidden">
          <a href={github} target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
          <a href={live} target="_blank" rel="noreferrer">
            <HiOutlineExternalLink />
          </a>
        </div>
      </div>
    </motion.a>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProjectCard;
