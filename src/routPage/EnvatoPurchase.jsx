import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function purchase_envato() {
  return (
    <div className='w-[100vw]'>
      <Nav />
      <div className='flex items-center justify-center w-[90vw]'>
        <h1 className='absolute left-[16%] top-[50%] text-[4vw] font-bold text-blue-600'>Purchese different prodoucts from envato</h1>
      </div>
      <div className='fixed bottom-0 w-[100vw]'><Footer /></div>
    </div>

  )
}

export default purchase_envato
