import { useLocation } from "react-router-dom";
import GridLines from "react-gridlines";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const HirePage = () => {
  const location = useLocation();
  const { person } = location.state || {};

  const [description, setDescription] = useState(""); // State for the description input field
  const [loading, setLoading] = useState(false); // State to show a loading indicator when the request is in progress

  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  const handleHireClick = async () => {
    if (!person || !description) {
      // Check if person data and description are available
      alert("Please fill in the description to hire!");
      return;
    }

    setLoading(true);
    console.log("hiiiiiiiiiiiiiiiiiiiiii");
    console.log(person);
    console.log(person.userid);
    console.log(person.price);
    console.log(description);
    try {
      // Make POST request to backend to create the project
      const response = await axios.post(
        "http://localhost:3000/project",
        {
          user2: person.userid, // Freelancer's ID
          price: person.price, // Price associated with the freelancer
          description, // Description entered by the employer
        },
        {
          withCredentials: true, // Enable credentials for cross-origin requests
          headers: {
            "Content-Type": "application/json", // Specify content type
            // You can also add an Authorization header if needed
            // 'Authorization': `Bearer ${token}`,
          },
        }
      );

      console.log("byyyyyy");
      console.log("Project Created:", response.data);
      alert("Project successfully created!");
      setDescription(""); // Reset the description field after success
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to hire freelancer, please try again.");
    } finally {
      setLoading(false); // Reset the loading state
    }
  };

  return (
    <div className="font-mono h-auto">
      <GridLines className="h-full grid-area" cellWidth={20} strokeWidth={1}>
        {person ? (
          <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1 className="text-4xl px-16 py-5 font-bold font-gravity ml-5">
              {person.name}
            </h1>
            <h1 className="text-2xl px-16 font-gravity ml-5 mb-5">
              {person.domain[0].toUpperCase() + person.domain.slice(1)}
            </h1>

            <div className="flex justify-between px-16 gap-44 ml-5 pb-5 ">
              <div className="w-3/5 flex flex-col items-center ">
                <motion.img
                  className="w-2/3 rounded-2xl shadow-xl shadow-gray-500 mb-10"
                  src={person.dp}
                  alt="DP"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="mt-1 text-2xl ">{person.description}</p>
                <p className="mt-4 text-lg font-bold">
                  Contact : {person.contact}
                </p>
              </div>
              <div className="w-2/3 h-fit mr-5 bg-white rounded-2xl p-5">
                <h1 className="text-4xl font-gravity tracking-wide text-center">
                  Work Details
                </h1>
                <hr className="my-3 border border-black" />

                <textarea
                  className="w-full h-44 p-3 outline-none placeholder-gray-500 bg-[#f5f2e5] text-gray-900 rounded-xl text-xl"
                  name="description"
                  id=""
                  value={description}
                  onChange={(e) => setDescription(e.target.value)} // Handle textarea changes
                  placeholder="Describe your work!"
                ></textarea>
                <div className="flex items-center mt-3">
                  <p className="font-bold mx-3 mt-1 text-xl">
                    APT {person.price}
                  </p>
                  <motion.button
                    className="w-full mt-2 bg-[#fc8277] text-black border-black border px-4 py-2 rounded-lg font-gravity text-2xl tracking-wide"
                    whileHover={{ scale: 1.1, backgroundColor: "#ff6152" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={handleHireClick} // Trigger API request on click
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? "Hiring..." : "HIRE"}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <p>No person data found</p>
        )}
      </GridLines>
    </div>
  );
};

export default HirePage;
