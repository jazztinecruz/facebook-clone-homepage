import Image from 'next/image'
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid'
import Story from '../story'

const Dashboard = () => {
  return (
    <section className="relative bg-secondary py-2 px-4 grid grid-rows-[auto,1fr] rounded-md">
      {/* Stories, reels and Rooms */}
      <div className="grid grid-flow-col items-center border-t-0 border-l-0 border-r-0 border-b-[1px] pb-1 border-white border-opacity-10">
        {/* border */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white bg-opacity-10"></div>
        {/* Stories */}
        <div className="relative bg-transparent h-full grid items-center justify-center">
          <span className="text-blue text-sm font-medium ">Stories</span>
          <div className="absolute -bottom-2 w-full h-1 bg-blue"></div>
        </div>

        {/* reels */}
        <div className="bg-transparent hover:bg-white hover:bg-opacity-10 cursor-pointer grid justify-items-center w-full p-3 rounded-lg">
          <span className="text-white text-opacity-80 font-medium  text-sm">
            Reels
          </span>
        </div>

        {/* Rooms */}
        <div className="bg-transparent hover:bg-white hover:bg-opacity-10 cursor-pointer grid justify-items-center w-full p-3 rounded-lg">
          <span className="text-white text-opacity-80  font-medium text-sm">
            Rooms
          </span>
        </div>
      </div>

      <div className="my-6 grid grid-flow-col gap-2 w-full overflow-hidden">
        {/* create story */}
        <div className="w-[130px] h-[200px] rounded-md grid grid-rows-[1fr,auto] border-1 border-secondary">
          {/* image */}
          <div className="relative w-full h-full">
            <Image
              src="/images/profile.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-tl-lg rounded-tr-lg"
            />
          </div>

          {/* text */}
          <div className=" bg-secondary w-full py-2 pt-6 px-4 grid items-center justify-center">
            <span className="text-sm">Create Story</span>
          </div>

          {/* add icon */}
          <div className="absolute bottom-[68px] left-16 bg-secondary w-10 h-10 rounded-full grid justify-center items-center">
            <div className="bg-blue rounded-full w-8 h-8 grid justify-center items-center">
              <PlusIcon className="w-6 h-6 text-white"/>
            </div>
          </div>
        </div>

        <Story
          name="Angel Buenavista"
          profile="/images/profile-one.jpg"
          story="/images/story-one.jpg"
        />
        <Story
          name="Daysie Fortuno"
          profile="/images/profile-two.jpg"
          story="/images/story-two.jpg"
        />
        <Story
          name="Zack Huelos"
          profile="/images/profile-three.jpg"
          story="/images/story-three.jpg"
        />
        <Story
          name="Barbie Ascunsion"
          profile="/images/profile-four.jpg"
          story="/images/story-four.jpg"
        />
        <Story
          name="Lexi Pateros"
          profile="/images/profile-one.jpg"
          story="/images/story-one.jpg"
        />
      </div>
      
      {/* left arrow */}
      <div className='absolute right-1 bottom-28 grid items-center justify-center w-12 h-12 rounded-full bg-fade z-50 cursor-pointer'>
        <ChevronRightIcon className='text-white w-6 h-6'/>
      </div>
    </section>
  )
}

export default Dashboard
