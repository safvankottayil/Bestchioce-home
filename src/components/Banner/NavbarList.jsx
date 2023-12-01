import React from "react";
// import { NavLink } from "react-router-dom";
const items = [
  { item: "Home" },
  { item: "About" },
  { item: "Services" },
  { item: "Media" },
  { item: "Career" },
  { item: "Contact" },
];
function NavbarList() {
  return (
    <div className="hidden md:flex justify-end w-full pr-5 pt-4  z-30 ">
      <div className="py-2 px-4 flex space-x-6 Navlist-bg rounded-2xl ">
      {items.map((value) => {
        return <p  className="text-gold py-2 px-4 text-xl font-semibold Nalist-font-family" >{value.item}</p>;
      })}
      </div>
     
    </div>
  );
}

export default NavbarList;
