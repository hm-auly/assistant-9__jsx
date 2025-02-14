import React from 'react'

function Navcenter() {
    return (
        <div className=' border-2 rounded-full flex justify-between items-center md:w-[625px] lg:h-[52px] '>
            <div className='md:pl-5 pl-2 '>
                <input className='bg-none border-none outline-none py-2' type="text" placeholder='restaurant, hotel, service....' />
            </div>

            <div className='flex items-center gap-2 md:gap-5 px-2'>
                <hr className='h-9  border-[#7A7A7A] border' />
                <p className='text-[#7A7A7A]'>Singapour</p>
            </div>
            <div className='pr-1'>
                <div className='bg-[#1677BD] w-11 h-11 rounded-full text-white flex items-center justify-center'> <i class="fa-solid fa-magnifying-glass text-xl"></i> </div>
            </div>
        </div>
    )
}

export default Navcenter