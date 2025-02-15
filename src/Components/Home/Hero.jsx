import React, { useState } from 'react'
import HeaderText from '../Common/HeaderText';

function Hero() {
  const cardInfo = [
    {
      cardInfo1: [
        {
          img: "/Images/hs1.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
        {
          img: "/Images/hs2.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
        {
          img: "/Images/hs3.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
        {
          img: "/Images/hs4.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
      ],
    },
    {
      cardInfo1: [
        {
          img: "/Images/hs4.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
        {
          img: "/Images/hs3.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
        {
          img: "/Images/hs2.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
        {
          img: "/Images/hs1.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
      ]
    },
    {
      cardInfo1: [
        {
          img: "/Images/hs1.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
        {
          img: "/Images/hs2.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
        {
          img: "/Images/hs3.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
        {
          img: "/Images/hs4.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
      ]
    },
    {
      cardInfo1: [
        {
          img: "/Images/hs4.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
        {
          img: "/Images/hs3.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
        {
          img: "/Images/hs2.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
        {
          img: "/Images/hs1.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout.",
          sterimg1: "/Images/ster1.svg",
          sterimg2: "/Images/ster1.svg",
          sterimg3: "/Images/ster1.svg",
          sterimg4: "/Images/ster1.svg",
          sterimg5: "/Images/ster1.svg",
        },
      ]
    }

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

  return (
    <section className='py-5'>
      <div className='md:w-[1320px] md:h-[488px] rounded-[9px] bg-[#1677BD] mx-auto py-5'>
        <div className='md:w-[1298px] md:h-[469px] mx-auto px-3 py-2'>
         <div className='px-5 text-white font-[400] text-xl'>
         <HeaderText  head="Find the best restaurant ratings below" />
         </div>
          <div className='lg:w-[1239px] lg:h-[363px] mx-auto relative'>
            <div className='hidden md:absolute left-[-10px] bottom-[50%] w-[40px] h-[40px] rounded-full bg-white md:flex justify-center items-center hover:bg-gray-300'>
              <button onClick={hendpprv}><i class="fa-solid fa-arrow-left text-xl"></i></button>
            </div>

            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-4 justify-items-center'>

              {info.cardInfo1.map(({ img, cardTitle, cardDes,sterimg1,sterimg2, sterimg3, sterimg4, sterimg5 }, i) => (
                <div className='hover:shadow-lg duration-300 hover:shadow-gray-100 w-[285px] h-[363px] bg-white rounded-xl'>
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <div className='px-3 py-3'>
                    <h6>{cardTitle}</h6>
                    <p className='text-sm text-[#8F8F8F]'>{cardDes}</p>
                  </div>
                  <div className='flex gap-1 px-3 mt-2'>
                    <img src={sterimg1} alt="" />
                    <img src={sterimg2} alt="" />
                    <img src={sterimg3} alt="" />
                    <img src={sterimg4} alt="" />
                    <img src={sterimg5} alt="" />
                    <p className='text-[#7A7A7A]'><span className='font-bold text-black'>5.0</span> (876 reviews)</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='flex gap-3 justify-center items-center  my-3'> 
            <div className=' md:absolute right-0 bottom-[50%] w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:bg-gray-300'>
              <button onClick={hendnext}><i class="fa-solid fa-arrow-right text-xl"></i></button>
            </div>
            <div className='md:hidden md:absolute left-[-10px] bottom-[50%] w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center hover:bg-gray-300'>
              <button onClick={hendpprv}><i class="fa-solid fa-arrow-left text-xl"></i></button>
            </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero