import Profile from "../profile"
import { VideoCameraIcon, PhotoIcon, FaceSmileIcon } from "@heroicons/react/24/solid"

const Post = () => {
  return (
    <div className='pt-4 px-4 bg-secondary grid grid-rows-2 rounded-md'>
      {/* profile and whats on your mind */}
      <div className='grid grid-cols-[auto,1fr] gap-2 items-center border-t-0 border-l-0 border-r-0 border-b-[1px] pb-3 border-white border-opacity-10'>
        <Profile/>
        <div className='bg-fade py-2 px-4 rounded-full'>
          <span className='text-white text-opacity-60 text-sm'>Whats on your mind, Aria?</span>
        </div>
      </div>

      {/* live video , pho/video and feeling/activity */}
      <div className='grid grid-cols-3 items-center md:justify-center'>
        {/* live video */}
        <div className='flex gap-2 items-center md:justify-center'>
          <VideoCameraIcon className='w-5 h-5 text-pink-800'/>
          <span className='text-sm text-white text-opacity-80 cursor-pointer'>Live Video</span>
        </div>

        {/* photo/video */}
        <div className='flex gap-2 items-center md:justify-center'>
          <PhotoIcon className='w-5 h-5 text-green-500'/>
          <span className='text-sm text-white text-opacity-80 cursor-pointer'>Photo/Video</span>
        </div>

        {/* feeling/activity */}
        <div className='flex gap-2 items-center md:justify-center'>
          <FaceSmileIcon className='w-5 h-5 text-yellow-500'/>
          <span className='text-sm text-white text-opacity-80 cursor-pointer'>Feeling/Activity</span>
        </div>
      </div>
    </div>
  )
}

export default Post