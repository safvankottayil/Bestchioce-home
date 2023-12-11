import React, { useState } from "react";
import { motion } from "framer-motion";
import "./modal.css";
import ClickedRadioBTN from "./ClickedRadioBTN";
import UnclickedRadioBTN from "./UnclickedRadioBTN";
function RequestModal({Cancel}) {
  const [checked, setchecked] = useState("");
  return (
    <div className="flex fixed w-screen min-h-screen z-[100] bg-black bg-opacity-80 justify-center items-center">
      <motion.form
      initial={{y:-20,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:0.5}}
        onSubmit={(e) => e.preventDefault()}
        className="flex Nalist-font-family modal-bg flex-col justify-center p-5 w-full h-screen md:h-fit md:w-[600px] rounded-sm "
      >
        <div>
          <h1 className=" text-2xl pl-1 py-1 font-semibold pb-4">
            Request
          </h1>
        </div>
        <div className="flex justify-between items-center ">
          <div
            className={`${
              checked == "Individual" ? "radio-btn-border" : ""
            }  duration-200 flex flex-grow mx-2 p-2 rounded-md  items-center`}
          >
            {checked=='Individual'?<span><ClickedRadioBTN/></span>:<span onClick={()=>setchecked('Individual')}><UnclickedRadioBTN/></span>}
            <p className="pl-3">Individual</p>
          </div>
          <div
            className={`${
              checked == "Company" ? "radio-btn-border" : ""
            }   items-center flex flex-grow mx-2 p-2 rounded-md`}
          >
            {checked=='Company'?<ClickedRadioBTN/>:<span onClick={()=>setchecked('Company')}><UnclickedRadioBTN/></span>}
            <p className="pl-3">compeny</p>
          </div>
        </div>
      {/* Inputs  */}
        <div className="grid grid-cols-1 px-2 space-y-4 pt-5">
          {/* NAME */}
          <div className="col-span-1 flex flex-col flex-grow input-bg-border h-14 ">
            <label htmlFor="name" className="pl-3 pt-2 label-font">Name</label>
            <input placeholder="Name" type="text" className="w-full focus:outline-none pl-3 pr-3 bg-transparent" />
          </div>
          {/* Phone number */}
          <div className="col-span-1 flex flex-col flex-grow input-bg-border h-14 ">
          <label htmlFor="NUMBER" className="pl-3 pt-2 label-font">Phone number</label>
            <input placeholder="Name" type="text" className="w-full focus:outline-none pl-3  pr-3 bg-transparent" />
          </div>
          {/* Email */}
          <div className="col-span-1 flex flex-col flex-grow input-bg-border h-14 ">
          <label htmlFor="name" className="pl-3 pt-2 label-font">Email</label>
            <input placeholder="Email" type="email" className="w-full focus:outline-none pl-3  pr-3 bg-transparent" />
          </div>
          {/* Service Request */}
          <div className="col-span-1 flex flex-col flex-grow input-bg-border h-14 ">
             <label htmlFor="name" className="pl-3 pt-2 label-font">Service Request</label>
            <select placeholder="Service Request" type="text" className="w-full focus:outline-none pl-3 pt-1  pr-3 bg-transparent" >
            <option value="Visa">Visa</option>
            </select>
          </div>
        </div>
        <div className="px-3 py-4">
          <p className=" leading-5">
            We can help you with applying for various types of visas, such as
            tourist, business, student, work, and family visas. We can also
            assist you with visa renewal, extension, and cancellation
          </p>
        </div>
        <div className="flex justify-between font-medium  text-xl">
          <button onClick={()=>Cancel(false)}  className="flex flex-grow mx-3  justify-center py-3 text-gold cancel-btn" >Cancel</button>
          <button  className="flex flex-grow mx-3 justify-center py-3 text-black submit-btn">Submit</button>
        </div>
      </motion.form>
    </div>
  );
}

export default RequestModal;
