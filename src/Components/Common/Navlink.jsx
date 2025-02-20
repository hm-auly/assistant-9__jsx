import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navlink() {
    const liniInfo = [
        {
            img: "/Images/ni1.svg",
            title: "All",
            linkadd: "/All"
        },
        {
            img: "/Images/ni2.svg",
            title: "Restaurants",
            linkadd: "/Home"
        },
        {
            img: "/Images/ni3.svg",
            title: "Hotels",
            linkadd: "#"
        },
        {
            img: "/Images/ni4.svg",
            title: "Home services",
            linkadd: "#"
        },
        {
            img: "/Images/ni5.svg",
            title: "Shopping",
            linkadd: "#"
        },
        {
            img: "/Images/ni6.svg",
            title: "Car location",
            linkadd: "#"
        },
        {
            img: "/Images/ni7.svg",
            title: "Beauty & Spa",
            linkadd: "#"
        },
        {
            img: "/Images/ni8.svg",
            title: "Park",
            linkadd: "#"
        },
        {
            img: "/Images/ni9.svg",
            title: "museum",
            linkadd: "#"
        },
        {
            img: "/Images/ni10.svg",
            title: "Car wash",
            linkadd: "#"
        },
        {
            img: "/Images/ni11.svg",
            title: "Bars",
            linkadd: "#"
        },
        {
            img: "/Images/ni12.svg",
            title: "Gyms",
            linkadd: "#"
        },
    ]

    const [open, setopen] = useState(1)

  return (
    <section className='py-3'>
        <div className='flex gap-10 md:gap-12 justify-center items-center overflow-auto'>
            {liniInfo.map(({img, title, linkadd}, i) => (
                <div key={i}  className={` ${open === i ? "text-[#1677BD] font-[600] border-b-2 border-b-[#1677BD]" :"text-[#AFAFAF]"}`}>
                    <div className='flex flex-col justify-center items-center gap-1'>
                        <img  src={img} alt="" />
                        <Link to={linkadd} onClick={() => setopen(i)} className={`text-[8px] md:text-[16px] cursor-pointer  ${open === i ? "text-[#1677BD] font-[600] border-b-2 border-b-[#1677BD]" :"text-[#AFAFAF]"}`}>{title}</Link>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Navlink