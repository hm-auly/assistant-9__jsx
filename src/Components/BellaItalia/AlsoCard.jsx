import React from 'react'

function AlsoCard() {
    const cardInfo = [
        {
            img: "/Images/C31.svg",
            title: "The melt",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            star: "/Images/ster1.svg",
            des2: "3.5",
            des3: " (334 reviews)"
        },
        {
            img: "/Images/C31.svg",
            title: "The melt",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            star: "/Images/ster1.svg",
            des2: "3.5",
            des3: " (334 reviews)"
        },
        {
            img: "/Images/C31.svg",
            title: "The melt",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            star: "/Images/ster1.svg",
            des2: "3.5",
            des3: " (334 reviews)"
        },
    ]
  return (
    <section>
        <div>
            <div className='flex flex-col md:flex-row gap-8 justify-between max-w-[1055px] mx-auto'>
                {cardInfo.map((items, i) => (
                    <div key={i} className='max-w-[319px] max-h-[386px]'>
                        <div className='flex flex-col gap-2'>
                            <img src={items.img} alt="" />
                            <h5 className='font-[600] text-[22px]'>{items.title}</h5>
                            <p className='text-[#8F8F8F] '>{items.des}</p>
                            <div className='flex items-center gap-3 py-4'>
                               <div className='flex gap-1'>
                               <img src={items.star} alt="" />
                               <img src={items.star} alt="" />
                               <img src={items.star} alt="" />
                               <img src={items.star} alt="" />
                               <img src={items.star} alt="" />
                               </div>
                               <div className='flex gap-2'>
                               <p className='font-bold'>{items.des2}</p>
                               <p className='text-[#8F8F8F]'>{items.des3}</p>
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

export default AlsoCard