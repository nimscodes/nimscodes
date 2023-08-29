import {IoSunnyOutline,IoMoonOutline} from 'react-icons/io5'
import PropTypes from 'prop-types'

const ModeSwitcher = ({ darkMode, onToggleMode }) => {
  return (
    <div onClick={() => onToggleMode(darkMode)} className='md:order-1 cursor-pointer flex items-center justify-center'>
      {
        darkMode ? <IoMoonOutline size={25} /> : <IoSunnyOutline size={30} />
      } 
    </div>
  )
}

ModeSwitcher.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  onToggleMode: PropTypes.func.isRequired
}

export default ModeSwitcher