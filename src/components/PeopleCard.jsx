import React from "react";

export const PeopleCard = ({ dp, name, work, price, mainphoto }) => {
  return (
    <div className="group w-1/5 bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:animate-flag hover:shadow-lg">
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
