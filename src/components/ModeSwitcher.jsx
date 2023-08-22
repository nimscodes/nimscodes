import {IoSunnyOutline,IoMoonOutline} from 'react-icons/io5'

const ModeSwitcher = ({ darkMode, onToggleMode }) => {
  return (
    <div onClick={() => onToggleMode(darkMode)} className='cursor-pointer flex items-center justify-center'>
      {
        darkMode ? <IoMoonOutline size={25} /> : <IoSunnyOutline size={25} />
      } 
    </div>
  )
}

export default ModeSwitcher