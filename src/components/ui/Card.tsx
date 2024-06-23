import Image, { StaticImageData } from "next/image"

interface propsTypes {
  text: string
  iconUrl: string | StaticImageData
}

const Card = ({ text, iconUrl }: propsTypes) => {
  return (
    <div className="max-w-[24%] p-[15px] h-[200px] relative bg-light-1 rounded-[10px] cursor-pointer hover:bg-[#dfe4ea] transition duration-1">
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
