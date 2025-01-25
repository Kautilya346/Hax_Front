import React from "react";
import dp from "../assets/dp.jpg";
import GridLines from "react-gridlines";

const TransactionPage = () => {

  const user = [{
    name: "Aditya",
    dp: "https://randomuser.me/api/portraits/men/12.jpg",
    publickey: "gandhi",
    bool:false
  }, {
    name: "Cutie",
    dp: "https://randomuser.me/api/portraits/women/11.jpg",
    publickey:"nehru",
    bool:true
  }]

  return (
    <div className="h-screen w-screen relative bg-[#f5f2e5] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <GridLines className="grid-area h-full"
          cellWidth={20}
          strokeWidth={1}
          cellWidth2={20}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center mt-12 font-mono">
        <div className="w-[750px] h-[70%] border-2 border-black rounded-lg p-6 bg-white shadow-lg">
          <h1 className="text-3xl font-bold text-black mb-6 text-center h-max underline">
            Transaction
          </h1>
          <div className="h-max flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="border-2 border-black p-12 rounded-lg relative bg-[#f5f2e5]">
                <div className="flex items-center justify-center mb-6 mt-10 mx-14">
                  <div className="text-center mr-10">
                    <div className="relative text-center">
                      <img
                        src={user[0].dp}
                        alt="profile"
                        className="w-36 h-36 border-4 border-black rounded-full object-cover"
                      />
                    </div>
                    <p className="text-3xl text-black font-gravity">{user[0].name}</p>
                    <p className="text-sm text-gray-600">({user[0].publickey})</p>
                    {user[0].bool ? (
                      <p className="text-md font-bold text-green-600">Verified</p>
                    ) : ( 
                      <p className="text-md font-bold text-red-600">Not Verified</p>
                    )}
                  </div>

                  <div className="font-bold pb-12 mx-5 text-black text-[10vw]">
                    →
                  </div>

                  <div className="text-center ml-10">
                    <div className="relative">
                      <img
                        src={user[1].dp}
                        alt="profile"
                        className="w-36 h-36 border-4 border-black rounded-full object-cover"
                      />
                    </div>
                    <p className="text-3xl text-black font-gravity">{user[1].name}</p>
                    <p className="text-sm text-gray-600">({user[1].publickey})</p>
                    {user[1].bool ? (
                      <p className="text-md font-bold text-green-600">Verified</p>
                    ) : ( 
                      <p className="text-md font-bold text-red-600">Not Verified</p>
                    )}
                  </div>
                </div>

                <p className="text-center text-2xl font-bold text-black">
                  Amount : <span className="text-[#000000]">$30,000</span>
                </p>

                <div className="mt-6 flex justify-center">
                  <button className="px-8 py-3 bg-[#ffcfcb] border-2 border-black text-xl font-bold rounded-md hover:bg-[#DC483A] transition-all">
                    CONFIRM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
