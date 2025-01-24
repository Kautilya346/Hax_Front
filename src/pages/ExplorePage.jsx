import React, { useState } from "react";
import GridLines from "react-gridlines";
import { PeopleCard } from "../components/PeopleCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ExplorePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activePerson, setActivePerson] = useState(null);

  const peopledata = [
    {
      dp: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      description:"I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/men/1.jpg",
      contact: "1234567890",
    },
    {
      dp: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Aditya Bajpayee",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      description: "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/women/2.jpg",
      contact: "1234567890",
    },
    {
      dp: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Srivas",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      description: "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/women/4.jpg",
      contact: "1234567890",
    },
    {
      dp: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Srivas",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      description: "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/women/4.jpg",
      contact: "1234567890",
    },
    {
      dp: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Kumar Ji",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      description: "Hi, I'm Aditya, a passionate developer with expertise in the MERN stack. I specialize in creating dynamic, responsive websites with a focus on performance and user experience. I'm always eager to learn new technologies and love solving complex problems. Let's build something amazing together!",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/men/5.jpg",
      contact: "1234567890",
    },
    {
      dp: "https://randomuser.me/api/portraits/men/6.jpg",
      name: "Mandav Para",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      description: "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/men/6.jpg",
      contact: "1234567890",
    },
    {
      dp: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Kautila N",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      description: "I am a professional web developer with 5 years of experience in web development. I have worked with many clients and have a good track record.",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/men/7.jpg",
      contact: "1234567890",
    },
    {
      dp: "https://randomuser.me/api/portraits/men/8.jpg",
      name: "Nath Godam",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      description: "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/men/8.jpg",
      contact: "1234567890",
    },
    {
      dp: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Jai Jinendra",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      description: "I am a professional web designer with 5 years of experience. I have worked with many clients and have a good track record.",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/women/1.jpg",
      contact: "1234567890",
    },
  ];

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
  }

  return (
    <div className="h-full w-screen">
      <div className="bg-[#f5f2e5] h-full w-screen">
        <GridLines className="h-screen grid-area" cellWidth={20} strokeWidth={1}>
        <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
          <div className="flex justify-center items-center ">
            <h1 className="text-7xl tracking-wide text-gray-800 font-gravity">Experts Available</h1>
          </div>
          <div className="flex flex-col items-center py-5 px-4">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="border h-12 border-gray-300 rounded-md px-3 py-2 mb-8 w-2/5 outline-none focus:ring-2 focus:ring-[#bdaa6d] placeholder:text-gray-400 text-xl"
            />
            <div className="relative w-full flex flex-wrap justify-center items-center gap-5 max-w-8xl">
              {filteredPeople.length === 0 ? (
                <p className="mt-20 text-center text-7xl font-gravity animate-bounce">No results found</p>
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
                    <button  onClick={() => handleClick(activePerson)} className="absolute top-4 right-4 bg-[#3b3314] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#DC483A] hover:scale-110 transition duration-300">
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
                        <p className="text-gray-600 text-sm mt-1">{activePerson.work}</p>
                      </div>
                    </div>
                    <div className="mt-2 text-wrap">
                      <span className="font-bold">Description : </span><span className="">{activePerson.description}</span>
                    </div>
                    <div className="text-gray-900 text-lg font-semibold mt-3">
                      Price : APT{activePerson.price}
                    </div>
                    <div className="mt-1">
                      <span><span className="font-bold">Contact : </span>{activePerson.contact}</span>
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
