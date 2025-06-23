import * as Icon from '@/assets/icons/Icons.js'
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

export default function HeaderSurv() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
          <div className='flex items-center gap-2 md:my-5'>

        <h1 className={`font-semibold text-3xl capitalize ${theme === "dark" ? "text-white" :"text-[#1E1F24] "}`}>Welcome, Reham</h1>
              <Icon.PiHandWavingDuotone className='text-3xl text-amber-400' />
          </div>
      </div>
  )
}
