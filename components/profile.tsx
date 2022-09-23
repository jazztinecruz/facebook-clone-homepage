import Image from "next/image"

const Profile = () => {
  return (
    <div className='relative w-10 h-10 rounded-full'>
      <Image src="/images/profile.jpg" layout="fill" objectFit="cover" className='rounded-full cursor-pointer'/>
    </div>
  )
}

export default Profile