import { time } from 'framer-motion'
import React, { useState } from 'react'
import HeaderText from '../Common/HeaderText'

function Cardhome() {
   const cardInfo = [
        {
            img: "/Images/hic1.svg",
            title: "Bella Italia",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
             ster1: "/Images/ster1.svg",   
             ster2: "/Images/ster1.svg",   
             ster3: "/Images/ster1.svg",   
             ster4: "/Images/ster1.svg",   
             ster5: "/Images/ster2.svg",   
             revio1: "4.0 ",
             revio: "(253 reviews)"
         
        },
        {
            img: "/Images/hic3.svg",
            title: "Marafuku Ramen",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            ster1: "/Images/ster1.svg",   
            ster2: "/Images/ster1.svg",   
            ster3: "/Images/ster1.svg",   
            ster4: "/Images/ster1.svg",   
            ster5: "/Images/ster1.svg",   
            revio1: "2.0 ",
            revio: "(253 reviews)"
        },
        
        {
            img: "/Images/hic1.svg",
            title: "Bottega",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            ster1: "/Images/ster1.svg",   
            ster2: "/Images/ster1.svg",   
            ster3: "/Images/ster1.svg",   
            ster4: "/Images/ster2.svg",   
            ster5: "/Images/ster4.svg",   
            revio1: "5.0 ",
            revio: "(253 reviews)"
        },
        {
            img: "/Images/hic5.svg",
            title: "Arabia Nights",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            ster1: "/Images/ster1.svg",   
            ster2: "/Images/ster1.svg",   
            ster3: "/Images/ster1.svg",   
            ster4: "/Images/ster1.svg",   
            ster5: "/Images/star3.svg",
              revio1: "6.0 ",
            revio: "(253 reviews)"
             
        },
        {
            img: "/Images/hic6.svg",
            title: "Lokma",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            ster1: "/Images/ster1.svg",   
            ster2: "/Images/ster1.svg",   
            ster3: "/Images/ster1.svg",   
            ster4: "/Images/ster1.svg",   
            ster5: "/Images/star2.svg",
              revio1: "6.0 ",
            revio: "(253 reviews)"
             
        },
        {
            img: "/Images/hic7.svg",
            title: "The snug",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            ster1: "/Images/ster1.svg",   
            ster2: "/Images/ster1.svg",   
            ster3: "/Images/ster1.svg",   
            ster4: "/Images/ster1.svg",   
            ster5: "/Images/ster1.svg",
              revio1: "6.0 ",
            revio: "(253 reviews)"
             
        },
        {
            img: "/Images/hic8.svg",
            title: "Starbelly",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            ster1: "/Images/ster1.svg",   
            ster2: "/Images/ster1.svg",   
            ster3: "/Images/ster1.svg",   
            ster4: "/Images/ster1.svg",   
            ster5: "/Images/ster1.svg",
              revio1: "6.0 ",
            revio: "(253 reviews)"
             
        },
        {
            img: "/Images/hic9.svg",
            title: "Iori",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            ster1: "/Images/ster1.svg",   
            ster2: "/Images/ster1.svg",   
            ster3: "/Images/ster1.svg",   
            ster4: "/Images/ster1.svg",   
            ster5: "/Images/ster1.svg",
              revio1: "6.0 ",
            revio: "(253 reviews)"
             
        },
        {
            img: "/Images/hic10.svg",
            title: "Ngalley",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            ster1: "/Images/ster1.svg",   
            ster2: "/Images/ster1.svg",   
            ster3: "/Images/ster1.svg",   
            ster4: "/Images/ster1.svg",   
            ster5: "/Images/ster1.svg",
              revio1: "6.0 ",
            revio: "(253 reviews)"
             
        },
        {
            img: "/Images/hic11.svg",
            title: "diogonal",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            ster1: "/Images/ster1.svg",   
            ster2: "/Images/ster1.svg",   
            ster3: "/Images/ster1.svg",   
            ster4: "/Images/ster1.svg",   
            ster5: "/Images/ster1.svg",
              revio1: "6.0 ",
            revio: "(253 reviews)"
             
        },
        {
            img: "/Images/hic5.svg",
            title: "diogonal",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            ster1: "/Images/ster1.svg",   
            ster2: "/Images/ster1.svg",   
            ster3: "/Images/ster1.svg",   
            ster4: "/Images/ster1.svg",   
            ster5: "/Images/ster1.svg",
              revio1: "6.0 ",
            revio: "(253 reviews)"
             
        },
        {
            img: "/Images/hic3.svg",
            title: "Kitoko",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            ster1: "/Images/ster1.svg",   
            ster2: "/Images/ster1.svg",   
            ster3: "/Images/ster1.svg",   
            ster4: "/Images/ster1.svg",   
            ster5: "/Images/ster1.svg",
              revio1: "4.0 ",
            revio: "(253 reviews)"
             
        },
       
    ]
  
  return (
    <section className='pb-6 lg:w-[1440px]'>
      <div className=' px-5 '>
      <div className='px-2 text-2xl py-5'>
        <HeaderText head="The latest trends" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:w-[1345px] mx-auto place-items-center  '>
     
           {cardInfo.map((items, i) => (
            <div key={i} className='bg-[#F8F8F8] pb-2 rounded-md '>
                <div className=''>
                    <div>
                        <img className='w-full' src={items.img} alt="" />
                    </div>
                    <div className='flex flex-col gap-2.5 pt-3 px-3'>
                        <h6 className='font-bold'>{items.title}</h6>
                        <p className='text-[#8F8F8F]'>{items.des}</p>
                    </div>
                </div>
                <div className='flex gap-1 items-center px-3 py-3'>
                   <img className='' src={items.ster1} alt="" />
                   <img src={items.ster2} alt="" />
                   <img src={items.ster3} alt="" />
                   <img src={items.ster4} alt="" />
                   <img src={items.ster5} alt="" />
                   <p className='font-bold pl-3'>{items.revio1}</p>
                   <p>{items.revio}</p>
                </div>
            </div>
           ))}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-3 py-4'>
        <h5 className='text-[22px] '>Discover more cool restaurants</h5>
        <button className='Nbtn md:w-[175px] md:h-[47px] md:px-0 md:py-0 px-14 py-2 text-[18px] bg-[#1677BD]'>Show</button>
      </div>
    </section>
  )
}

export default Cardhome