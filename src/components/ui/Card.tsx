import Image, { StaticImageData } from "next/image"

interface propsTypes {
  text: string
  iconUrl: string | StaticImageData
  handleClick: (promptWord: string) => Promise<void>
}

const Card = ({ text, iconUrl, handleClick }: propsTypes) => {
  return (
    <div
      onClick={() => handleClick(text)}
      className="max-w-[24%] p-[15px] h-[200px] min-h-[120px] relative bg-light-1 rounded-[10px] cursor-pointer hover:bg-[#dfe4ea] transition duration-1 max-phone:h-auto max-phone:max-w-[100%] max-tablet:max-w-[48%]  max-tablet:h-auto max-tablet:min-h-[160px]"
    >
      <p className="text-[#585858]">{text}</p>
      <Image
        className="p-[5px] w-[35px] absolute bottom-[10px] right-[10px] bg-white  rounded-[50%]"
        src={iconUrl}
        alt="icon"
      />
    </div>
  )
}

export default Card
