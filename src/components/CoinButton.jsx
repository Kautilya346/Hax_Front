import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

async function initiateTransaction(receiverAddress, amount) {
  try {
    const resp = await axios.post(
      "http://localhost:3000/transaction/sendmoney",
      {
        receiverAddress,
        amount,
      },
      {
        withCredentials: true,
      }
    );
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.error("Error:", error);
    throw error; // Handle this properly in the calling function
  }
}

function CoinButton({ balance, user1Bool, user2Bool, receiverAddress, amount }) {
  const [showCoin, setShowCoin] = useState(false);
  const [transactionData, setTransactionData] = useState(null);

  async function handleClick() {
    try {
      const resp = await initiateTransaction(receiverAddress, amount);
      setTransactionData(resp); // Store transaction response in state
      setShowCoin(true); // Show coin animation
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  }

  return (
    <div className="bg-[#f5f2e5] flex flex-col items-center justify-center">
      <div>
        {!showCoin && (
          <button
            onClick={handleClick}
            className={`px-8 py-3 bg-[#ffcfcb] border-2 border-black text-xl font-bold rounded-md hover:bg-[#DC483A] transition-all ${
              !(user1Bool && user2Bool)
                ? "cursor-not-allowed opacity-50"
                : "bg-[#f8968d]"
            }`}
            disabled={!(user1Bool && user2Bool)}
          >
            CONFIRM
          </button>
        )}
      </div>
      <AnimatePresence>
        {showCoin && transactionData && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative flex flex-col">
              <motion.div
                className="w-96 h-72 mt-12 bg-white rounded-xl border-2 border-[#DC483A] shadow-lg relative bg-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="absolute inset-0 flex flex-col justify-center px-6 text-gray-800 text-lg font-bold font-mono">
                  <div className="flex justify-between w-full">
                    <span>Gas Used:</span>
                    <span>
                      APT{" "}
                      {transactionData.userTransactionResponse.gas_used *
                        transactionData.userTransactionResponse.gas_unit_price}
                    </span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>Amount:</span>
                    <span>APT {amount}</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>Current Balance:</span>
                    <span>APT {transactionData.resource.coin.value}</span>
                  </div>
                  <button
                    className="mt-6 w-fit mx-auto px-3 py-1 bg-[#ffcfcb] border-2 border-black text-xl rounded-md hover:bg-[#DC483A] transition-all"
                    onClick={() => setShowCoin(false)}
                  >
                    Okay, got it!
                  </button>
                </div>
              </motion.div>
              <motion.p
                className="relative text-center text-xl font-semibold text-green-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 1 }}
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
