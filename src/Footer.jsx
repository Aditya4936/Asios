import React from 'react'
import logo from './assets/Logo-bg.png'
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='md:px-[80px] px-[34px] py-14 bg-black text-white h-[280px]'>
      <div className='flex justify-between items-start flex-col sm:flex-row '>
        <div>
          <div className='w-[200px] flex flex-col gap-3'>
            <img src={logo} alt="" className='md:w-[180px] sm:w-[150px] w-[100px] h-auto ' />
            <span className='sm:text-sm text-xs text-[#A3A3A3]'>We provides a full range of interior design, architectural design.</span>
          </div>

        </div>
        <div className=' flex flex-col gap-3'>
          <div className='font-[400] text-xl'>Our Address</div>
          <div className='flex gap-2 items-start'>
            <IoLocationSharp className='w-auto h-[25px] text-[#A3A3A3]' />
            <div className='w-[300px] sm:text-sm text-xs text-[#A3A3A3]'>Latest Ceramic Zone, 1st Floor, B/H Ishan Ceramic Zone 8-A, National Highway, Morbi, Gujarat
              363642</div>
          </div>
        </div>
        <div className=' flex flex-col gap-3'>
          <div className='font-[400] text-xl'>Our Mailbox</div>
          <div className='flex gap-2 items-start'>
            <IoLocationSharp className='w-auto h-[25px] text-[#A3A3A3]' />
            <div className='w-[300px] sm:text-sm text-xs text-[#A3A3A3]'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer