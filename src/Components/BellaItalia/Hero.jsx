import React from 'react'
import Link from 'react-dom'
function MyHero() {
  const BannerInfo = [
    {
      Title: "Bella italia",
      star: "/Images/ster1.svg",
      sdes1: "5.0",
      sdes2: "(834 reviews)",
      des1: `The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.`,
      des2: `The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.`,
      locaIcon: "/Images/LocationIcon.svg",
      locades: "Singapour, Bishan-Ang Mo Kio Park ",
      timeIcon: "/Images/Time.svg",
      timedes: `${new Date().toISOString()}`
    }
  ]
  return (
    <section>
      <section className='py-5'>
        <a href="#" className='font-[800] leading-[18.75px] px-7  md:px-10 '>Hom / BellaItalia</a>
      </section>

      <section className=' w-full lg:w-[1440px] h-auto lg:h-[552px] bg-[url("/Images/sbanner.svg")] bg-no-repeat bg-cover '>
        <div className='p-0 relative pb-20 lg:pb-0 flex flex-col md:flex-row gap-20  bg-gradient-to-r from-[#101010C4] to-[#10101000]  '>
          <div className=' lg:h-[550px] flex items-center px-8 lg:px-10  py-10 lg:py-0'>
            {BannerInfo.map((item, i) => (
              <div key={i} className='text-white flex flex-col gap-7 md:gap-10'>

                <div>
                  <h2 className='text-5xl font-semibold leading-[65px]'>{item.Title}</h2>
                  <div className='flex gap-3 items-center'>
                    <div className='flex gap-1'>
                      <img src={item.star} alt="" />
                      <img src={item.star} alt="" />
                      <img src={item.star} alt="" />
                      <img src={item.star} alt="" />
                      <img src={item.star} alt="" />
                    </div>
                    <div className='flex gap-2'>
                      <p className='font-bold'>{item.sdes1}</p>
                      <p>{item.sdes2}</p>
                    </div>
                  </div>
                </div>

                <div className='max-w-xl flex flex-col gap-5 text-[19px] leading-5'>
                  <p>{item.des1}</p>
                  <p>{item.des2}</p>
                </div>

                <div className='flex flex-col gap-5'>
                  <div className='flex gap-3 items-center'>
                    <img src={item.locaIcon} alt="" />
                    <p>{item.locades}</p>
                  </div>
                  <div className='flex gap-3 items-center'>
                    <img src={item.timeIcon} alt="" />
                    <p>{item.timedes}</p>
                  </div>
                </div>


              </div>
            ))}
          </div>
          <div className=''>
          <div className=' absolute bottom-[-60px] right-1/2 flex items-center justify-center  '>
              <img className='w-full ' src="/sLogo.svg" alt="" />
            </div>
          </div>
        </div>
        
       
      </section>
    </section>
  )
}

export default MyHero