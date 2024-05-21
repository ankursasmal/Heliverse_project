import React from 'react'
import magicStick from '/magicStick.png'
import { Link } from "react-router-dom";
import '../App.css'

function MagicStic() {
  return (
    <div className='flex flex-col items-center'>
      <div className='pt-[7vw] grid grid-cols-12 px-[6vw] mb-[5vw]'>
        {/* col 1 */}

        <div className='col-span-8'>
          <div className='flex flex-col items-start'>
            <a className='text-[4vw] text-white' >Turn Your Cursor Into A Colorful
              Magic Wand & Charm Your Visitors</a>
            <a className='text-[1.3vw] pt-[1.6vw] text-white'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</a>

            <Link to='/purchase_envato'><button className='px-[3vw] mt-[1.6vw] py-[.75vw] md:py-[1vw] bg-blue-800 rounded-2xl ' style={{ backgroundImage: 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)' }}>
              <a className='text-white text-[2vw] md:text-[1.6vw] font-normal'>Purchase From Envato →</a>
            </button> </Link>
          </div>
        </div>
        {/* col 2 */}

        <div className='col-span-4'>
          <img src={magicStick} alt="" className='self-center ml-[10vw] text-center w-[70%]' />
        </div>
      </div>

      {/* extra text */}
      <a className=' items-center text-[3.5vw]  text-center text-white   mb-[2.7vw]  self-center  px-[20vw]'>Apply On Any Section Or Enable For Whole Page</a>
    </div>
  )
}

export default MagicStic
