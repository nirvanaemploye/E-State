import React from "react";
import project_img_1 from "../../assets/project_img_1.jpg";
import project_img_2 from "../../assets/project_img_2.jpg";
import project_img_3 from "../../assets/project_img_3.jpg";
import project_img_4 from "../../assets/project_img_4.jpg";
import project_img_5 from "../../assets/project_img_5.jpg";
import project_img_6 from "../../assets/project_img_6.jpg";
import prev from "../../assets/left_arrow.svg";
import next from "../../assets/right_arrow.svg";
import { motion } from "motion/react";

const projectsData = [
  {
    title: "Skyline Haven",
    price: "$2,50,000",
    location: "California",
    image: project_img_1,
  },
  {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_2,
  },
  {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_3,
  },
  {
    title: "Central Square",
    price: "$2,50,000",
    location: "Los Angeles",
    image: project_img_4,
  },
  {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_5,
  },
  {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_6,
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [cardsToShow, setCardsToShow] = React.useState(2);

  React.useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(2);
      }
    };

    updateCardsToShow(); // Call the function here

    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 2
    );
  };
  return (
    <section
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 end-full overflow-hidden"
      id="projects"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-8"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Projects{" "}
          <span className="underline underline-offset-4 decoration-1 under font-light">
            Completed
          </span>
        </h1>
        <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
          Crafting Spaces, Building Legacies—Explore Our Portfolio
        </p>
      </motion.div>

      {/* slider button  */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-end items-center mb-8"
      >
        <button
          onClick={handlePrev}
          className="p-3 bg-gray-200 rounded mr-2 hover:bg-gray-300 transition-colors duration-200"
          aria-label="prev"
        >
          <img src={prev} alt="prev" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-gray-200 rounded mr-2 hover:bg-gray-300 transition-colors duration-200"
          aria-label="next"
        >
          <img src={next} alt="next" />
        </button>
      </motion.div>

      {/* Project Slider container */}

      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: `-${currentIndex * (100 / cardsToShow)}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex-shrink-0 w-full sm:w-1/4 group"
              key={index}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover mb-14"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md group-hover:scale-110 transition-all duration-300">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm sm:text-md">
                    {project.price} <span className="px-1">|</span>{" "}
                    {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
