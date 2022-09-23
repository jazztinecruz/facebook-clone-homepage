interface Props {
  icon:any
  name:string
}
const LeftPanelIcon = ({icon, name}:Props) => {
  return (
    <div className='w-full flex items-center gap-2 hover:bg-fae hover:bg-opacity-60 rounded-md'>
      <div className='w-8 h-8 text-blue'>{icon}</div>
      <span className='text-sm'>{name}</span>
    </div>
  )
}

export default LeftPanelIcon