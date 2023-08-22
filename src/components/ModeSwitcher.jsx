import {IoSunnyOutline,IoMoonOutline} from 'react-icons/io5'

const ModeSwitcher = ({ darkMode, onToggleMode }) => {
  return (
    <div onClick={() => onToggleMode(darkMode)} className='md:order-1 cursor-pointer flex items-center justify-center'>
      {
        darkMode ? <IoMoonOutline size={20} /> : <IoSunnyOutline size={20} />
      } 
    </div>
  )
}

export default ModeSwitcher