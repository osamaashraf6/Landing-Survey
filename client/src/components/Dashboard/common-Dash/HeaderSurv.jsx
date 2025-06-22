import * as Icon from '@/assets/icons/Icons.js'

export default function HeaderSurv() {
  return (
    <div>
          <div className='flex items-center gap-2 md:my-5'>

              <h1 className='font-semibold text-3xl text-[#1E1F24] capitalize'>Welcome, Reham</h1>
              <Icon.PiHandWavingDuotone className='text-3xl text-amber-400' />
          </div>
      </div>
  )
}
