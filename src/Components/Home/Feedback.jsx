import React from 'react'
import HeaderText from '../Common/HeaderText'

function Feedback() {
    return (
        <section className='bg-[#F2F2F2] max-w-[1479px] '>
            <div className='flex flex-col-reverse md:flex-row gap-10 justify-center items-center py-5 px-5'>
                <div className='flex gap-5 flex-col '>
                    <div className='max-w-md text-[26px]'>
                        <HeaderText head="MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business" />
                    </div>
                    <p className='text-[#5E5E5E] max-w-sm'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
                    <div>
                        <button className='Nbtn bg-black px-5 py-2'>Explore MyFeedback business</button>
                    </div>
                </div>
                <div className='max-w-[612px] h-auto '>
                    <img className='w-full' src="/Images/feadback.svg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Feedback