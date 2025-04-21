import React from "react";
import Navbar from "../Navbar/Navbar";
import BgImg from "../../assets/header_img.png";

const style = {
  backgroundImage: `url(${BgImg})`,
};
const Header = () => {
  return (
    <section
      style={style}
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[84px] inline-block max-w-3xl font-semibold pt-20">Explore Homes that fit your dreams</h2>
        <div className="space-x-6 mt-16">
            <button className="border border-white px-8 py-2 rounded hover:scale-105 translateall duration-300">Projects</button>
            <button className="bg-blue-600 px-8 py-2 rounded hover:scale-105 translateall duration-300">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
