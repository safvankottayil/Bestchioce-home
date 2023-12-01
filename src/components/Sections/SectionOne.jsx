import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
function SectionOne() {
  return (
    <div className='section-2-bg py-14 Nalist-font-family flex flex-col md:px-8 w-full'>
      <div className='flex flex-col items-center justify-center'>
          <h1 className='text-2xl md:text-6xl font-semibold'>No More Document Clearance Worries.</h1>
          <p className='font-normal flex justify-center text-center text-base leading-5 md:text-2xl py-5'>We offer professional and affordable document clearance services for individuals and businesses.</p>
      </div>
      <div className='flex justify-center items-center md:pt-10'>
        <button className='learn-btn flex rounded-xl justify-center items-center text-xl text-black px-6 py-2 md:py-3 font-medium'>Learn More <IoIosArrowRoundForward className='h-8 mt-1 w-8'/> </button>
      </div>
      
    </div>
  )
}

export default SectionOne
