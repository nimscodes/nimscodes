import { FaDownload } from "react-icons/fa"

const Download = () => {
  return (
    <div className='cursor-pointer flex items-center justify-center px-4 py-3 gap-2 border-b shadow-xl border-gun-metal '>
      <span>Download Resume</span>
      <FaDownload size={15} className="text-tea-rose-red" />
    </div>
  )
}

export default Download