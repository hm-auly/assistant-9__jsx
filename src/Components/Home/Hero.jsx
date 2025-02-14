import React, { useState } from 'react'
import HeaderText from '../Common/HeaderText';

function Hero() {
  const cardInfo = [
    {
      cardInfo1: [
        {
          img: "/Images/hs1.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
          img: "/Images/hs2.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
          img: "/Images/hs3.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
          img: "/Images/hs4.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
      ],
    },
    {
      cardInfo1: [
        {
          img: "/Images/hs4.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
          img: "/Images/hs3.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
          img: "/Images/hs2.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
          img: "/Images/hs1.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
      ]
    },
    {
      cardInfo1: [
        {
          img: "/Images/hs1.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
          img: "/Images/hs2.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
          img: "/Images/hs3.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
          img: "/Images/hs4.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
      ]
    },
    {
      cardInfo1: [
        {
          img: "/Images/hs4.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
          img: "/Images/hs3.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
          img: "/Images/hs2.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
          img: "/Images/hs1.svg",
          cardTitle: "Bottega",
          cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
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
    <section>
      <div className='md:w-[1320px] md:h-[488px] rounded-[9px] bg-[#1677BD] mx-auto py-5'>
        <div className='md:w-[1298px] md:h-[469px] mx-auto px-3 py-2'>
         <div className='px-5 text-white font-[400] text-xl'>
         <HeaderText  head="Find the best restaurant ratings below" />
         </div>
          <div className='lg:w-[1239px] lg:h-[363px] mx-auto relative'>
            <div className=' absolute left-[-10px] bottom-[50%] w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center '>
              <button onClick={hendpprv}><i class="fa-solid fa-arrow-left text-xl"></i></button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-4 '>

              {info.cardInfo1.map(({ img, cardTitle, cardDes }, i) => (
                <div className=' w-[285px] h-[363px] bg-white rounded-xl'>
                  <div>
                    <img src={img} alt="" />
                  </div>
                  <div className='px-3 py-3'>
                    <h6>{cardTitle}</h6>
                    <p className='text-sm text-[#8F8F8F]'>{cardDes}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className=' absolute right-0 bottom-[50%] w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center '>
              <button onClick={hendnext}><i class="fa-solid fa-arrow-right text-xl"></i></button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero