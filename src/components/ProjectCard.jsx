import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const ProjectCard = ({ data }) => {
  const { name, image, live, github, tags } = data

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
      target='_blank'
      rel='noreferrer'
      whileHover={{ scale: 1.05 }}
      className="w-[350px] h-[220px] group relative flex flex-col shadow-2xl overflow-hidden"
    >
      <img
        src={image}
        alt="image"
        className="transform hover:scale-[120%] transition-transform duration-300 cursor-pointer"
      />
      <div className="w-full p-2 absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between text-gray-200 bg-black/60 ">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semi-bold">{name}</h1>
          <div className="flex flex-wrap items-center">{renderedTags}</div>
        </div>
        <div className="text-tea-rose-red flex text-xl gap-2">
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
  data: PropTypes.object.isRequired
}

export default ProjectCard;
