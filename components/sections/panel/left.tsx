import LeftPanelIcon from '../../left-panel-icon'
import Profile from '../../profile'
import {
  UserGroupIcon,
  UsersIcon,
  VideoCameraIcon,
  BuildingStorefrontIcon,
  ClockIcon,
  ArrowDownCircleIcon,
} from '@heroicons/react/24/solid'
import Image from 'next/image'

const LeftPanel = () => {
  return (
    <section className="fixed top-0 left-0 bottom-0 mt-24 bg-transparent w-96 px-6 grid grid-rows-[1fr,auto] gap-10 mb-2">
      <div className="grid gap-6">
        {/* profile and Name */}
        <div className="flex items-center gap-2">
          <Profile />
          <span className="text-sm">Arial Kryselle Cruz</span>
        </div>

        {/* icons and name */}
        <LeftPanelIcon name="Friends" icon={<UsersIcon />} />
        <LeftPanelIcon name="Groups" icon={<UserGroupIcon />} />
        <LeftPanelIcon name="MarketPlace" icon={<BuildingStorefrontIcon />} />
        <LeftPanelIcon name="Watch" icon={<VideoCameraIcon />} />
        <LeftPanelIcon name="Memories" icon={<ClockIcon />} />
        <LeftPanelIcon name="See More" icon={<ArrowDownCircleIcon />} />

        {/* line */}
        <div className="w-full h-[1px] bg-white bg-opacity-40"></div>

        {/* shortcuts title */}
        <span className="font-semibold text-white text-opacity-80">Your Shortcuts</span>

        {/* shortcuts */}
        <LeftPanelIcon
          name="Facebook Group Social Media"
          icon={<UsersIcon />}
        />

        {/* omg */}
        <div className="w-full flex items-center gap-2 hover:bg-fae hover:bg-opacity-60 rounded-md">
          <div className="relative w-8 h-8 text-blue">
            <Image src="/images/omg.png" layout="fill" objectFit="cover" />
          </div>
          <span className="text-sm">OMG</span>
        </div>

        {/* blits */}
        <div className="w-full flex items-center gap-2 hover:bg-fae hover:bg-opacity-60 rounded-md">
          <div className="relative w-8 h-8 text-blue">
            <Image src="/images/blits.png" layout="fill" objectFit="cover" />
          </div>
          <span className="text-sm">Bejeweled Blitz</span>
        </div>

        {/* candy crush */}
        <div className="w-full flex items-center gap-2 hover:bg-fae hover:bg-opacity-60 rounded-md">
          <div className="relative w-8 h-8 text-blue">
            <Image src="/images/candy-crush.jpg" layout="fill" objectFit="cover" />
          </div>
          <span className="text-sm">OMG</span>
        </div>

        {/* coin master */}
        <div className="w-full flex items-center gap-2 hover:bg-fae hover:bg-opacity-60 rounded-md">
          <div className="relative w-8 h-8 text-blue">
            <Image src="/images/coin-master.jpg" layout="fill" objectFit="cover" />
          </div>
          <span className="text-sm">Coin Master</span>
        </div>
        <LeftPanelIcon name="See More" icon={<ArrowDownCircleIcon />} />
      </div>

      <div className="h-full flex items-end gap-2">
        <span className="text-xs text-white text-opacity-60">Privacy</span>
        <span className="text-xs text-white text-opacity-60">Terms</span>
        <span className="text-xs text-white text-opacity-60">Advertising</span>
        <span className="text-xs text-white text-opacity-60">Ad Choices</span>
        <span className="text-xs text-white text-opacity-60">More</span>
        <span className="text-xs text-white text-opacity-60">Meta 2022</span>
      </div>
    </section>
  )
}

export default LeftPanel
