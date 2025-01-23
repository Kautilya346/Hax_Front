import React from "react";
import { PeopleCard } from "../components/PeopleCard";

const ProductPage = () => {
  return (
    <div className="bg-[#f5f2e5] h-screen w-screen ">
      <div className=" flex flex-wrap gap-5 justify-center py-5">
        <PeopleCard
          dp="https://randomuser.me/api/portraits/men/1.jpg"
          name="John Doe"
          work="I will redesign existing Wix, Wix Studio, and Squarespace website"
          price="500"
          mainphoto="https://randomuser.me/api/portraits/men/1.jpg"
        />
        <PeopleCard
          dp="https://randomuser.me/api/portraits/men/2.jpg"
          name="Rabia Adrees"
          work="I will redesign existing Wix, Wix Studio, and Squarespace website"
          price="500"
          mainphoto="https://randomuser.me/api/portraits/men/2.jpg"
        />
        <PeopleCard
          dp="https://randomuser.me/api/portraits/men/3.jpg"
          name="John Doe"
          work="I will redesign existing Wix, Wix Studio, and Squarespace website"
          price="500"
          mainphoto="https://randomuser.me/api/portraits/men/3.jpg"
        />
        <PeopleCard
          dp="https://randomuser.me/api/portraits/men/4.jpg"
          name="Rabia Adrees"
          work="I will redesign existing Wix, Wix Studio, and Squarespace website"
          price="500"
          mainphoto="https://randomuser.me/api/portraits/men/4.jpg"
        />
        <PeopleCard
          dp="https://randomuser.me/api/portraits/men/4.jpg"
          name="John Doe"
          work="I will redesign existing Wix, Wix Studio, and Squarespace website"
          price="500"
          mainphoto="https://randomuser.me/api/portraits/men/5.jpg"
        />
      </div>
    </div>
  );
};

export default ProductPage;
