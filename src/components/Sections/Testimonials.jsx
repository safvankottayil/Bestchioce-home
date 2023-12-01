import React from 'react'
import { testimonialData } from './testimonialsData';
 const item=[{item:'Active clients',count:3251},
    {item:'Company',count:3996},
    {item:'Team',count:25},
    {item:'Country',count:20}
]

const length = [1, 2];
function Testimonials() {
  return (
    <>
    <div className=' px-4 md:p-16 py-4 bg-section-1 Nalist-font-family'>
      <div className='grid grid-cols-4 gap-2 md:gap-6'>
        {item.map((value)=>{
            return(<div className='h-fit md:h-36 flex flex-col items-center justify-center p-4 service-card '>
                      <p className='text-gray-900 font-bold ttext-2xl md:text-4xl  whitespace-nowrap font-sans'>{value.count}+</p>
                      <p className='text-gray-900 Nalist-font-family  whitespace-nowrap  font-normal text-sm md:text-2xl'>{value.item}</p>
            </div>)
        })}
      </div>
    </div>
    {/* plain area */}
    <div className='hidden md:flex px-16 bg-section-1 Nalist-font-family'>
        <div className='rounded-3xl  section-2-b bg-gray-800 bg-opacity-40 h-80'></div>
    </div>
    <div className='md:p-10 lg:p-16 p-4 pt-12 md:pt-0  bg-section-1'>
        <div className='flex justify-center items-center '>
        <div className="flex-col flex justify-center ">
          {length.map(() => {
            return (
              <svg
                className="pt-[1px]"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="4"
                viewBox="0 0 70 2"
                fill="none"
              >
                <path
                  d="M0.0476754 1.98969L69.7192 1.98969V1.59753e-05L0.0476754 1.59753e-05V1.98969Z"
                  fill="url(#paint0_linear_376_5921)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_376_5921"
                    x1="92.2074"
                    y1="3.85783"
                    x2="90.9918"
                    y2="-10.546"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AE8625" />
                    <stop offset="0.333333" stop-color="#F7EF8A" />
                    <stop offset="0.651042" stop-color="#D2AC47" />
                    <stop offset="1" stop-color="#EDC967" />
                  </linearGradient>
                </defs>
              </svg>
            );
          })}
        </div>
        <h1 className='flex px-4 md:px-8 text-4xl text-gold Nalist-font-family font-black'>Testimonial</h1>
        <div className="flex-col flex justify-center ">
          {length.map(() => {
            return (
              <svg
                className="pt-[1px]"
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="4"
                viewBox="0 0 70 2"
                fill="none"
              >
                <path
                  d="M0.0476754 1.98969L69.7192 1.98969V1.59753e-05L0.0476754 1.59753e-05V1.98969Z"
                  fill="url(#paint0_linear_376_5921)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_376_5921"
                    x1="92.2074"
                    y1="3.85783"
                    x2="90.9918"
                    y2="-10.546"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#AE8625" />
                    <stop offset="0.333333" stop-color="#F7EF8A" />
                    <stop offset="0.651042" stop-color="#D2AC47" />
                    <stop offset="1" stop-color="#EDC967" />
                  </linearGradient>
                </defs>
              </svg>
            );
          })}
        </div>
        </div>
        {/* data */}
        <div  className='grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-9 pt-9 Nalist-font-family '>
            {testimonialData.map((item)=>{
                return(<div className='flex flex-col min-h-60 p-8 md:p-5 lg:p-8 service-card'>
                  <p className='text-gray-950 text-base leading-5 px-1'>{item.description}</p>
                  <p className='text-black pt-3 font-medium'>{item.auther}</p>
                </div>)
            })}
        </div>
    </div>
    </>
  )
}

export default Testimonials
