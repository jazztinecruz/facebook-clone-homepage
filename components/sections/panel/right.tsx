import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import {
  EllipsisHorizontalIcon,
  PencilSquareIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Chat from '../../chat'

const RightPanel = () => {
  return (
    <div className='fixed top-0 right-0 bottom-0 mt-24 bg-transparent w-96 px-6 grid ml-auto gap-6'>
      <span className="font-semibold text-white text-opacity-80">
        Sponsored
      </span>

      <div className="flex items-center gap-2">
        {/* image */}
        <div className="relative w-32 h-32">
          <Image src="/images/ads.png" layout="fill" objectFit="cover" />
        </div>

        <div className='flex flex-col'>
          <span className="text-white text-opacity-80 whitespace-nowrap">Globe Telecom</span>
          <span className="text-white text-sm text-opacity-60">globe.com.ph</span>
        </div>
      </div>

      {/* line */}
      <div className="w-full h-[1px] bg-white bg-opacity-40"></div>

      {/* birthdays */}
      <span className="font-semibold text-white text-opacity-80">
        Birthdays
      </span>
      <div className="flex items-center gap-4">
        {/* image */}
        <div className="relative w-10 h-10">
          <Image src="/images/gift.png" layout="fill" objectFit="cover" />
        </div>

        <span className="text-sm text-opacity-80">
          <span className="font-semibold">Kryzelle Ombiasca</span> and{' '}
          <span className="font-semibold">5 others</span> have birthdays today.
        </span>
      </div>

      {/* line */}
      <div className="w-full h-[1px] bg-white bg-opacity-40"></div>

      {/* contacts and chats */}
      <div>
        <div className="grid grid-cols-[1fr,auto] items-center">
          <span className="font-semibold text-white text-opacity-80">
            Contacts
          </span>
          <div className="flex items-center gap-3">
            <VideoCameraIcon className="text-white  w-6 h-6 text-opacity-80 cursor-pointer" />
            <MagnifyingGlassIcon className="text-white  w-6 h-6 text-opacity-80 cursor-pointer" />
            <EllipsisHorizontalIcon className="text-white  w-6 h-6 text-opacity-80 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* chats online */}
      <Chat name="Tolga Zamora" image="/images/profile-four.jpg"/>
      <Chat name="Kailum Compton" image="/images/profile-three.jpg"/>
      <Chat name="Kirsty Randall" image="/images/profile-one.jpg"/>
      <Chat name="Kishan Whitaker" image="/images/profile-two.jpg"/>
      <Chat name="Misha Romero" image="/images/profile-four.jpg"/>
      <Chat name="Megan Clifford" image="/images/profile-one.jpg"/>
      <Chat name="Elara Flores" image="/images/profile-three.jpg"/>
      <Chat name="Amba Irvine" image="/images/profile-two.jpg"/>
      <Chat name="Kianna Hamer" image="/images/profile-four.jpg"/>

      {/* create conversation */}
      <div className='absolute right-2 bottom-6 grid items-center justify-center w-12 h-12 hover:bg-white hover:bg-opacity-40 cursor-pointer rounded-full bg-fade z-50'>
        <PencilSquareIcon className='text-white w-6 h-6'/>
      </div>
    </div>
  )
}

export default RightPanel
