import React from "react";

function Navbar() {
  return (
    <div className="w-full md:h-40 relative">
      <div>
    <div className="flex Nalist-font-family w-screen fixed md:h-40  md:px-24 bg-section-1  md:pb-5 justify-between">
      <div className="md:hidden flex items-center pl-5">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M3 7.94958H21" stroke="url(#paint0_linear_599_822)" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M3 12.9496H21" stroke="url(#paint1_linear_599_822)" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M3 17.9496H21" stroke="url(#paint2_linear_599_822)" stroke-width="1.5" stroke-linecap="round"/>
  <defs>
    <linearGradient id="paint0_linear_599_822" x1="0.940739" y1="7.83294" x2="1.08196" y2="10.3681" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E2B748"/>
      <stop offset="0.46875" stop-color="#FEF2A5"/>
      <stop offset="1" stop-color="#E2B748"/>
    </linearGradient>
    <linearGradient id="paint1_linear_599_822" x1="0.940739" y1="12.8329" x2="1.08196" y2="15.3681" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E2B748"/>
      <stop offset="0.46875" stop-color="#FEF2A5"/>
      <stop offset="1" stop-color="#E2B748"/>
    </linearGradient>
    <linearGradient id="paint2_linear_599_822" x1="0.940739" y1="17.8329" x2="1.08196" y2="20.3681" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E2B748"/>
      <stop offset="0.46875" stop-color="#FEF2A5"/>
      <stop offset="1" stop-color="#E2B748"/>
    </linearGradient>
  </defs>
</svg>
      </div>
      <div className=" md:h-36 md:w-96">
        <img className=" w-40 md:w-96 py-3 md:py-0 pl-2 md:pl-0  left-0" src="/logo-3 1.png" alt="" />
      </div>
      <div className="flex text-xl justify-between items-center ">
        <div className=" md:pr-10 flex">
          
          <button  className="py-3 hidden md:block  navabr-gold-btn-border h-fit px-6 text-gold  rounded-lg">
            Sign in
          </button>
          <button className=" py-2 md:py-3 whitespace-nowrap font-medium text-black text-sm navbar-gold-btn h-fit px-3 md:px-6 bg-custom-gradient rounded-lg border-2 mr-4 md:ml-4">
            Service Request
          </button>
        </div>
        <div className="md:flex text-gold hidden  relative flex-col pl-10 ">
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
            <p className=" font-extrabold font-sans text-[54px]">600561616</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Navbar;
