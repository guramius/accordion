import Desktop from '../../picture/desktop.png'
import rectangle from "../../picture/Group.png"
import shedow from "../../picture/Path.png"

const ImgContent = () => {
  return (
    <div className="relative w-full h-screen">
      <img className="absolute top-0 left-0" src={rectangle} alt="Rectangle" />
      <img className="absolute top-0 left-0" src={Desktop} alt="Desktop" />
      <img className='absolute' src={shedow} alt="re" />
    </div>    
  )
}

export default ImgContent
