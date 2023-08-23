import { FaDownload } from "react-icons/fa"

const Download = () => {
  return (
    <div className='cursor-pointer flex items-center justify-center p-3 gap-2 text-tea-rose-red border-b border-tea-rose-red hover:text-white hover:bg-tea-rose-red'>
      <span>Download Resume</span>
      <FaDownload />
    </div>
  )
}

export default Download