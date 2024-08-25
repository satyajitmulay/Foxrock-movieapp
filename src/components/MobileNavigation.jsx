import React from 'react'
import { mobileNavigation } from '../constants/navigation'
import { NavLink } from 'react-router-dom'

export default function MobileNavigation() {
  return (
    <section className='lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-2xl fixed w-full bottom-0 z-40'>
        <div className='flex items-center justify-between h-full text-neutral-400'>
            {
                mobileNavigation.map((nav,index)=>{
                    return(
                        <NavLink 
                        key={nav.label+"mobileNavigation"}
                        to={nav.href}
                        className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}>
                            <div className='text-2xl'>
                                {nav.icon}
                            </div>
                            <p className='text-sm'>{nav.label}</p>
                        </NavLink>
                    )
                })
            }
        </div>
    </section>
  )
}
