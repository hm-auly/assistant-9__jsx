import React from 'react'

function Overall() {
    const overallInfo = [
        {
            img: "/Images/overall.svg",
            des: "Overall rating",
            des2: "834 Reviews",
            star: "/Images/ster1.svg"
        }
    ]
    return (
        <section className='max-w-[1440px] px-5 border-b-2 border-[#DCDCDC]'>
            <section className='  max-w-[1120px] mx-auto py-10'>
                <div className='flex flex-col md:flex-row max-w-[930px] justify-between gap-5'>
                    <div>
                        {overallInfo.map((item, i) => (
                            <div key={i}>
                                <div className='flex items-start gap-5'>
                                    <img src={item.img} alt="" />
                                    <div className='flex  gap-4'>

                                        <div className='flex flex-col gap-5'>

                                            <div className='flex flex-col '>
                                                <h6 className='text-[32px] font-bold'>{item.des}</h6>
                                                <p className='text-[19px]'>{item.des2}</p>


                                            </div>

                                            <div className='flex gap-2 '>
                                                <img src={item.star} alt="" />
                                                <img src={item.star} alt="" />
                                                <img src={item.star} alt="" />
                                                <img src={item.star} alt="" />
                                                <img src={item.star} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div>

                        <div className='flex items-center gap-5'>
                            <p className='text'>5_stars</p>
                            <div className='w-full md:w-[487px] h-[9px] bg-[#D9D9D9] p-0 relative rounded-full'>
                                <p className='w-full md:w-[487px] absolute top-0 left-0 h-[9px] rounded-full bg-[#1677BD]'></p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            <p>0_stars</p>
                            <div className='w-full md:w-[487px] h-[9px] bg-[#D9D9D9] p-0 relative rounded-full'>
                                <p className='w-[220px] md:w-[270px] absolute top-0 left-0 h-[9px] rounded-full bg-[#1677BD]'></p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            <p>0_stars</p>
                            <div className='w-full md:w-[487px] h-[9px] bg-[#D9D9D9] p-0 relative rounded-full'>
                                <p className='w-[174px]  absolute top-0 left-0 h-[9px] rounded-full bg-[#1677BD]'></p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            <p>0_stars</p>
                            <div className='w-full md:w-[487px] h-[9px] bg-[#D9D9D9] p-0 relative rounded-full'>
                                <p className='w-[116px] absolute top-0 left-0 h-[9px] rounded-full bg-[#1677BD]'></p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p>0_stars</p>
                            <div className='md:w-[487px] w-full h-[9px] bg-[#D9D9D9] p-0 relative rounded-full'>
                                <p className='w-[64px] absolute top-0 left-0 h-[9px] rounded-full bg-[#1677BD]'></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Overall