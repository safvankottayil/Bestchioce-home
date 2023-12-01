import React, { useLayoutEffect, useRef, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
function SectionOne() {
  const [show, doShow] = useState(false);
  const ourRef = useRef(null);
  useLayoutEffect(() => {
    function scrolll() {
      const one = ourRef.current.getBoundingClientRect().top;
      if (0 > one - window.scrollY - window.innerHeight) {
        doShow(true);
      }
    }
    window.addEventListener("scroll", scrolll);
  }, []);
  return (
    <div className='section-2-bg py-14 Nalist-font-family flex flex-col md:px-8 w-full'>
      <div className={`flex flex-col items-center justify-center ${show?' translate-y-0 z-0 transition-all duration-1000':"translate-y-20 text-transparent"}`}>
          <h1 ref={ourRef} className='text-2xl md:text-6xl flex text-center font-semibold items-center'>No More Document Clearance Worries.</h1>
          <p className='font-normal flex justify-center text-center text-base leading-5 md:text-2xl py-5'>We offer professional and affordable document clearance services for individuals and businesses.</p>
      </div>
      <div className={`flex justify-center items-center md:pt-10 ${show?' translate-y-0 transition-all duration-1000':"translate-y-16 text-transparent"}`}>
        <button className='learn-btn flex rounded-xl justify-center items-center text-xl text-black px-6 py-2 md:py-3 font-medium'>Learn More <IoIosArrowRoundForward className='h-8 mt-1 w-8'/> </button>
      </div>
      
    </div>
  )
}

export default SectionOne
