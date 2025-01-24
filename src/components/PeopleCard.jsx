import React, { useState } from "react";

export const PeopleCard = ({ dp, name, work, price, mainphoto,description,contact, setActivePerson }) => {
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setActivePerson({ dp, name, work, price, mainphoto,description,contact });
    }, 500); 
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setActivePerson(null);
  };

  return (
    <div
      className="group w-1/5 bg-black border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={mainphoto}
        alt="Profile Work"
        className="w-full h-2/5 object-cover"
      />
      <div className="p-4">
        <div className="flex gap-2 items-center">
          <img
            src={dp}
            alt="Profile"
            className="w-1/6 h-1/6 object-cover rounded-full"
          />
          <h3 className="text-l font-bold text-white">{name}</h3>
        </div>
        <p className="text-white text-sm mt-2">{work}</p>
        <p className="text-white text-base font-semibold mt-3">
          Price : APT{price}
        </p>
      </div>
    </div>
  );
};
