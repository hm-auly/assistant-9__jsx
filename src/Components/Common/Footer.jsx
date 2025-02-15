import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";


function Footer() {
    const footerInfo1 = [
        {
            tilte: "About",

        },
        {
            link: "About MyFeedback",
            linkadd: "#",
        },
        {

            link: "Investor Relations",
            linkadd: "#"
        }
    ]
    const footerInfo2 = [
        {
            tilte2: "MyFeedback"
        },
        {
            link2: "MyFeedback for business",
            linkadd2: "#"
        },
        {
            link2: "Collections",
            linkadd2: "#"
        },
        {
            link2: "Talk",
            linkadd2: "#"
        },
        {
            link2: "Events",
            linkadd2: "#"
        },
        {
            link2: "MyFeedback blog",
            linkadd2: "#"
        },
        {
            link2: "Support",
            linkadd2: "#"
        },
        {
            link2: "Developers",
            linkadd2: "#"
        }
    ]
    return (
        <section className='py-5'>
            <div className='grid grid-cols-1 md:grid-cols-3 max-w-[800px] mx-auto px-5 gap-5'>
                <div className='flex flex-col gap-2 col-span-1'>
                    {footerInfo1.map((items, i) => (
                        <div key={i} className=''>
                            <p className='font-[800] text-[20px]'>{items.tilte}</p>
                            <a className='text-[#5E5E5E]' href={items.linkadd}>{items.link}</a>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between gap-3 col-span-2'>

                    <div className='flex flex-col gap-2'>
                        {footerInfo2.map((items, i) => (
                            <div key={i}>
                                <p className='font-[800] text-[20px]'>{items.tilte2}</p>
                                <a className='text-[#5E5E5E]' href={items.linkadd2}>{items.link2}</a>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-5 '>
                       <div className='flex flex-col justify-start items-start'>
                        <p className='font-[800] text-[20px]'>Languages</p>
                         <select name="" id="">
                            <option value="">Enlish</option>
                            <option value="">Bangla</option>
                            <option value="">Hindi</option>
                         </select>
                       </div>
                       <div>
                        <p className='font-[800] text-[20px] '>Countries</p>
                         <select name="" id="">
                            <option value="">Singapour</option>
                            <option value="">Bangladesh</option>
                            <option value="">India</option>
                         </select>
                       </div>
                    </div>


                </div>
            </div>
            <div className='text-center pt-7'>
                <p className='font-bold'>Copyright {new Date().toLocaleString()} myfeedback, designed by scott</p>
            </div>
        </section>
    )
}

export default Footer