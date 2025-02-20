import { Button } from '@heroui/react'
import React from 'react'
import Navcenter from './navcenter'
import { NavLink, Outlet } from 'react-router-dom'
import Navlink from './Navlink'

function MyNavber() {
    return (
      <section className='lg:w-[1440px] mx-auto '> 
        <section className='border-b gap-5 pt-5 md:pt-3 px-2 md:px-0  lg:w-[1440px] lg:h-[105px]  flex flex-col items-center justify-center'>
            <div className='flex justify-between items-center container mx-auto'>
                <div className=''>
                    <img className='' src="/Logo.svg" alt="" />
                </div>
                <div className='hidden md:block'>
               
           <Navcenter />
                </div>
                <div className='flex items-center gap-2 md:gap-5'>
                    <i class="fa-solid fa-globe text-2xl hidden md:block"></i>
                    <Button className='Nbtn bg-[#1E1E1E] md:text-[15.5px] text-[8px] mb-4 md:mb-0  md:w-[233px] md:h-[47px] h-[30px] '>MyFeedback for business</Button>
                </div>
            </div>
            <div className='block md:hidden'>
                <Navcenter />
            </div>
           
     </section>
        {/* <Navlink /> */}
        <Outlet />
     </section>  
    )
}

export default MyNavber