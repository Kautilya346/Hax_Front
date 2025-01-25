import React, { useEffect, useState } from "react";
import GridLines from "react-gridlines";
import { PeopleCard } from "../components/PeopleCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ExplorePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activePerson, setActivePerson] = useState(null);

  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch services
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:3000/service/users");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServices(data.services); // Update state with the fetched services
      } catch (error) {
        setError(error.message); // Set error if any
      }
    };

    fetchServices();
    console.log(services);
    console.log("hiiii");
    // Call the function to fetch services when the component mounts
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const peopledata = services.map((service) => ({
    _id: service._id, // Adding the id field from the original object
    dp: service.image,
    name: service.title,
    work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
    description: service.description,
    price: service.price.toString(),
    mainphoto: "https://randomuser.me/api/portraits/men/1.jpg",
    contact: "1234567890", // Example contact field
  }));

  // const peopledata = [
  //   {
  //     dp: "https://randomuser.me/api/portraits/men/1.jpg",
  //     name: "John Doe",
  //     work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
  //     description:
  //       "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
  //     price: "500",
  //     mainphoto: "https://randomuser.me/api/portraits/men/1.jpg",
  //     contact: "1234567890",
  //   },
  //   {
  //     dp: "https://randomuser.me/api/portraits/women/2.jpg",
  //     name: "Aditya Bajpayee",
  //     work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
  //     description:
  //       "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
  //     price: "500",
  //     mainphoto: "https://randomuser.me/api/portraits/women/2.jpg",
  //     contact: "1234567890",
  //   },
  //   {
  //     dp: "https://randomuser.me/api/portraits/women/4.jpg",
  //     name: "Srivas",
  //     work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
  //     description:
  //       "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
  //     price: "500",
  //     mainphoto: "https://randomuser.me/api/portraits/women/4.jpg",
  //     contact: "1234567890",
  //   },
  //   {
  //     dp: "https://randomuser.me/api/portraits/women/4.jpg",
  //     name: "Srivas",
  //     work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
  //     description:
  //       "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
  //     price: "500",
  //     mainphoto: "https://randomuser.me/api/portraits/women/4.jpg",
  //     contact: "1234567890",
  //   },
  //   {
  //     dp: "https://randomuser.me/api/portraits/men/5.jpg",
  //     name: "Kumar Ji",
  //     work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
  //     description:
  //       "Hi, I'm Aditya, a passionate developer with expertise in the MERN stack. I specialize in creating dynamic, responsive websites with a focus on performance and user experience. I'm always eager to learn new technologies and love solving complex problems. Let's build something amazing together!",
  //     price: "500",
  //     mainphoto: "https://randomuser.me/api/portraits/men/5.jpg",
  //     contact: "1234567890",
  //   },
  //   {
  //     dp: "https://randomuser.me/api/portraits/men/6.jpg",
  //     name: "Mandav Para",
  //     work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
  //     description:
  //       "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
  //     price: "500",
  //     mainphoto: "https://randomuser.me/api/portraits/men/6.jpg",
  //     contact: "1234567890",
  //   },
  //   {
  //     dp: "https://randomuser.me/api/portraits/men/7.jpg",
  //     name: "Kautila N",
  //     work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
  //     description:
  //       "I am a professional web developer with 5 years of experience in web development. I have worked with many clients and have a good track record.",
  //     price: "500",
  //     mainphoto: "https://randomuser.me/api/portraits/men/7.jpg",
  //     contact: "1234567890",
  //   },
  //   {
  //     dp: "https://randomuser.me/api/portraits/men/8.jpg",
  //     name: "Nath Godam",
  //     work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
  //     description:
  //       "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
  //     price: "500",
  //     mainphoto: "https://randomuser.me/api/portraits/men/8.jpg",
  //     contact: "1234567890",
  //   },
  //   {
  //     dp: "https://randomuser.me/api/portraits/women/1.jpg",
  //     name: "Jai Jinendra",
  //     work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
  //     description:
  //       "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
  //     price: "500",
  //     mainphoto: "https://randomuser.me/api/portraits/women/1.jpg",
  //     contact: "1234567890",
  //   },
  // ];

  const filteredPeople = peopledata.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  const handleClick = (person) => {
    navigate("/hire", { state: { person } });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full w-screen">
      <div className="bg-[#f5f2e5] h-full w-screen">
        <GridLines
          className="h-screen grid-area"
          cellWidth={20}
          strokeWidth={1}
        >
          <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-center items-center ">
              <h1 className="text-7xl tracking-wide text-gray-800 font-gravity">
                Experts Available
              </h1>
            </div>
            <div className="flex flex-col items-center py-5 px-4">
              <div className="relative flex items-center justify-center gap-5 w-full">
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="border h-12 border-gray-300 rounded-md px-3 py-2 mb-8 w-2/5 outline-none focus:ring-2 focus:ring-[#bdaa6d] placeholder:text-gray-400 text-xl"
                />

                <div className="relative inline-block">
                  <button
                    onClick={toggleDropdown}
                    className="mb-2 p-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Choose Domain
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  {/* Conditionally render dropdown based on `isOpen` state */}
                  {isOpen && (
                    <div
                      id="dropdown"
                      className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 mt-1"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Web Developer
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            App Developer
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Video Editor
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Graphic Designer
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative w-full flex flex-wrap justify-center items-center gap-5 max-w-8xl">
                {filteredPeople.length === 0 ? (
                  <p className="mt-20 text-center text-7xl font-gravity animate-bounce">
                    No results found
                  </p>
                ) : (
                  filteredPeople.map((person, index) => (
                    <PeopleCard
                      key={index}
                      dp={person.dp}
                      name={person.name}
                      work={person.work}
                      price={person.price}
                      mainphoto={person.mainphoto}
                      description={person.description}
                      contact={person.contact}
                      setActivePerson={setActivePerson}
                    />
                  ))
                )}
                {activePerson && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div
                      className="h-fit w-11/12 mx-auto absolute z-20 bg-[#efe9ca] bg-gradient-to-r from-[#bdaa6d] via-white to-[#bdaa6d] bg-opacity-85 p-6 rounded-lg shadow-2xl backdrop-blur-lg border border-gray-300 transition-all duration-500 ease-in-out transform opacity-0 scale-75"
                      style={{ animation: "fadeIn 0.5s forwards" }}
                      onMouseEnter={() => setActivePerson(activePerson)}
                      onMouseLeave={() => setActivePerson(null)}
                    >
                      <img
                        src={activePerson.mainphoto}
                        alt="Main"
                        className="mx-auto w-72 h-72 object-cover rounded-xl"
                      />
                      <button
                        onClick={() => handleClick(activePerson)}
                        className="absolute top-4 right-4 bg-[#3b3314] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#DC483A] hover:scale-110 transition duration-300"
                      >
                        HIRE
                      </button>
                      <div className="mt-4 flex items-center gap-4">
                        <img
                          src={activePerson.dp}
                          alt="DP"
                          className="w-16 h-16 object-cover rounded-full"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">
                            {activePerson.name}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {activePerson.work}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 text-wrap">
                        <span className="font-bold">Description : </span>
                        <span className="">{activePerson.description}</span>
                      </div>
                      <div className="text-gray-900 text-lg font-semibold mt-3">
                        Price : APT{activePerson.price}
                      </div>
                      <div className="mt-1">
                        <span>
                          <span className="font-bold">Contact : </span>
                          {activePerson.contact}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </GridLines>
      </div>
    </div>
  );
};

export default ExplorePage;
