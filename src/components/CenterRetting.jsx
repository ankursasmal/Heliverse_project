import React from 'react'
import leaf from '/leaf.png'
import blueleaf from '/blueleaf.png'
import redleaf from '/redleaf.png'
import ster from '/ster.png'
import '../App.css'

function CenterRetting() {
    return (
        <div className='flex   flex-col px-[6vw]'>
            <a className='pt-[7vw] font-normal self-center text-[1.4vw] px-[1.5vw] text-white '>Trusted by thousands of users around the world</a>
            <div className='flex items-center justify-between flex-wrap pt-[4vw]'>
                <div className='flex items-center'>
                    <img src={leaf} alt="" className='w-[6vw] pl-[1vw]' />
                    <div className='flex items-start flex-col'>
                        <img src={ster} alt="" className='w-[11vw]' />
                        <a className='text-[1.2vw]  text-white  pt-[.5vw] '>4.5 Score, 9 Reviews</a>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={redleaf} alt="" className='w-[6vw] pl-[1vw]' />
                    <div className='flex items-start flex-col'>
                        <img src={ster} alt="" className='w-[11vw]' />
                        <a className='text-[1.2vw] text-white  pt-[.5vw]'>4.5 Score, 9 Reviews</a>
                    </div>
                </div>

                <div className='flex items-center'>
                    <img src={blueleaf} alt="" className='w-[6vw] pl-[1vw]' />
                    <div className='flex items-start flex-col'>
                        <img src={ster} alt="" className='w-[11vw]' />
                        <a className='text-[1.2vw] text-white  pt-[.5vw]'>4.5 Score, 9 Reviews</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CenterRetting
