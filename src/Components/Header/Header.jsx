import React from "react";
import Navbar from "../Navbar/Navbar";
import BgImg from "../../assets/header_img.png";
import { motion } from "motion/react";

const style = {
  backgroundImage: `url(${BgImg})`,
};
const Header = () => {
  return (
    <section
      style={style}
      className="min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden"
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-5xl sm:text-6xl md:text-[84px] inline-block max-w-3xl font-semibold pt-20"
        >
          Explore Homes that fit your dreams
        </motion.h2>
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mt-16 items-center justify-center">
  <motion.button
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="border border-white px-8 py-2 rounded hover:scale-105 transition-all duration-300"
  >
    Projects
  </motion.button>

  <motion.button
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="bg-blue-600 px-8 py-2 rounded text-white hover:scale-105 transition-all duration-300"
  >
    Contact Us
  </motion.button>
</div>

      </div>
    </section>
  );
};

export default Header;
