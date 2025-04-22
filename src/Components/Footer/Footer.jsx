import React from "react";
import logo from "../../assets/logo_dark.svg";

const NavbarData = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About us",
    link: "#about",
  },
  {
    name: "Contact us",
    link: "#projects",
  },
  {
    name: "privacy policy",
    link: "",
  },
];

const Footer = () => {
  return (
    <section
      className=" pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={logo} alt="Logo" className="" />
          <p className="text-gray-400 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h1 className="text-white text-lg font-bold mb-4">Company</h1>
          <ul className="text-gray-400 gap-2">
            {NavbarData.map((item, index) => (
              <li key={index} className="group mb-2">
              <a href={item.link} className="text-gray-400 group-hover:text-white transition-colors duration-200">
                {item.name}
              </a>
            </li>
            
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h1>
          <p className="text-gray-400  mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="bg-gray-700 text-white p-2 rounded border border-gray-600 focus:outline-none focus:border-gray-500 w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-600">Copyright 2024 © GreatStack. All Right Reserved.</div>
    </section>
  );
};

export default Footer;
