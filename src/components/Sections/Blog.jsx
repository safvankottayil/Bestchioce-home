import React from "react";
const length = [1, 2];
import { BlogData } from "./BlogData";
function Blog() {
  return (
    <div className=" p-4 md:px-14  bg-section-1 Nalist-font-family">
      <div className="flex justify-center items-center ">
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
        <h1 className="flex px-5 md:px-8 whitespace-nowrap text-4xl text-gold font-black">
          Recent Blogs
        </h1>
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
      <div className="grid gap-8 pt-9 grid-cols-1 md:grid-cols-3">
        {BlogData.map((item) => {
          return (
            <div className="flex flex-col h-fit p-5 section-2-bg rounded-2xl">
              <img src={item.image} className="h-60 rounded-lg w-full" alt="" />
              <div className="flex flex-col">
                <h2 className="text-xl h-12 font-semibold pt-1  text-white">{item.title}</h2>
                <p className="text-base font-light leading-[19px] h-[70px] pb-3 mt-2 text-white overflow-hidden pt-3">{item.description}</p>
                <p className="pt-3 text-lg font-normal">{item.date}</p>
              </div>

            </div>
          );
        })}
      </div>
      <div className="pt-2">
        <button className="flex md:hidden navabr-gold-btn-border w-full justify-center">
          <span className="text-gold">Read more</span></button>
      </div>
    </div>
  );
}

export default Blog;
