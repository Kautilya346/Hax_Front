import React, { useEffect, useState } from "react";
import GridLines from "react-gridlines";
import { PeopleCard } from "../components/PeopleCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ExplorePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activePerson, setActivePerson] = useState(null);
  const [domainFilter, setDomainFilter] = useState("");
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    // Function to fetch services
    const fetchServices = async () => {
      try {
        const response = await fetch("https://hax-back.vercel.app/service/users");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServices(data.services);
        // Update state with the fetched services
      } catch (error) {
        setError(error.message); // Set error if any
      }
    };

    fetchServices();

    console.log("hiiii");
    // Call the function to fetch services when the component mounts
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const peopledata = services.map((service) => ({
    userid: service.user._id, // Adding the id field from the original object
    dp: service.image,
    name: service.user.username,
    work: service.title,
    domain: "web development",
    description: service.description,
    price: service.price.toString(),
    mainphoto: service.image,
    contact: "1234567890", // Example contact field
  }));

  console.log(peopledata);


  const filteredPeople = peopledata.filter(
    (person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      person.domain.includes(domainFilter)
  );

  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  const handleClick = (person) => {
    console.log(person);
    navigate("/hire", { state: { person } });
  };

  return (
    <div className="h-full w-screen">
      <div className="bg-[#f5f2e5] h-full w-screen">
        <GridLines
          className="min-h-screen h-full grid-area"
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
            <div className="flex flex-col items-center py-5 px-4 font-mono">
              <div className="flex justify-between w-2/3">
                <input
                  type="text"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  className="border-2 h-12 border-black rounded-md px-3 py-2 mb-8 w-2/3 outline-none focus:ring-2 focus:ring-[#bdaa6d] placeholder:text-gray-400 text-xl"
                />
                <select
                  className=" w-fit font-mono h-12 bg-[#fc8277] border-black border-2 rounded-lg mb-8 outline-none focus:ring-2 focus:ring-[#bdaa6d] font-bold text-xl px-2"
                  onChange={(event) => setDomainFilter(event.target.value)}
                  defaultValue=""
                >
                  <option value="">All Experts</option>
                  <option value="web development">Web Development</option>
                  <option value="app development">App Development</option>
                  <option value="video editing">Video Editing</option>
                  <option value="graphic designing">Graphic Designing</option>
                </select>
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
                      userid={person.userid}
                      dp={person.dp}
                      name={person.name}
                      work={person.work}
                      price={person.price}
                      mainphoto={person.mainphoto}
                      description={person.description}
                      contact={person.contact}
                      domain={person.domain}
                      setActivePerson={setActivePerson}
                    />
                  ))
                )}
                {activePerson && (
                  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10">
                    <div
                      className="h-fit w-11/12 mx-auto absolute z-20 bg-[#efe9ca] bg-gradient-to-r from-[#fc8277] via-white to-[#fc8277] bg-opacity-85 p-6 rounded-lg shadow-2xl backdrop-blur-lg border border-gray-300 transition-all duration-500 ease-in-out transform opacity-0 scale-75"
                      style={{ animation: "fadeIn 1s forwards" }}
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
                        className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#DC483A] hover:scale-110 transition duration-300"
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
                          <p className="text-gray-800 text-sm mt-1">
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
