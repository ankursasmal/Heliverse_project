import React from 'react'
import browser from '/browser.png'
import styles from '../style/Boxstyle.module.css'
import '../App.css'

function CenterDiv() {
  return (
    <div className='mx-[6vw] mt-[5vw] flex flex-col items-center'>
      <div className={` ${styles.shadow} flex flex-col items-center py-[4vw] px-[17vw] rounded-xl `}>
        <a className='text-white text-[3.6vw]'>Supported by All Popular Browsers
        </a>
        <a className='text-white py-[1.5vw] text-[1.8vw] text-center self-center '>Rest assured, Motion Art is designed to be compatible with all major web browsers.</a>

        <img src={browser} alt="" className='w-[90%]' />
      </div>

      <div className='flex items-center px-[18vw] flex-col pt-[7vw]'>
        <a className='text-white text-[3.8vw] text-center'>An All-Round Plugin With Powerful Features</a>
        <a className='text-white text-[1.6vw] text-center'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</a>
      </div>
    </div>
  )
}

export default CenterDiv
