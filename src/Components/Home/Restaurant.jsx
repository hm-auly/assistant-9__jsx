import React from 'react'
import HeaderText from '../Common/HeaderText'

function Restaurant() {
    const CardInfo = [
        {
            img: "/Images/Rst1.svg",
            title: "The snug",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            star1: "/Images/ster1.svg",
            star2: "/Images/ster1.svg",
            star3: "/Images/ster1.svg",
            star4: "/Images/ster1.svg",
            star5: "/Images/Rs1.svg",
            Revio1: "4.5",
            Revio2: "(654 reviews)"
        },
        {
            img: "/Images/Rst2.svg",
            title: "Bottega",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            star1: "/Images/ster1.svg",
            star2: "/Images/ster1.svg",
            star3: "/Images/ster1.svg",
            star4: "/Images/ster1.svg",
            star5: "/Images/ster1.svg",
            Revio1: "4.5",
            Revio2: "(654 reviews)"
        },
        {
            img: "/Images/Rst3.svg",
            title: "Little Shucker",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            star1: "/Images/ster1.svg",
            star2: "/Images/ster1.svg",
            star3: "/Images/ster1.svg",
            star4: "/Images/Rs2.svg",
            star5: "/Images/Rs2.svg",
            Revio1: "4.5",
            Revio2: "(654 reviews)"
        },
        {
            img: "/Images/Rst4.svg",
            title: "Lokma",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            star1: "/Images/ster1.svg",
            star2: "/Images/ster1.svg",
            star3: "/Images/ster1.svg",
            star4: "/Images/ster1.svg",
            star5: "/Images/Rs1.svg",
            Revio1: "4.5",
            Revio2: "(654 reviews)"
        },
        {
            img: "/Images/Rst5.svg",
            title: "Starbelly",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            star1: "/Images/ster1.svg",
            star2: "/Images/ster1.svg",
            star3: "/Images/ster1.svg",
            star4: "/Images/ster1.svg",
            star5: "/Images/Rs1.svg",
            Revio1: "4.5",
            Revio2: "(654 reviews)"
        },
        {
            img: "/Images/Rst6.svg",
            title: "The melt",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            star1: "/Images/ster1.svg",
            star2: "/Images/ster1.svg",
            star3: "/Images/ster1.svg",
            star4: "/Images/ster1.svg",
            star5: "/Images/Rs1.svg",
            Revio1: "4.5",
            Revio2: "(654 reviews)"
        },
        {
            img: "/Images/Rst7.svg",
            title: "Arabia Nights",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            star1: "/Images/ster1.svg",
            star2: "/Images/ster1.svg",
            star3: "/Images/ster1.svg",
            star4: "/Images/ster1.svg",
            star5: "/Images/Rs1.svg",
            Revio1: "4.5",
            Revio2: "(654 reviews)"
        },
    ]
  return (
    <section>
        <div className='flex justify-between flex-col md:flex-row'>
          <div className='p-5'>
            <div>
                <button className='font-bold py-3'>Home / All restaurants</button>
            </div>
          <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-6'>
            <div className='text-[32px] '>
                <HeaderText head="best restaurants in singapore" />
            </div>
            <div>
                <button className='flex gap-2 items-center border-black border-x-2 border-y-2 rounded-full px-4 py-2'>
                    <img src="/Images/btnicon.svg" alt="" />
                    Sort
                </button>
            </div>
          </div>
          <div className='flex flex-col gap-4 '>
                {CardInfo.map((items, i) => (
                    <div key={i} className='flex flex-col md:flex-row gap-5 border-b-2 border-b-[#DCDCDC] pb-8 py-6'>
                        <div>
                            <img className='w-full' src={items.img} alt="" />
                        </div>
                        <div className='flex  flex-col gap-3 pt-2'>
                            <h6 className='text-[22px] font-[600]'>{items.title}</h6>
                            <p className='text-[#8F8F8F] max-w-[300px]'>{items.des}</p>
                            <div className='flex gap-2 items-center'>
                                <div className='flex gap-1 items-center'>
                                    <img src={items.star1} alt="" />
                                    <img src={items.star2} alt="" />
                                    <img src={items.star3} alt="" />
                                    <img src={items.star4} alt="" />
                                    <img src={items.star5} alt="" />
                                </div>
                                <div className='flex gap-2'>
                                    <p className='font-bold'>{items.Revio1}</p>
                                    <p className='text-[#8F8F8F]'>{items.Revio2}</p>
                                </div>
                            </div>                           
                        </div>                 
                    </div>
                ))}    
                <div className=' py-5'>
                    <button className='Nbtn bg-[#1677BD] px-5 py-2'>Show more</button>
                </div>
            </div>
          </div>
            <div>
            <div className=''>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58182.49486647609!2d90.7411456!3d24.297472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1739705089691!5m2!1sbn!2sbd"  className='md:w-[720px] w-full md:h-[1264px] h-80'></iframe>    
                </div>      
            </div>
        </div>
    </section>
  )
}

export default Restaurant