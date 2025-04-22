import React from "react";
import Logo from "../../assets/logo.svg";
import MenuIcon from "../../assets/menu_icon.svg";
import CrossIcon from "../../assets/cross_icon.svg";
import { motion } from "framer-motion";

const NavbarData = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-10">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-24"
      >
        <img src={Logo} alt="Logo" className="cursor-pointer" />
        <ul className="hidden md:flex space-x-7 font-medium text-white">
          {NavbarData.map((item, index) => (
            <li key={index}>
              <a className="hover:text-gray-400" href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="hidden md:block font-medium bg-white px-8 py-2 rounded-full hover:scale-95 transition-all duration-300">
          Sign up
        </button>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={MenuIcon}
          alt="Menu"
          className="md:hidden w-6 cursor-pointer"
        />
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-screen w-full bg-white text-black z-20"
      >
        <div className="flex justify-end p-7">
          <img
            src={CrossIcon}
            alt="Close menu"
            className="h-5 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-5 mt-5 px-5 text-lg font-medium">
          {NavbarData.map((item, index) => (
            <li key={index} >
              <a onClick={() => setIsOpen(false)} className="hover:text-gray-400" href={item.link}>
                {item.name}
              </a>
              
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
