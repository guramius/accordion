import Desktop from '../../picture/desktop.png'
import rectangle from "../../picture/Group.png"
import shedow from "../../picture/Path.png"

const ImgContent = () => {
  return (
    <div className="relative sm-custom:top-[-200px] md:top-0 md:left-[-50px]">
      <img className="absolute top-[120px] left-[-90px] z-10" src={rectangle} alt="Rectangle" />
      <img className=" " src={Desktop} alt="Desktop" />
      <img className='absolute top-[0px]' src={shedow} alt="re" />
    </div>    
  )
}

export default ImgContent
