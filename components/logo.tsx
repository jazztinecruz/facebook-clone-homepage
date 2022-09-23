import Image from "next/image"

const Logo = () => {
  return (
    <div className='relative w-10 h-10 cursor-pointer'>
      <Image src="/images/facebook-logo.png" layout="fill" objectFit="cover"/>
    </div>
  )
}

export default Logo