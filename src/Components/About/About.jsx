import React from "react";
import BrandImg from "../../assets/brand_img.png";
import { motion } from "motion/react";

const About = () => {
  return (
    <section className="bg-gray-50 ">

    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">
          About{" "}
          <span className="underline underline-offset-4 decoration-1 under font-light">
            Our Brand
          </span>
        </h1>
        <p className="text-gray-500 max-w-80 text-center mb-8">
          Passionate About Properties, Dedicated to Your Vision
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
          src={BrandImg}
          alt="Real estate brand showcase"
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28"
          >
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="my-10 max-w-lg"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-blue-500 text-white px-8 py-2 rounded hover:scale-105 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </div>
    </section>

  );
};

export default About;
