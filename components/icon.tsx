interface Props {
  icon: any
}

const Icon = ({ icon }: Props) => {
  return (
    <div className="bg-fade hover:bg-white hover:bg-opacity-30 cursor-pointer grid justify-items-center p-2 rounded-full">
      <div className="w-5 h-5 text-white">{icon}</div>
    </div>
  )
}

export default Icon
