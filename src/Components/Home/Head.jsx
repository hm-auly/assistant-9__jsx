import React, { useState } from 'react'



function Head() {
    const HeadCardInfo = [
        {
            img: "/Images/hs1.svg",
            cardTitle: "Bottega",
            cardDes: "The lorem ipsum is, in .svprinting, a series of meaningless words used temporarily to calibrate a layout."
        },
        {
            img: "/Images/hs2.svg",
            cardTitle: "Bottega",
            cardDes: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout."
        },
    ];


    const imgs = [
        { img2: "/Images/hs1.svg" },
        { img2: "/Images/hs2.svg" },
        { img2: "/Images/hs3.svg" },
    ];

    // slider img fun
    const [curent, setcurent] = useState(0)
    const sliderimg = imgs[curent]
    const hendclick = () => {
        setcurent((prv) => (
            prv === imgs.length - 1 ? 0 : prv + 1
        ))
    }


    return (
        <section>
            

                {/* slider img */}
                <div className='relative w-[285px]'>
                    <img src={sliderimg.img2} alt="" className=' ' />
                    <div className='flex gap-2 items-center absolute bottom-0 right-[50%]'>
                        {imgs.map((_, i) => (
                            <div key={i} >
                                <button onClick={hendclick} className='w-2 h-2 rounded-full bg-black'></button>
                            </div>
                        ))}
                    </div>
                   
                </div>


                <div className='flex gap-5 w-[285px] h-[363px] mt-5'>
                        {HeadCardInfo.map(({cardTitle, cardDes, img}, i) => (
                            <div key={i}>
                                <div>
                                    <div>
                                        <img src={img} alt="" />
                                    </div>
                                    <h5>{cardTitle}</h5>
                                    <p>{cardDes}</p>
                                </div>
                            </div>
                        ))}
                    </div>

           
        </section>
    )
}

export default Head