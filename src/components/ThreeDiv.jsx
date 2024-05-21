import React from 'react'
import flash from '/flash.png'
import moon from '/moon.png'
import thump from '/thump.png'
import styles from '../style/Boxstyle.module.css'
import '../App.css'

function ThreeDiv() {
  return (
    <div className='pt-[4vw] grid gap-4 grid-cols-12 px-[6vw]'>
      {/* col 1 */}
      <div className={` ${styles.shadow} col-span-4 shadow   pr-[2vw] rounded-lg`}>
        <div className='flex flex-col'>
          <img src={flash} alt="" className='w-[50%] my-[3vw]' />
          <a className='text-white text-[2.5vw] font-semibold pl-[2vw]'>Light Weight</a>
          <a className='text-white text-[1.6vw] font-thin py-[2vw] pl-[2vw]'>Motion Art for Elementor is designed to be lightweight.</a>
        </div>
      </div>
      {/* col 2*/}

      <div className={` ${styles.shadow} col-span-4 shadow   pr-[2vw] rounded-lg `}>
        <div className='flex flex-col'>
          <img src={thump} alt="" className='w-[50%] my-[3vw]' />
          <a className='text-white text-[2.5vw] font-semibold pl-[2vw]'> 100% Responsive
          </a>
          <a className='text-white text-[1.6vw] font-thin py-[2vw] pl-[2vw]'>Create a consistent visual experience across all devices.

          </a>
        </div>
      </div>            {/* col 13 */}

      <div className={` ${styles.shadow} col-span-4 shadow   pr-[2vw] rounded-lg `}>
        <div className='flex flex-col'>
          <img src={moon} alt="" className='w-[50%] my-[3vw]' />
          <a className='text-white text-[2.3vw] font-semibold pl-[2vw]'>User Friendly Interface
          </a>
          <a className='text-white text-[1.6vw] font-thin py-[2vw] pl-[2vw]'>Ensure a smooth experience for both applicants and administrators.

          </a>
        </div>
      </div>

    </div>
  )
}

export default ThreeDiv
