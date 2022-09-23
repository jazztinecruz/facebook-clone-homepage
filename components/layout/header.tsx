import Burger from '../burger'
import Logo from '../logo'
import Search from '../search'
import {
  HomeIcon,
  PlusIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
} from '@heroicons/react/24/solid'

import {
  VideoCameraIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline'

import Icon from '../icon'
import Profile from '../profile'

const Header = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 border-[1px] border-white border-opacity-10 bg-secondary grid grid-cols-2 md:grid-cols-3 items-center py-1 px-4 z-50">
      {/* facebook logo and navbar */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 mr-2">
          <Logo />
          <Search />
        </div>
        <Burger />
      </div>

      {/* Home, marketplace, reels, people , gaming */}
      <div className="hidden md:block">
        <div className="grid grid-flow-col items-center">
          {/* home */}
          <div className="relative bg-transparent h-full grid items-center justify-center">
            <HomeIcon className="text-blue w-8 h-8" />
            <div className='absolute -bottom-2 w-full h-1 bg-blue'></div>
          </div>

          {/* reels */}
          <div className="bg-transparent hover:bg-white hover:bg-opacity-10 cursor-pointer grid justify-items-center w-full p-3 rounded-lg">
            <VideoCameraIcon className='w-7 h-7 text-white text-opacity-80'/>
          </div>

          {/* marketplace */}
          <div className="bg-transparent hover:bg-white hover:bg-opacity-10 cursor-pointer grid justify-items-center w-full p-3 rounded-lg">
            <BuildingStorefrontIcon className='w-7 h-7 text-white text-opacity-80'/>
          </div>

          {/* groups */}
          <div className="bg-transparent hover:bg-white hover:bg-opacity-10 cursor-pointer grid justify-items-center w-full p-3 rounded-lg">
            <UserGroupIcon className='w-7 h-7 text-white text-opacity-80'/>
          </div>

          {/* gaming */}
          <div className="bg-transparent hover:bg-white hover:bg-opacity-10 cursor-pointer grid justify-items-center w-full p-3 rounded-lg">
            <PuzzlePieceIcon className='w-7 h-7 text-white text-opacity-80'/>
          </div>
        </div>
      </div>

      {/* messages, notif, add, and profile */}
      <div className="flex items-center gap-2 md:ml-auto">
        <Icon icon={<PlusIcon />} />
        <Icon icon={<ChatBubbleOvalLeftEllipsisIcon />} />
        <Icon icon={<BellIcon />} />
        <Profile />
      </div>
    </nav>
  )
}

export default Header
