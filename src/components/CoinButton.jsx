import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

async function initiateTransaction(receiverAddress,amount,setShowCoin){
    try{
    //   const resp=await axios.post(`http://localhost:3000/transaction/sendmoney`,{
    //     receiverAddress,
    //     amount
    //   },{
    //     withCredentials:true
    //   });
    //   console.log(resp.data);

      setShowCoin(true);
    //   setTimeout(() => {
    //   setShowCoin(false);
    //   }, 3000); 

    }catch(error){
      console.log("Error:",error);
    }    
  }

function CoinButton({balance,user1Bool,user2Bool,receiverAddress,amount}) {
  const [showCoin, setShowCoin] = useState(false);

  

  return (
    <div className="bg-[#f5f2e5] flex flex-col items-center justify-center">
        <div>
            {!showCoin && (
            <button
                onClick={() => initiateTransaction(receiverAddress,amount,setShowCoin)}
                className={`px-8 py-3 bg-[#ffcfcb] border-2 border-black text-xl font-bold rounded-md hover:bg-[#DC483A] transition-all ${!(user1Bool && user2Bool) ? 'cursor-not-allowed opacity-50' : 'bg-[#f8968d]'}`}
                disabled={!(user1Bool && user2Bool)}
            >
                CONFIRM
            </button>
            )}
        </div>
        <AnimatePresence>
            {showCoin && (
            <motion.div
                className="fixed inset-0 flex items-center justify-center z-50"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <div className="relative flex flex-col">
                    <motion.div
                        className="w-80 h-80 bg-yellow-400 rounded-full border-4 border-yellow-500 shadow-lg relative bg-center"
                        style={{
                            backgroundImage:
                            "url('https://res.cloudinary.com/dturzqo8m/image/upload/v1737806039/depositphotos_40481065-stock-photo-coin_iihs0f.webp')",
                            backgroundSize: "fill",
                        }}
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ scale: 1.5, rotate: 360 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                        <div className="absolute inset-0 flex flex-col justify-center px-6 text-gray-800 text-lg font-bold font-mono">
                        <div className="flex justify-between w-full">
                            <span>Gas Money:</span>
                            <span>APT 30,000</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span>Transaction:</span>
                            <span>APT 30,000</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span>Current Balance:</span>
                            <span>APT {balance}</span>
                        </div>
                        </div>
                    </motion.div>
                    <motion.p
                        className="mt-24 text-center text-xl font-semibold text-green-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        Transaction Completed!
                </motion.p>
                </div>
            </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}

export default CoinButton;
