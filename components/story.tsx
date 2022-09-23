import Image from 'next/image'

interface Props {
  story: string
  profile: string
  name: string
}

const Story = ({ story, profile, name }: Props) => {
  return (
    <div className="relative w-[130px] h-[200px] rounded-md">
      {/* image */}
      <Image
        src={story}
        layout="fill"
        objectFit="cover"
        className="rounded-lg cursor-pointer opacity-80"
      />

      {/* name */}
      <div className="absolute bottom-2 left-3">
        <span className="text-sm text-left font-medium">{name}</span>
      </div>

      {/* profile */}
      <div className='absolute left-3 top-2 w-10 h-10 bg-blue rounded-full grid items-center justify-center'>
        <div className="relative bg-blue w-8 h-8 rounded-full ">
          <Image
            src={profile}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />

          {/* online icon */}
          <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-secondary border-opacity-80"></div>
        </div>
      </div>
    </div>
  )
}

export default Story
