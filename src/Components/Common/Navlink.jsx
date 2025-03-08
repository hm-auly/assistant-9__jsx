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
            linkadd: ""
        },
        {
            img: "/Images/ni3.svg",
            title: "Hotels",
            linkadd: "/BellatalialAll"
        },
        {
            img: "/Images/ni4.svg",
            title: "Home services",
             linkadd: "/BellatalialAll"
        },
        {
            img: "/Images/ni5.svg",
            title: "Shopping",
            linkadd: "ee"
        },
        {
            img: "/Images/ni6.svg",
            title: "Car location",
            linkadd: "aa"
        },
        {
            img: "/Images/ni7.svg",
            title: "Beauty & Spa",
            linkadd: "aa"
        },
        {
            img: "/Images/ni8.svg",
            title: "Park",
            linkadd: "aa"
        },
        {
            img: "/Images/ni9.svg",
            title: "museum",
            linkadd: "aaa"
        },
        {
            img: "/Images/ni10.svg",
            title: "Car wash",
            linkadd: "aaa"
        },
        {
            img: "/Images/ni11.svg",
            title: "Bars",
            linkadd: "aaa"
        },
        {
            img: "/Images/ni12.svg",
            title: "Gyms",
            linkadd: "aaa"
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