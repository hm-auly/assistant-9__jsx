import React from 'react'

function More() {
    const moreInfo = [
        {
            img: "/Images/m1.svg",
            des: "See the menu"
        },
        {
            img: "/Images/m2.svg",
            des: "+847 87 37 29 01"
        },
        {
            img: "/Images/m3.svg",
            des: "Singapour, Bishan"
        },
        {
            img: "/Images/m4.svg",
            des: "7j/7, 08:00 - 22:00"
        },
        {
            img: "/Images/m5.svg",
            des: "www.bellaitalia.com"
        },
       
    ]
    const Links = [
        {
            Link: "/Images/F.svg",
            Linkadd: "#"
        },
        {
            Link: "/Images/I.svg",
            Linkadd: "#"
        },
        {
            Link: "/Images/T.svg",
            Linkadd: "#"
        },
        {
            Link: "/Images/W.svg",
            Linkadd: "#"
        },
    ]
  return (
    <section className='max-w-[1440px] mx-auto'>
        <div className='flex justify-between items-center max-w-[1120px] mx-auto'>
            <div className=''>
                <div className='pb-5'>
                    <h1 className='text-[34px] leading-[42px] font-[800]'>More informations</h1>
                </div>
                {moreInfo.map((item, i) => (
                    <div key={i} className=''>
                        <div className='flex items-center gap-4 py-3'>
                            <img src={item.img} alt="" />
                            <p className='text-[20px]'>{item.des}</p>
                        </div>
                    </div>
                ))}
              <div className='flex items-center gap-6 py-5'>
              {Links.map((items, idx) => (
                <div key={idx}>
                    <div>
                        <a href={items.Linkadd}>
                            <img src={items.Link} alt="" />
                        </a>
                    </div>
                </div>
               ))}
              </div>
            </div>
            <div className='p-0'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58180.35198639064!2d90.74784030293783!3d24.302145751459246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z4Kaw4KeH4Ka44KeN4Kak4KeL4Kaw4Ka-4KaB4KaX4KeB4Kay4Ka_!5e0!3m2!1sbn!2sbd!4v1740241671322!5m2!1sbn!2sbd" className='lg:w-[580px] lg:h-[432px]  rounded-xl'></iframe>
            </div>
        </div>
    </section>
  )
}

export default More