import React, { useState } from "react";
import { PeopleCard } from "../components/PeopleCard";
import GridLines from "react-gridlines";

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const peopledata = [
    {
      dp: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      dp: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "aditya bajpaye",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      dp: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "srivas",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      dp: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "kumar ji",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      dp: "https://randomuser.me/api/portraits/men/6.jpg",
      name: "Mandav para",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      dp: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "kautila n",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      dp: "https://randomuser.me/api/portraits/men/8.jpg",
      name: "Nath godam",
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      dp: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "jai jinendra", 
      work: "I will redesign existing Wix, Wix Studio, and Squarespace website",
      price: "500",
      mainphoto: "https://randomuser.me/api/portraits/women/1.jpg",
    },
  ];

  const filteredPeople = peopledata.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-pink h-screen">
    
    <div className="bg-[#f5f2e5] min-h-screen w-screen "> 
    <GridLines
            className="grid-area"
            ccellWidth={20}
            strokeWidth={1}
            cellWidth2={20}
          >
      <div className="flex flex-col items-center py-5 px-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full max-w-md" 
        />
        <div className="flex flex-wrap justify-center gap-5 w-full max-w-6xl"> 
          {filteredPeople.map((person, index) => (
            <PeopleCard
              key={index}
              dp={person.dp}
              name={person.name}
              work={person.work}
              price={person.price}
              mainphoto={person.mainphoto}
            />
          ))}
        </div>
      </div>
    </GridLines>
    </div>
    </div>
  );
};

export default ProductPage;