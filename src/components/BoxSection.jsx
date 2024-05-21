import React from 'react'
import page from '/page.png'
import section from '/section.png'
import styles from '../style/Boxstyle.module.css'
import '../App.css'

function BoxSection() {
  return (
    <div className='pt-[4vw] grid grid-cols-12 gap-3 md:gap-6 px-[6vw]'>
      {/* col 1 */}
      <div className='col-span-6'>
        <div className={` ${styles.shadow} flex flex-col p-[2vw]   rounded-2xl`}>
          <a className='py-[1.2vw] text-white  text-[2.6vw] font-semibold'>Apply On Section
          </a>
          <a className='pb-[1vw] text-white text-[1.6vw]'   >Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</a>
          <img src={page} alt="" className='w-[90%]' />

        </div>
      </div>
      {/* col 2 */}

      <div className='col-span-6 mt-[5vw] '>
        <div className={` ${styles.shadow} flex flex-col p-[2vw] rounded-2xl`}>
          <a className='py-[1.2vw] text-white  text-[2.6vw] font-semibold'>Apply On Section
          </a>
          <a className='pb-[1vw] text-white text-[1.6vw]'   >Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</a>
          <img src={section} alt="" className='w-[90%]' />

        </div>
      </div>
    </div>
  )
}

export default BoxSection
