import React from 'react'
import { useNavigate } from 'react-router-dom'
function Errorlpage() {
    const neviget = useNavigate()
    const nePage = ()=>{
        neviget("/")
    }
  return (
    <div className='p-0 absolute top-1/2 right-1/2 transform translate-x-1/2  '>
        <div className=' flex flex-col gap-5 justify-center items-center'>
            <p>The page is Not Define</p>
        <button className='Nbtn bg-black px-4 py-2' onClick={nePage}>Back Home page</button>
        </div>
    </div>
  )
}

export default Errorlpage;