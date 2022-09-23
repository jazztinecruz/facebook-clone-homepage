import Image from 'next/image'

interface Props {
  name: string
  image: any
}
const Chat = ({ name, image }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-8 h-8 rounded-full ">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />

        {/* online icon */}
        <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-secondary"></div>
      </div>
      <span className="text-white text-opacity-80">{name}</span>
    </div>
  )
}

export default Chat
