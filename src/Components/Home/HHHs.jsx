import React, { useState } from 'react'

function HHHs() {
    const cardInfo = [ 
       {  cardInfo1: [
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
       {  cardInfo1: [
          {
            img: "/Images/hs4.svg",
            cardTitle: "Bottega2",
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
    
      {   cardInfo1: [
          {
            img: "/Images/hs1.svg",
            cardTitle: "Bottega3",
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
      }
    
    ];
const [curent, setcurent] = useState(0)
    const info = cardInfo[curent]

    const hendnext = () => {
        setcurent((prv) => (
          prv === 0 ? cardInfo.length -1 : prv - 1
        ))
      }
      const hendpprv = () => {
        setcurent((prv) => (
          prv === cardInfo.length -1 ? 0 : prv + 1
        ))
      }
    
      

  return (
    <section>
        <div className='flex'>
{info.cardInfo1.map(({img, cardTitle, cardDes}, i) => (
    <div key={i}>
        <div>
           <img src={img} alt="" />
           <div>
            <p>{cardTitle}</p>
            <p>{cardDes}</p>
           </div>
        </div>
    </div>
))

}
        </div>
        <div className='flex gap-5'>
            <button onClick={hendnext}>prv</button>
            <button onClick={hendpprv}>next</button>
        </div>
    </section>
  )
}

export default HHHs