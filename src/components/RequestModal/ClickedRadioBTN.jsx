import React from "react";

function ClickedRadioBTN() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="url(#paint0_linear_719_798)"
        stroke-width="2"
      />
      <circle cx="10" cy="10" r="4.5" fill="url(#paint1_linear_719_798)" />
      <defs>
        <linearGradient
          id="paint0_linear_719_798"
          x1="-2.28807"
          y1="-2.33291"
          x2="23.1419"
          y2="23.0282"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E2B748" />
          <stop offset="0.46875" stop-color="#FEF2A5" />
          <stop offset="1" stop-color="#E2B748" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_719_798"
          x1="4.47037"
          y1="4.45019"
          x2="15.9138"
          y2="15.8627"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E2B748" />
          <stop offset="0.46875" stop-color="#FEF2A5" />
          <stop offset="1" stop-color="#E2B748" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default ClickedRadioBTN;
