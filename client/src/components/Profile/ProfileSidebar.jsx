import React from 'react'
import {ProfileData} from '@/utils/data';
import { NavLink } from 'react-router-dom';
function ProfileSidebar() {
  return (
    <div className='bg-white h-[82vh] rounded-2xl p-[40px] flex flex-col justify-between '>
       {ProfileData.map((item, index) => {
        const Icon = item.icons; // استدعاء الـ Icon كـ Component
        const isLogout = item.name == 'Log Out';
        return (
         <NavLink
            key={index}
            to={ 
              index === 1
              ? '.'
              : `/${item.name.toLowerCase().replace(/\s+/g, '-')}`
            } // route path
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors   ${
                isActive ? 'bg-[#dbf8fa] text-[#00B7C1]' : 'text-gray-700 hover:bg-[#dbf8fa]'
              }`
            }
          >
            <Icon className={`text-2xl $ ${isLogout ? 'text-red-500' : ''}`} />
            <span className="text-sm font-medium">{item.name}</span>
          </NavLink>
        );
      })}
    </div>
  )
}

export default ProfileSidebar