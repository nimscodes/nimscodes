import { FaLaptopCode } from 'react-icons/fa'

const Logo = () => {
  return (
    <div className='flex items-center text-2xl md:text-4xl font-pacifico'>
      <span>nims</span>
      <FaLaptopCode size={25} className='flex self-end text-gold-metallic' />
      <span>codes</span>
    </div>
  )
}

export default Logo