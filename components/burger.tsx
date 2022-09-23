import { Bars3Icon } from '@heroicons/react/24/solid'

const Burger = () => {
  return (
    <div className='md:hidden'>
      <div className="group hover:bg-fade hover:p-2 grid hover:justify-center hover:items-center rounded-md">
        <Bars3Icon className="w-8 h-8 text-white text-opacity-60 cursor-pointer" />
      </div>
    </div>
  )
}

export default Burger
