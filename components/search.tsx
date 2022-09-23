import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Search = () => {
  return (
    <>
      {/* mobile */}
      <div className="lg:hidden">
        <div className="bg-fade grid justify-items-center p-3 rounded-full">
          <MagnifyingGlassIcon className="w-5 h-5 text-white cursor-pointer" />
        </div>
      </div>

      {/* laptop */}
      <div className="hidden lg:block">
        <div className="bg-fade grid grid-flow-col items-center justify-start gap-2 px-6 py-2 pr-24 rounded-full">
          <MagnifyingGlassIcon className="w-5 h-5 text-white text-opacity-60" />
          <p className='text-white text-sm text-opacity-60'>Search Facebook</p>
        </div>
      </div>
    </>
  )
}

export default Search
