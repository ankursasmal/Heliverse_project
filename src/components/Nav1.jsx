import React from 'react'
import navLogo from '/navLogo.png'
import { Link } from "react-router-dom";

function Nav1() {
  return (
    <div className='flex justify-between items-center pt-[8vw] px-[10vw] md:px-[6vw]'>
      <img src={navLogo} alt="" className=' w-[17vw] md:w-[14vw]' />
      <Link to='purchase'>   <button className='px-[2vw] py-[.8vw] text-gray-800  bg-white text-[1.6vw] md:text-[1.4vw] hover:bg-slate-900 hover:border-white hover:border-[2px] hover:text-white   rounded-lg'>Purchase Now</button></Link>
    </div>
  )
}

export default Nav1
