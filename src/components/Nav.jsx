import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='flex px-[2vw] justify-between items-center  bg-gray-600 py-[.75vw]  ' >
      <div >
        <img src="https://assets.market-storefront.envato-static.com/storefront/assets/logos/envato-market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg" className="logo w-[18vw] md:w-[11vw]" alt="Vite logo" />

      </div>
      <Link to='/buy'>  <button className='btn font_size  font-Sora font-Outfit rounded-lg   text-white px-[2vw] py-[.5vw] md:text-[1.5vw] text-[1.7vw] lg:text-[1.3vw]' style={{ backgroundColor: '#4eb51f' }}  > Buy now</button></Link>
    </div>
  )
}

export default Nav
