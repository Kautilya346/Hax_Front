import React, { useState,useEffect } from "react";
import dp from "../assets/dp.jpg";
import GridLines from "react-gridlines";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { use } from "react";
import CoinButton from "../components/CoinButton";


const TransactionPage =() => {

  const location=useLocation();
  const projectID= "6794826ef4e37ad98cefac14";

  const [user1Name, setUser1Name] = useState("Hacker");
  const [user1Dp, setUser1Dp] = useState("https://randomuser.me/api/portraits/men/12.jpg");
  const [user1PublicKey, setUser1PublicKey] = useState("gandhi");
  const [user1Bool, setUser1Bool] = useState(true);

  const [user2Name, setUser2Name] = useState("Cutie");
  const [user2Dp, setUser2Dp] = useState("https://randomuser.me/api/portraits/women/11.jpg");
  const [user2PublicKey, setUser2PublicKey] = useState("nehru");
  const [user2Bool, setUser2Bool] = useState(true);
  

  const [balance,setBalance]=useState(0);


  useEffect(() => {
  const getProject=async()=>{
    
    try {
      const resp=await axios.get(`http://localhost:3000/project/getprojectdetail/${projectID}`);
      console.log(resp.data)
      setUser1Name(resp.data.Employer.username);
      //setUser1Dp();
      setUser1PublicKey(resp.data.Employer.publicKey);
      setUser1Bool(resp.data.Employer.verified);
      setUser2Name(resp.data.user2.username);
      //setUser2Dp();
      setUser2PublicKey(resp.data.user2.publicKey);
      setUser2Bool(resp.data.user2.verified);
      return resp.data;
    } catch (error) {
      console.log("Error:",error);
    }
  }
  getProject();
},[]);


useEffect(() => {
  const getbalance=async()=>{
    try{
      const resp=await axios.get(`http://localhost:3000/transaction/getbalance`,{
        withCredentials:true
      });
      console.log(resp.data.resource.coin.value);
      setBalance(resp.data.resource.coin.value);
      return resp.data.resource.coin.value;
    }
    catch(error){
      console.log("Error:",error); 
    }
  }

  getbalance();
},[]);



  const user = [{
    name: "Hacker",
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
                    <p className="text-3xl text-black font-gravity">{user1Name}</p>
                    <p className="text-sm text-gray-600">({`${user1PublicKey.slice(0, 6)}...${user1PublicKey.slice(-4)}`})</p>                    {user1Bool ? (
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
                    <p className="text-3xl text-black font-gravity">{user2Name}</p>
                    <p className="text-sm text-gray-600">({`${user1PublicKey.slice(0, 6)}...${user1PublicKey.slice(-4)}`})</p>
                    {user2Bool ? (
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
                  <CoinButton balance={balance} user1Bool={user1Bool} user2Bool={user2Bool}/> 
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
