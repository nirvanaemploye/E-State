import React from "react";
import Logo from "../../assets/logo.svg";

const NavbarData = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="absolute top-0 left-0 w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center px-6 py-4 md:px-20 lg:px-24">
        <img src={Logo} alt=""  className="cursor-pointer"/>
        <ul className="hidden md:flex space-x-7 font-medium text-white">
          {NavbarData.map((item, index) => (
            <li key={index}>
              <a className="hover:text-gray-400" href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button  className="hidden md:block font-medium bg-white px-8 py-2 rounded-full hover:scale-95 translateall duration-300">
          Sign up
        </button>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src="./src/assets/menu_icon.svg"
          alt=""
          className="md:hidden w-6 cursor-pointer"
        />
      </div>
      {/* Mobail menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white text-black ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-7 cursor-pointer">
          <img
            src="./src/assets/cross_icon.svg"
            alt=""
            className="h-5"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          {NavbarData.map((item, index) => (
            <li key={index}>
              <a className="hover:text-gray-400" href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
