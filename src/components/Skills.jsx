import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { DiJavascript1 } from 'react-icons/di'

const Skills = () => {
  return (
    <div className='text-tea-rose-red w-full flex flex-row flex-wrap items-center p-5 md:p-[50px] justify-between'>
      <div className="relative flex items-center justify-center p-4 ">
        <div className="absolute inset-0 transform rotate-45 shadow-inner"></div>
        <FaHtml5 size={50} />
      </div>

      <div className="relative flex items-center justify-center p-4">
      <div className="absolute inset-0 transform rotate-45 shadow-md"></div>
        <FaCss3Alt size={50} />
      </div>
      <div className="relative flex items-center justify-center p-4">
      <div className="absolute inset-0 transform rotate-45 shadow-inner"></div>
        <DiJavascript1 size={50} />
      </div>
      <div className="relative flex items-center justify-center p-4 ">
      <div className="absolute inset-0 transform rotate-45 shadow-md"></div>
        <FaReact size={50} />
      </div>
      <div className="relative flex items-center justify-center  p-4">
      <div className="absolute inset-0 transform rotate-45 shadow-inner"></div>
        <FaNodeJs size={50} />
      </div>
    </div>
  )
}

export default Skills