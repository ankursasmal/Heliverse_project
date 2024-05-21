import React from 'react'
import '../App.css'

function Footer() {
  return (
    <div className='mt-[7vw] px-[6vw] py-[1.2vw] flex items-center justify-between' style={{ backgroundImage: 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)' }}>
      <a className='text-white text-[1.1vw]'>© 2023 Copywrite. All rights reserved by QodeMatrix

      </a>
      <div className='flex items-center justify-between'>
        <a className='text-white text-[1.1vw]'>Documentation</a>
        <a className='text-white text-[1.1vw] pl-[3vw]'>Support</a>
      </div>
    </div>
  )
}

export default Footer
