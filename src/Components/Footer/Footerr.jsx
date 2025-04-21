import React from "react";
import logo from "../../assets/logo_dark.svg";

const Footerr = () => {
  return (
    <section className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={logo} alt="Logo" className="" />
          <p className="text-gray-400 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </section>
  );
};

export default Footerr;
