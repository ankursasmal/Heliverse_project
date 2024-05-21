import React from 'react'
import styles from '../style/Boxstyle.module.css'
import '../App.css'

function NavButton() {
  return (
    <div className='grid grid-cols-12 gap-4    text-white pt-[5vw] px-[6vw]'>
      {/* col 1 */}
      <div className='col-span-3'>
        <div className='  pr-[11vw]  flex flex-col items-start '>
          <a className={` ${styles.gradient_text} text-[1.5vw]`}  >Transform
            Your Website</a>
          <a className='text-[1.5vw] pt-[1.2vw]'>With Motion Art Effect</a>
        </div>
      </div>
      {/* col 2 */}
      <div className='col-span-6'>

        <div className='flex flex-col items-start px-[6vw]'>
          <a className={`   text-[3.8vw] `} style={{ lineHeight: '5vw' }}>Attract Your
            Visitors Attention
            With Colorful</a>
          <a className={` ${styles.gradient_text} text-[3.8vw] `} style={{ lineHeight: '5vw' }}>Motion Art Effect</a>

          <a className='pt-[2.5vw] text-start text-[1.2vw]' >Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.</a>
        </div>

      </div>
      {/* col3 */}
      <div className='col-span-2'>

      </div>
    </div>
  )
}

export default NavButton
