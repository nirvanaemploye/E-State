import React from "react";
import Rate from "../../assets/star_icon.svg";
import profile_img_1 from "../../assets/profile_img_1.png";
import profile_img_2 from "../../assets/profile_img_2.png";
import profile_img_3 from "../../assets/profile_img_3.png";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50">
    <div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="testimonials"
    >
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Customer
          <span className="underline underline-offset-4 decoration-1 under font-light ms-2">
            Testimonials
          </span>
        </h1>
        <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
          Real Stories from Those Who Found Home with Us
        </p>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="hover:scale-105 transition-all duration-300 max-w-[314px] border shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h1 className="text-xl text-gray-700  font-medium">
              {testimonial.name}
            </h1>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {[...Array(testimonial.rating)].map((star, index) => (
                <img key={index} src={Rate} alt="" />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Testimonials;
