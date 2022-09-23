import Image from "next/image"

const Profile = () => {
  return (
    <div className='relative w-9 h-9 rounded-full'>
      <Image src="/images/profile.jpg" layout="fill" objectFit="cover" className='rounded-full cursor-pointer'/>
    </div>
  )
}

export default Profile