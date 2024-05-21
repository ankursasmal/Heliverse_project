import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Buy() {
  return (
    <div className='w-[100vw]'>
      <Nav />
      <div className='flex items-center justify-center w-[90vw]'>
        <h1 className='absolute left-[17%] top-[50%] text-[4vw] font-bold text-blue-600'>Buy Product using cradit or dabit card</h1>
      </div>
      <div className='fixed bottom-0 w-[100vw]'><Footer /></div>
    </div>
  )
}

export default Buy
