import Accordion from '../../atoms/accordion/Accordion'
import ImgContent from '../../atoms/imgContent/ImgContent'

const MaincCard = () => {
  return (
    <div className='flex sm-custom:flex-col  md:flex-row sm-custom:gap-0 gap-[80px] rounded-[23px] bg-white shadow-[0px_50px_50px_-20px_rgba(53,18,122,0.50)] pt-[65px] pr-[95px] pb-[83px] sm-custom:px-[50px]  sm-custom:py-[50px]'>
      <ImgContent />
      <Accordion />
    </div>
  )
}

export default MaincCard