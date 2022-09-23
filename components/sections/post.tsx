import Image from 'next/image'
import {
  GlobeAltIcon,
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/solid'

import {
  HandThumbDownIcon,
  ChatBubbleOvalLeftIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'

interface Props {
  name: string
  hours: string
  caption: string
  like: string
  share: string
  comments: string
  profile: string
  postPhoto: string
}

const PostedPost = ({
  name,
  hours,
  caption,
  like,
  share,
  comments,
  profile,
  postPhoto,
}: Props) => {

  return (
    <div className="grid grid-rows-[auto,1fr,auto] gap-6 bg-secondary pt-4 rounded-md">
      {/* profile info and captions */}
      <div className="flex flex-col gap-2 px-4">
        <div className="grid grid-cols-[auto,1fr,auto] gap-4 items-center">
          {/* profile*/}
          <div className="w-10 h-10 rounded-full relative cursor-pointer">
            <Image
              src={profile}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          {/* name and privacy */}
          <div className="flex flex-col">
            <span className="text-sm text-white font-semibold">
              {name}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white text-opacity-40">{hours}h</span>
              <GlobeAltIcon className="w-3 h-3 text-white text-opacity-40" />
            </div>
          </div>

          {/* options */}
          <EllipsisHorizontalIcon className="w-8 h-8 text-white text-opacity-80 cursor-pointer" />
        </div>
        <span className="text-white text-sm">
          {caption}
        </span>
      </div>

      {/* pictures */}
      <div className="w-full h-96 relative">
        <Image src={postPhoto} layout="fill" objectFit="cover" />
      </div>

      {/* reacts , comment , share */}
      <div className="px-4 flex flex-col">
        <div className="grid grid-cols-[auto,1fr] border-t-0 border-l-0 border-r-0 border-b-[1px] pb-3 border-white border-opacity-10 pb-4">
          <div className="flex items-center gap-1">
            <HandThumbUpIcon className="text-blue w-5 h-5" />
            <span className="text-sm text-white text-opacity-60">{like}</span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <span className="text-sm text-white text-opacity-60">
              {comments} Comments
            </span>
            <span className="text-sm text-white text-opacity-60">{share} Shares</span>
          </div>
        </div>

        {/* like comments share buttons */}
        <div className="grid grid-flow-col items-center py-1">
          {/* Like */}
          <div className="bg-transparent hover:bg-white hover:bg-opacity-10 w-full p-3 rounded-md cursor-pointer h-full grid grid-flow-col gap-2 items-center justify-center">
            <HandThumbDownIcon className="text-white text-opacity-60 w-5 h-5 rotate-180" />
            <span className="text-white text-opacity-60 text-sm font-medium">
              Like
            </span>
          </div>

          {/* Comments */}
          <div className="bg-transparent hover:bg-white hover:bg-opacity-10 w-full p-3 rounded-md cursor-pointer h-full grid grid-flow-col gap-2 items-center justify-center">
            <ChatBubbleOvalLeftIcon className="text-white text-opacity-60 w-5 h-5" />
            <span className="text-white text-opacity-60 font-medium text-sm">
              Comment
            </span>
          </div>

          {/* Share */}
          <div className="bg-transparent hover:bg-white hover:bg-opacity-10 w-full p-3 rounded-md cursor-pointer h-full grid grid-flow-col gap-2 items-center justify-center">
            <ShareIcon className="text-white text-opacity-60 w-5 h-5" />
            <span className="text-white text-opacity-60  font-medium text-sm">
              Share
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostedPost
