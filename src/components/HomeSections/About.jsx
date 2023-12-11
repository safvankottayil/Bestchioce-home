import React from "react";

function About() {
  return (
    <div className="bg-about-image Nalist-font-family text-gray-300 flex flex-col lg:flex-row  w-full h-fit px-2  md:px-16 py-14">
      <img src="/Rectangle 173.png" className=" w-full lg:w-96 " alt="" />
      <div className="flex flex-col">
        <h1 className="text-4xl p-5 font-bold">About us</h1>
        <p className="px-5 sm:text-base leading-5 ">
          Best Choice is a document clearance company that provides professional
          and affordable services for individuals and businesses. We have been
          in the industry for over 10 years, and we have the expertise and
          experience to handle any document clearance needs. Whether you need to
          clear your documents for immigration, education, employment, or any
          other purpose, we can help you with speed and efficiency. We also
          offer online document clearance services, where you can upload your
          documents and get them cleared in as little as 24 hours. We value our
          customers and their satisfaction, and we strive to deliver the highest
          quality of service. We are also committed to maintaining the security
          and confidentiality of your documents. At Best Choice, we make
          document clearance easy and hassle-free for you. Contact us today and
          let us take care of your document clearance needs.
        </p>
        <button className="text-black navbar-gold-btn w-32 m-5 font-medium text-xl py-2 md:py-3 " >Read more</button>
      </div>
    </div>
  );
}

export default About;
