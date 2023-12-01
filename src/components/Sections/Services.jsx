import React from "react";
const length = [1, 2];
import { ServiceData } from "./serviceData";
function Services() {
  return (
    <>
    <div className=" p-4 md:p-16 Nalist-font-family flex flex-col bg-section-1">
      <div className="h-14 flex items-center justify-center">
        <div className="flex-col  flex justify-center ">
          {length.map(() => {
            return (
              <svg
                className="pt-[1px]"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
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
        <div className="text-gold  font-extrabold text-4xl px-5 md:px-14 items-center">
          Services
        </div>
        <div className="flex-col flex justify-center ">
          {length.map(() => {
            return (
              <svg
                className="pt-[1px]"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
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
      {/* show sevices */}
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4  gap-7 pt-8">
        {ServiceData.map((item) => {
          return <div className="min-h-52  flex  flex-col service-card px-5 py-6">
            <div><h1 className="text-gray-950 text-2xl font-bold">{item.title}</h1></div>
            <div className="h-24"><p  className="text-gray-900 overflow-hidden  font-normal text-base  leading-5 pt-2 ">{item.decription}</p></div>
            <div>
                <button className="px-5 py-2 rounded-md text-xl font-semibold  bg-black">
                  <span className="text-gold">Read more</span></button>
            </div>
          </div>;
        })}
      </div>
    </div>
   
    </>
  );
}

export default Services;
