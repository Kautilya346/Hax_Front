import { useLocation } from "react-router-dom";
import GridLines from "react-gridlines";
import { motion } from "framer-motion";

const HirePage = () => {
  const location = useLocation();
  const { person } = location.state || {};

  // Define animation variants for the page
  const pageVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }, // Animation state
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }, // Exit state
  };

  return (
    <div className="font-serif">
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
            <div className="flex justify-between px-16 gap-44 ml-5">
              <div className="flex flex-col items-center">
                <motion.img
                  className="w-2/3 rounded-2xl shadow-2xl shadow-gray-900 mb-10"
                  src={person.dp}
                  alt="DP"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                />
                <p className="mt-2 text-2xl ">{person.description}</p>
                <p className="mt-4 text-lg ">Contact Me : {person.contact}</p>
              </div>
              <div className="w-2/3 mr-5">
                <textarea
                  className="shadow-2xl shadow-gray-500 w-full h-2/3 p-3 outline-none placeholder-gray-500 bg-[#b0aea7] text-gray-900 rounded-xl text-xl"
                  name="description"
                  id=""
                  placeholder="Describe the Work that you want!"
                ></textarea>
                <div className="flex items-center mt-3">
                  <p className="font-bold mx-3 mt-1 text-xl">
                    APT {person.price}
                  </p>
                  <motion.button
                    className="shadow-2xl shadow-gray-900 mt-2 bg-[#73642b] text-white px-4 py-2 rounded-lg font-semibold"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    HIRE
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
