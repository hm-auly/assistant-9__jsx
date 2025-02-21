import React, { useState } from 'react'


function Discover() {
    const cardInfo = [
        {
            img1: "/Images/sec6.svg",
        },
        {
            img1: "/Images/sec2.svg",
        },
        {
            img1: "/Images/sec3.svg",
        },
        {
            img1: "/Images/sec4.svg",
        },
        {
            img1: "/Images/sec5.svg",
        },
    ]
    const cardInfo2 = [
        {
            img1: "/Images/sec2.svg",
        },
        {
            img1: "/Images/sec3.svg",
        },
        {
            img1: "/Images/sec4.svg",
        },
        {
            img1: "/Images/sec5.svg",
        },
    ]

    const [curent, setcurent] = useState(0)

    const info = cardInfo[curent];

    const hendnext = () => {
        setcurent((prv) => (
            prv === 0 ? cardInfo.length - 1 : prv - 1
        ))
    }
    const hendpprv = () => {
        setcurent((prv) => (
            prv === cardInfo.length - 1 ? 0 : prv + 1
        ))
    }

    const [open, setopen] = useState(false)

    const clickopen = () => {
        setopen(true)
    }
    const clickclose = () => {
        setopen(false)
    }


    return (
        <section className={`${open === true ? "bg-[#10101094]" : "bg-white"} px-5 py-5 pt-20`}>
            <div className='md:pl-28'>
                <h1 className='font-[600] text-[34px]'>Discover our magnificent place in photos</h1>
                <p className='text-[#5E5E5E] max-w-2xl'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing.</p>
            </div>
            <div>


                <div className='flex gap-3 justify-center flex-col md:flex-row py-5'>

                    <div className='p-0 relative'>
                        <img src="/Images/sec1.svg" alt="" />

                        <div className='flex items-center gap-3 absolute bottom-6 bg-white left-10 px-4  py-1 rounded-full hover:bg-gray-300 duration-300'>
                            <button onClick={clickopen} className='flex items-center gap-3' >
                                <img src="/Images/dot.svg" alt="" />
                                <p className='font-[500]'>View all photos (7)</p>

                            </button>


                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <img src="/Images/sec2.svg" alt="" />
                        <img src="/Images/sec3.svg" alt="" />
                        <img src="/Images/sec4.svg" alt="" />
                        <img src="/Images/sec5.svg" alt="" />
                    </div>
                </div>
            </div>

            {open === true && <div className='px-5  absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-white lg:w-[1032px] w-full  mx-auto  py-3 pb-7'>
                <div className='p-0 absolute top-[-10px] right-[-10px] '>
                    <button onClick={clickclose} className='bg-white px-2.5 rounded-full py-1 text-center'><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div className='relative lg:w-[973px] mx-auto py-5 '>
                    <div className='lg:w-[973px] lg:h-[490px]  overflow-hidden'>
                        <img className='w-full bg-cover' src={info.img1} alt="" />
                    </div>
                    <div className='px-5 flex gap-5 absolute bottom-5 left-1/2 transform -translate-x-1/2 items-center mb-5'>
                        <button onClick={hendnext} className='bg-white px-3.5 py-3.5 flex items-center justify-center hover:bg-gray-500  rounded-full' ><i class="fa-solid fa-arrow-left"></i></button>
                        <div className='flex gap-1.5'>
                            {cardInfo.map((_, i) => (
                                <div key={i} >
                                    <button onClick={() => setcurent(i)} className={`w-2 h-2 rounded-full ${curent === i ? "bg-[#FFFFFF]" : "bg-[#FFFFFF4A]"}`}>

                                    </button>
                                </div>
                            ))}
                        </div>
                        <button onClick={hendpprv} className='bg-white px-3.5 hover:bg-gray-500 py-3.5 flex items-center justify-center rounded-full'><i class="fa-solid fa-arrow-right "></i></button>
                    </div>
                </div>

                <div className='flex gap-4 lg:w-[973px] mx-auto'>
                    {cardInfo2.map((item, i) => (
                        <div key={i}>
                            <img src={item.img1} alt="" />
                        </div>
                    ))}
                </div>

            </div>}



        </section>
    )
}

export default Discover