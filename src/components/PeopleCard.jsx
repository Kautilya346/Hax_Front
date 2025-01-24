import React, { useState } from "react";

export const PeopleCard = ({ dp, name, work, price, mainphoto,description,contact, setActivePerson }) => {
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setActivePerson({ dp, name, work, price, mainphoto,description,contact });
    }, 1500); 
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setActivePerson(null);
  };

  return (
    <div
      className="group w-1/5 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg cursor-move"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={mainphoto}
        alt="Profile Work"
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <div className="flex gap-2 items-center">
          <img
            src={dp}
            alt="Profile"
            className="w-1/6 h-1/6 object-cover rounded-full"
          />
          <h3 className="text-l font-bold text-gray-800">{name}</h3>
        </div>
        <p className="text-gray-600 text-sm mt-2">{work}</p>
        <p className="text-gray-900 text-base font-semibold mt-3">
          From ₹{price}
        </p>
      </div>
    </div>
  );
};
