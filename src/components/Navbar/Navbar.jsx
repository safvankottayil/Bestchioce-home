import React, { useLayoutEffect, useState } from "react";
const items = [
  { item: "Home" },
  { item: "About" },
  { item: "Services" },
  { item: "Media" },
  { item: "Career" },
  { item: "Contact" },
];
function Navbar() {
  const [webNavbar,setWebNavbar]=useState(false)
  useLayoutEffect(()=>{
    function scrolll(){
      const currentHight=window.scrollY
      if(80<currentHight){
         setWebNavbar(true)
      }else{
        setWebNavbar(false)
      }
    }

   window.addEventListener("scroll", scrolll);
  },[])
  const [show, setshow] = useState(false);
  return (
    <div className={`w-full  ${show ? "" : webNavbar?'md:h-44':"md:h-40"} relative transition-all duration-1000`}>
      <div className="flex flex-col z-50 fixed">
        <div className={`${show ? "" : webNavbar?'md:h-44 ':"md:h-40  items-center "} transition-all duration-1000 flex Nalist-font-family w-screen z-50 md:py-3 fixed md:h-fit md:px-14  lg:px-24 bg-section-1 justify-between`}>
          <div className="md:hidden flex items-center pl-4">
            <svg
            
              onClick={() => setshow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M3 7.94958H21"
                stroke="url(#paint0_linear_599_822)"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 12.9496H21"
                stroke="url(#paint1_linear_599_822)"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3 17.9496H21"
                stroke="url(#paint2_linear_599_822)"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_599_822"
                  x1="0.940739"
                  y1="7.83294"
                  x2="1.08196"
                  y2="10.3681"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E2B748" />
                  <stop offset="0.46875" stop-color="#FEF2A5" />
                  <stop offset="1" stop-color="#E2B748" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_599_822"
                  x1="0.940739"
                  y1="12.8329"
                  x2="1.08196"
                  y2="15.3681"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E2B748" />
                  <stop offset="0.46875" stop-color="#FEF2A5" />
                  <stop offset="1" stop-color="#E2B748" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_599_822"
                  x1="0.940739"
                  y1="17.8329"
                  x2="1.08196"
                  y2="20.3681"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E2B748" />
                  <stop offset="0.46875" stop-color="#FEF2A5" />
                  <stop offset="1" stop-color="#E2B748" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className=" md:h-36 md:w-96">
            <img
              className={`w-40 ${show ? "" : webNavbar?'md:w-80':"md:w-96"}  py-3 md:py-0 pl-2 md:pl-0  left-0`}
              src="/logo-3 1.png"
              alt=""
            />
          </div>
          <div className={`flex text-xl justify-between  ${show ? "" : webNavbar?'md:items-start md:pt-10 items-center':"items-center"}`}>
            <div className=" lg:pr-10 flex">
              <button className="py-3 hidden whitespace-nowrap md:block  navabr-gold-btn-border h-fit px-6 text-gold  rounded-lg">
                Sign in
              </button>
              <button className=" py-2 md:py-3 whitespace-nowrap font-medium text-black text-lg md:text-xl navbar-gold-btn h-fit px-2 mr-3 md:px-6 bg-custom-gradient rounded-lg border-2 lg:mr-4 md:ml-4">
                Service Request
              </button>
            </div>
            <div className="xl:flex text-gold hidden  relative flex-col pl-10 ">
              <p className="uppercase text-end absolute text-gold -top-3 right-0">
                Toll free number
              </p>
              <div className="flex justify-end items-center pt-1">
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="60"
                  viewBox="0 0 56 57"
                  fill="none"
                >
                  <path
                    d="M25.7837 35.1818L21.467 39.4984C20.557 40.4084 19.1103 40.4084 18.177 39.5218C17.9203 39.2651 17.6637 39.0318 17.407 38.7751C15.0037 36.3484 12.8337 33.8051 10.897 31.1451C8.98366 28.4851 7.44366 25.8251 6.32366 23.1884C5.22699 20.5284 4.66699 17.9851 4.66699 15.5584C4.66699 13.9718 4.94699 12.4551 5.50699 11.0551C6.06699 9.63175 6.95366 8.32509 8.19033 7.15842C9.68366 5.68842 11.317 4.96509 13.0437 4.96509C13.697 4.96509 14.3503 5.10509 14.9337 5.38509C15.5403 5.66509 16.077 6.08509 16.497 6.69175L21.9103 14.3218C22.3303 14.9051 22.6337 15.4418 22.8437 15.9551C23.0537 16.4451 23.1703 16.9351 23.1703 17.3784C23.1703 17.9384 23.007 18.4984 22.6803 19.0351C22.377 19.5718 21.9337 20.1318 21.3737 20.6918L19.6003 22.5351C19.3437 22.7918 19.227 23.0951 19.227 23.4684C19.227 23.6551 19.2503 23.8184 19.297 24.0051C19.367 24.1918 19.437 24.3318 19.4837 24.4718C19.9037 25.2418 20.627 26.2451 21.6537 27.4584C22.7037 28.6718 23.8237 29.9084 25.037 31.1451C25.2703 31.3784 25.527 31.6118 25.7603 31.8451C26.6937 32.7551 26.717 34.2484 25.7837 35.1818Z"
                    fill="url(#paint0_linear_516_63)"
                  />
                  <path
                    d="M51.2637 43.0684C51.2637 43.7217 51.1471 44.3984 50.9137 45.0517C50.8437 45.2384 50.7737 45.4251 50.6804 45.6117C50.2837 46.4517 49.7704 47.2451 49.0937 47.9917C47.9504 49.2517 46.6904 50.1617 45.2671 50.7451C45.2437 50.7451 45.2204 50.7684 45.1971 50.7684C43.8204 51.3284 42.3271 51.6317 40.7171 51.6317C38.3371 51.6317 35.7937 51.0717 33.1104 49.9284C30.4271 48.7851 27.7437 47.2451 25.0837 45.3084C24.1737 44.6317 23.2637 43.9551 22.4004 43.2317L30.0304 35.6017C30.6837 36.0917 31.2671 36.4651 31.7571 36.7217C31.8737 36.7684 32.0137 36.8384 32.1771 36.9084C32.3637 36.9784 32.5504 37.0017 32.7604 37.0017C33.1571 37.0017 33.4604 36.8617 33.7171 36.6051L35.4904 34.8551C36.0737 34.2717 36.6337 33.8284 37.1704 33.5484C37.7071 33.2217 38.2437 33.0584 38.8271 33.0584C39.2704 33.0584 39.7371 33.1517 40.2504 33.3617C40.7637 33.5717 41.3004 33.8751 41.8837 34.2717L49.6071 39.7551C50.2137 40.1751 50.6337 40.6651 50.8904 41.2484C51.1237 41.8317 51.2637 42.4151 51.2637 43.0684Z"
                    fill="url(#paint1_linear_516_63)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_516_63"
                      x1="2.17241"
                      y1="0.856973"
                      x2="42.2088"
                      y2="25.5778"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E2B748" />
                      <stop offset="0.46875" stop-color="#FEF2A5" />
                      <stop offset="1" stop-color="#E2B748" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_516_63"
                      x1="19.0983"
                      y1="30.8919"
                      x2="40.6158"
                      y2="64.2401"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E2B748" />
                      <stop offset="0.46875" stop-color="#FEF2A5" />
                      <stop offset="1" stop-color="#E2B748" />
                    </linearGradient>
                  </defs>
                </svg>{" "}
                <p className=" font-extrabold font-sans text-[54px]">
                  600561616
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* navlist */}
        <div
          className={`${
            show ? " w-screen sm:w-fit" : webNavbar?'md:w-full w-0':"w-0"
          } overflow-hidden flex flex-col transition-all duration-700 md:bg-transparent delay-0 bg-black  z-50  h-screen md:h-fit `}
        >
          <div className="flex  h-16 items-center justify-end">
            <svg
              onClick={() => setshow(!show)}
              className="mx-6 mt-6 md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M6.16194 16.8293C5.84554 17.1457 5.83047 17.7107 6.16948 18.0422C6.50095 18.3736 7.06596 18.3661 7.38237 18.0497L11.9929 13.4317L16.6109 18.0497C16.9348 18.3736 17.4923 18.3736 17.8238 18.0422C18.1477 17.7032 18.1552 17.1532 17.8238 16.8293L13.2133 12.2112L17.8238 7.60075C18.1552 7.27681 18.1552 6.71933 17.8238 6.38786C17.4848 6.06392 16.9348 6.05639 16.6109 6.38033L11.9929 10.9984L7.38237 6.38033C7.06596 6.06392 6.49342 6.04885 6.16948 6.38786C5.838 6.71933 5.84554 7.28434 6.16194 7.60075L10.78 12.2112L6.16194 16.8293Z"
                fill="url(#paint0_linear_415_918)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_415_918"
                  x1="4.52964"
                  y1="4.72066"
                  x2="19.9827"
                  y2="20.1307"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#E2B748" />
                  <stop offset="0.46875" stop-color="#FEF2A5" />
                  <stop offset="1" stop-color="#E2B748" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col md:pl-16 md:pt-16 md:flex-row">
            {items.map((item, i) => {
              return (
                <>
                  <p
                    onClick={() => setshow(!show)}
                    className={`pl-4  text-xl px-4 ${
                      i == 0 ? " text-gold pt-1 md:pb-2   md:pt-2 pb-1" : "py-2"
                    } `}
                  >
                    {item.item}
                  </p>
                </>
              );
            })}
          </div>
          <div className="flex flex-col md:hidden flex-grow justify-end pt-5 pb-16">
            <div className="">
              <div className=" flex items-center  mx-5 px-4 py-3 navabr-gold-btn-border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M2.66685 30.3333C2.40019 30.3333 2.14681 30.2267 1.96015 30.04C1.70681 29.7867 1.60021 29.4133 1.69354 29.0667L3.37356 22.7867C2.25356 20.7067 1.66685 18.36 1.66685 15.9867C1.66685 8.07999 8.09352 1.65332 16.0002 1.65332C23.9068 1.65332 30.3335 8.07999 30.3335 15.9867C30.3335 23.8933 23.9069 30.32 16.0002 30.32C13.5869 30.32 11.2269 29.72 9.12022 28.5733L2.93354 30.2933C2.8402 30.32 2.76019 30.3333 2.66685 30.3333ZM9.25352 26.5067C9.42685 26.5067 9.60019 26.56 9.76019 26.64C11.6402 27.7467 13.8002 28.3333 16.0002 28.3333C22.8002 28.3333 28.3335 22.8 28.3335 16C28.3335 9.2 22.8002 3.66667 16.0002 3.66667C9.20018 3.66667 3.66685 9.2 3.66685 16C3.66685 18.1733 4.24017 20.2933 5.32017 22.16C5.45351 22.3867 5.49353 22.6667 5.42686 22.92L4.09353 27.9067L9.00019 26.5467C9.08019 26.52 9.17352 26.5067 9.25352 26.5067Z"
                    fill="url(#paint0_linear_617_538)"
                  />
                  <path
                    d="M19.6536 23.68C18.827 23.68 17.9737 23.4933 17.0803 23.1067C16.2403 22.7467 15.4003 22.2667 14.587 21.6667C13.787 21.08 13.0004 20.4133 12.2804 19.6933C11.5604 18.96 10.8936 18.1867 10.307 17.3867C9.70697 16.5467 9.22696 15.72 8.88029 14.9067C8.50696 14.0267 8.32031 13.16 8.32031 12.3333C8.32031 11.7467 8.42695 11.1867 8.62695 10.6667C8.84029 10.12 9.18697 9.62667 9.6403 9.20001C10.4936 8.36001 11.7204 8.05337 12.6937 8.52003C13.027 8.6667 13.307 8.9067 13.5203 9.2267L15.067 11.4C15.227 11.6133 15.347 11.84 15.4403 12.0667C15.547 12.3333 15.6137 12.6 15.6137 12.8534C15.6137 13.2 15.5203 13.5467 15.3337 13.8534C15.2137 14.0534 15.0403 14.2934 14.8136 14.52L14.6403 14.7067C14.7203 14.8133 14.8136 14.9467 14.9603 15.1067C15.2403 15.4267 15.547 15.7733 15.8803 16.1067C16.2136 16.4267 16.547 16.7467 16.8803 17.0267C17.0403 17.16 17.1737 17.2667 17.2804 17.3333L17.467 17.1467C17.707 16.9067 17.947 16.72 18.187 16.6C18.627 16.32 19.307 16.2534 19.907 16.5067C20.1203 16.5867 20.3336 16.7067 20.5603 16.8667L22.787 18.44C23.0937 18.6533 23.3337 18.9467 23.4937 19.28C23.627 19.6133 23.6803 19.9067 23.6803 20.2134C23.6803 20.6134 23.587 21 23.4137 21.3733C23.2403 21.72 23.0403 22.0267 22.8003 22.3067C22.3736 22.7734 21.8803 23.12 21.347 23.3467C20.8137 23.5734 20.2403 23.68 19.6536 23.68ZM11.7203 10.32C11.6403 10.32 11.3737 10.32 11.0404 10.6533C10.787 10.8933 10.6137 11.1467 10.4937 11.4267C10.3737 11.7067 10.3203 12.0267 10.3203 12.3467C10.3203 12.9067 10.4536 13.5067 10.7203 14.1467C11.0003 14.8133 11.4137 15.52 11.9203 16.2267C12.4403 16.9334 13.027 17.64 13.6803 18.2933C14.3337 18.9333 15.027 19.5333 15.747 20.0667C16.4403 20.5733 17.147 20.9733 17.8537 21.28C18.867 21.72 19.8003 21.8267 20.5603 21.5067C20.827 21.4 21.067 21.2134 21.307 20.9734C21.427 20.84 21.5203 20.7067 21.6003 20.5333C21.6403 20.44 21.667 20.3333 21.667 20.24C21.667 20.2133 21.667 20.1734 21.627 20.0934L19.4003 18.5467C19.307 18.48 19.2136 18.4267 19.1336 18.4C19.0803 18.4267 19.0003 18.4667 18.8537 18.6133L18.347 19.12C17.9603 19.5067 17.347 19.6133 16.8537 19.44L16.6137 19.3333C16.307 19.1733 15.9603 18.9334 15.5736 18.6C15.2003 18.28 14.8404 17.9467 14.4537 17.5733C14.0804 17.1867 13.747 16.8267 13.427 16.4533C13.0803 16.04 12.8403 15.7067 12.6803 15.4267L12.5337 15.08C12.4937 14.9467 12.4803 14.8 12.4803 14.6667C12.4803 14.2933 12.6137 13.96 12.867 13.6933L13.3737 13.1734C13.5204 13.0267 13.5737 12.9467 13.6003 12.8934C13.5603 12.8 13.507 12.72 13.4403 12.6267L11.8803 10.4267L11.7203 10.32Z"
                    fill="url(#paint1_linear_617_538)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_617_538"
                      x1="-1.62017"
                      y1="-1.69208"
                      x2="34.8464"
                      y2="34.6674"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E2B748" />
                      <stop offset="0.46875" stop-color="#FEF2A5" />
                      <stop offset="1" stop-color="#E2B748" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_617_538"
                      x1="6.56307"
                      y1="6.5079"
                      x2="26.1165"
                      y2="25.9852"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#E2B748" />
                      <stop offset="0.46875" stop-color="#FEF2A5" />
                      <stop offset="1" stop-color="#E2B748" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="text-gold px-3">Chat with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
