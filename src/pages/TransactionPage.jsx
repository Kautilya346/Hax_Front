import React from "react";
import dp from "../assets/dp.jpg";
import GridLines from "react-gridlines";

const TransactionPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-[#f5f2e5] mt-12 font-mono">
      <div className="w-[600px] h-[70%] border-2 border-black rounded-lg p-6 bg-[#f5f2e5] shadow-lg">
        <h1 className="text-3xl font-bold text-black mb-6 text-center h-max">
          Your Balance : <span className="text-[#000000]">$60,000</span>
        </h1>
        <div className="bg-[#f5f2e5] h-max flex items-center justify-center">
          <GridLines
            className="grid-area"
            cellWidth={20}
            strokeWidth={1}
            cellWidth2={20}
          >
            <div className="border-2 border-black p-8 rounded-lg relative">
              <div className="border-2 border-black p-8 rounded-md">
                <div className="border-2 border-black rounded-md p-6 bg-[#f5f2e5]">
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="relative text-center">
                        <img
                          src={dp}
                          alt="profile"
                          className="w-36 h-36 border-4 border-black rounded-full object-cover"
                        />
                      </div>
                      <p className="text-3xl text-black font-gravity">Aditya</p>
                      <p className="text-sm text-gray-600">(njansjbajbsj)</p>
                    </div>

                    <div className="font-bold pb-12 mx-5 text-black text-[5vw]">→</div>

                    <div className="text-center">
                      <div className="relative">
                        <img
                          src={dp}
                          alt="profile"
                          className="w-36 h-36 border-4 border-black rounded-full object-cover"
                        />
                      </div>{" "}
                      <p className="text-3xl text-black font-gravity">Cutie</p>
                      <p className="text-sm text-gray-600">(njansjbajbsj)</p>
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
          </GridLines>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
