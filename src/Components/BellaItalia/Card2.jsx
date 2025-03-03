import React, { useState } from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";
import AlsoCard from './AlsoCard';
import Footer2 from './Footer2';

function Card2() {
    const [bg, setbg] = useState(false)
    const [sbg, setsbg] = useState(false)
    const bg_click = () => {
        bg === false ? setbg(true) : setbg(false)
    }
    const fclick = () => {
        setbg(false)
    }

    const bg_click2 = () => {
        sbg === false ? setsbg(true) : setsbg(false)
    }
    const fclick2 = () => {
        setsbg(false)
    }
    const cardInfo = [
        {
            img: "/Images/Manicon.svg",
            Title: "Wei Jie",
            des1: "Singapore, Little india",
            star: "/Images/ster1.svg",
            Date: `${new Date().toDateString()}`,
            des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "/Images/Manicon.svg",
            Title: "Mei Ling",
            des1: "Singapore, Orchad boulevard",
            star: "/Images/ster1.svg",
            Date: `${new Date().toDateString()}`,
            des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "/Images/Manicon.svg",
            Title: "Wei Xiong",
            des1: "Singapore, Takashimaya",
            star: "/Images/ster1.svg",
            Date: `${new Date().toDateString()}`,
            des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "/Images/Manicon.svg",
            Title: "Ming Wei",
            des1: "Singapore, Takashimaya",
            star: "/Images/ster1.svg",
            Date: `${new Date().toDateString()}`,
            des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "/Images/Manicon.svg",
            Title: "Xin Yi",
            des1: "Singapore, Zen rooms",
            star: "/Images/ster1.svg",
            Date: `${new Date().toDateString()}`,
            des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "/Images/Manicon.svg",
            Title: "Zhi Hao",
            des1: "Singapore, Boon Keng",
            star: "/Images/ster1.svg",
            Date: `${new Date().toDateString()}`,
            des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "/Images/Manicon.svg",
            Title: "Li Hua",
            des1: "Singapore, DLLM loklok",
            star: "/Images/ster1.svg",
            Date: `${new Date().toDateString()}`,
            des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "/Images/Manicon.svg",
            Title: "Si Ying",
            des1: "Singapore, Bedemeer",
            star: "/Images/ster1.svg",
            Date: `${new Date().toDateString()}`,
            des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "/Images/Manicon.svg",
            Title: "Wei Ting",
            des1: "Singapore, Toa Payoh",
            star: "/Images/ster1.svg",
            Date: `${new Date().toDateString()}`,
            des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },

    ]
    const btnInfo = [
        {
            n5: "5",
            n4: "4",
            n3: "3",
            n2: "2",

            star: "/Images/ster1.svg",
            star2: "/Images/ster2.svg",
        },

    ]
    return (
        <section className='px-5 max-w-[1440px]'>
            <div >
                <div className='flex  gap-5 max-w-[1055px] mx-auto py-7'>
                    <div>
                        <Dropdown>
                            <DropdownTrigger>
                                <button onClick={bg_click2} className={`flex gap-2 items-center justify-center border-black border-x-2 border-y-2 rounded-full px-4 py-2 w-[128px] h-[49px] ${sbg === true ? "bg-[#5E5E5E] text-white" : "bg-none"} `} variant="bordered">{sbg === false ? <img src="/Images/btn2b.svg" alt="" /> : <img src="/Images/btn2w.svg" alt='' />}Filter</button>
                            </DropdownTrigger >
                            <DropdownMenu aria-label="Static Actions" className='bg-[#FFFFFF] pl-3 shadow-md rounded-md hover-text-[#8F8F8F] w-[331px]
    ' onClick={fclick} >

                                <DropdownItem onClick={fclick2} className='' key="new">
                                    <div className='flex justify-between items-center'>
                                        <p className='text-[22px] font-bold  py-2'>filter by rating</p>
                                        <button className='bg-gray-300 px-2.5 py-1 rounded-full hover:bg-gray-200'><i class="fa-solid fa-xmark"></i></button>
                                    </div>
                                    <div className='flex justify-between items-start'>

                                        <div>
                                            {btnInfo.map(({ n5, n4, n3, n2, star, star2 }, i) => (
                                                <div key={i}>
                                                    <div className='flex items-center gap-3'>
                                                        <div>
                                                            <p className='text-[#E8A641] font-bold text-2xl'>{n5}</p>
                                                        </div>
                                                        <div className='flex gap-1 '>
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                        </div>
                                                    </div >


                                                    <div className='flex items-center gap-3'>
                                                        <div>
                                                            <p className='text-[#E8A641] font-bold text-2xl'>{n4}</p>
                                                        </div>
                                                        <div className='flex gap-1 '>
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star2} alt="" />
                                                        </div>
                                                    </div>


                                                    <div className='flex items-center gap-3'>
                                                        <div>
                                                            <p className='text-[#E8A641] font-bold text-2xl'>{n3}</p>
                                                        </div>
                                                        <div className='flex gap-1 '>
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star2} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star2} alt="" />
                                                        </div>
                                                    </div>


                                                    <div className='flex items-center gap-3'>
                                                        <div>
                                                            <p className='text-[#E8A641] font-bold text-2xl'>{n2}</p>
                                                        </div>
                                                        <div className='flex gap-1 '>
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star2} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star2} alt="" />
                                                            <img className='h-[21.17px] w-[21.17px]' src={star2} alt="" />
                                                        </div>
                                                    </div>


                                                </div>
                                            ))}
                                        </div>

                                    </div></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>

                    <div>
                        <Dropdown>
                            <DropdownTrigger>
                                <button onClick={bg_click} className={`flex gap-2 items-center justify-center border-black border-x-2 border-y-2 rounded-full px-4 py-2 w-[128px] h-[49px] ${bg === true ? "bg-[#5E5E5E] text-white" : "bg-none"} `} variant="bordered">{bg === false ? <img src="/Images/btnicon.svg" alt="" /> : <img src="/Images/bgBtn.svg" alt='' />} Sort</button>
                            </DropdownTrigger >
                            <DropdownMenu aria-label="Static Actions" className='bg-[#FFFFFF] pl-3 shadow-md rounded-md hover-text-[#8F8F8F] 
    ' onClick={fclick} >
                                <DropdownItem onClick={fclick} className='' key="new"><div className='flex justify-between items-center'>
                                    All feedbacks <div><button className='bg-gray-300 px-2.5 py-1 rounded-full hover:bg-gray-200'><i class="fa-solid fa-xmark"></i></button></div>
                                </div></DropdownItem>
                                <DropdownItem onClick={fclick} key="copy">Highest rated</DropdownItem>
                                <DropdownItem onClick={fclick} key="edit">oldest rated</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>

                </div>

                <div className=' max-w-[1055px] max-h-[210px] mx-auto  flex flex-col gap-5'>
                    {cardInfo.map((items, i) => (
                        <div key={i} className='bg-[#F8F8F8] flex items-start gap-5 py-3 px-8 rounded-lg'>
                            <div className='mt-3'>
                                <img src={items.img} alt="" />
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-col gap-1.5'>
                                    <div>
                                        <h3 className='text-xl font-bold'>{items.Title}</h3>
                                        <p className='text-[#5E5E5E]'>{items.des1}</p>
                                    </div>
                                    <div className='flex gap-1'>
                                        <img src={items.star} alt="" />
                                        <img src={items.star} alt="" />
                                        <img src={items.star} alt="" />
                                        <img src={items.star} alt="" />
                                        <img src={items.star} alt="" />
                                        <div className='pl-3'>
                                            <p>{items.Date}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className='max-w-lg text-sm text-[#5E5E5E]'>{items.des2}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                <div className='text-center py-5'>
                    <button className='bg-[#1677BD] Nbtn text-white py-2 px-4 rounded-full'>Show more reviews</button>
                </div>
                <div>
                {/* AlsoCard section */}
                    <AlsoCard />

                {/* Footer section  */}
                 <Footer2 />
                </div>
                </div>

            </div>

        </section>
    )
}

export default Card2