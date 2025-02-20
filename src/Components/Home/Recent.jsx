import React from 'react'
import HeaderText from '../Common/HeaderText'

function Recent() {
    const RecentInfo = [
        {
            manicon: "/Images/Manicon.svg",
            titel: "Leslie sakho",
            des1: "Canada, toronto",
            starimg: "/Images/ster1.svg",
            date: `${new Date().toLocaleDateString()}`,
            des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            des3: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            img1: "/Images/R1.png",
            img2: "/Images/R2.png",
            img3: "/Images/R3.png",
            last: "Discover"

        },
        {
            manicon: "/Images/Manicon.svg",
            titel: "Chris macari",
            des1: "Singapour",
            starimg: "/Images/ster1.svg",
            date: `${new Date().toLocaleDateString()}`,
            des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            des3: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout. ",
            img1: "/Images/R4.png",
            img2: "/Images/R5.png",
            img3: "/Images/R6.png",
            last: "Discover"

        },
        {
            manicon: "/Images/Manicon.svg",
            titel: "Jojo alba",
            des1: "Kuala lumpur",
            starimg: "/Images/ster1.svg",
            date: `${new Date().toLocaleDateString()}`,
            des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            des3: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            img1: "/Images/R7.png",
            img2: "/Images/R8.png",
            img3: "/Images/R9.png",
            last: "Discover"

        },
    ]
    return (
        <section>
            <div className='px-5 max-w-[1440px] mx-auto'>
                <div className='text-3xl pt-8'>
                    <HeaderText head="Recents avtivities" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 place-content-center'>
                    {RecentInfo.map((items, i) => (
                        <div key={i} className='md:max-w-[457px] h-auto bg-[#F8F8F8] px-3 pr-3 py-3'>
                            <div className='flex flex-col gap-5'>

                                <div className='flex gap-3'>
                                    <img src={items.manicon} alt="" />
                                    <div>
                                        <h4 className='font-[600] text-[21px]'>{items.titel}</h4>
                                        <p className='text-[#5E5E5E]'>{items.des1}</p>
                                    </div>
                                </div>

                                <div className='flex gap-10'>
                                    <div className='flex gap-1'>
                                        <img src={items.starimg} alt="" />
                                        <img src={items.starimg} alt="" />
                                        <img src={items.starimg} alt="" />
                                        <img src={items.starimg} alt="" />
                                        <img src={items.starimg} alt="" />
                                    </div>
                                    <div>{items.date}</div>
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <p className='text-[#5E5E5E]'>{items.des2}</p>
                                    <p className='text-[#5E5E5E]'>{items.des3}</p>
                                </div>

                                <div className='flex flex-col gap-3'>
                                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                                        <img src={items.img1} alt="" />
                                        <img src={items.img2} alt="" />
                                        <img src={items.img3} alt="" />
                                    </div>
                                    <div >
                                        <a className='font-bold border-b border-black' href="#">{items.last}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Recent;