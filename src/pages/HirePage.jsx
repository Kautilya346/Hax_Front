import { useLocation } from 'react-router-dom';
import GridLines from "react-gridlines";

const HirePage = () => {
  const location = useLocation();
  const { person } = location.state || {};  

  return (
    <div className='font-serif'>
      {person ? (
        <div>
            <GridLines className=" h-screen grid-area" cellWidth={20} strokeWidth={1}>
            <h1 className='text-4xl px-16 py-5 font-bold font-gravity ml-5'>{person.name}</h1>
            <div className='flex justify-between px-16 gap-44 ml-5'>
                <div className='flex flex-col items-center'>
                    <img className='w-2/3 rounded-2xl shadow-2xl shadow-gray-900 mb-10 hover:scale-110 transition-all' src={person.dp} alt="DP" />
                    <p className='mt-2 text-2xl '>{person.description}</p>
                    <p className='mt-4 text-lg '>Contact Me : {person.contact}</p>
                </div>
                <div className='w-2/3 mr-5'>
                    <textarea className='shadow-2xl shadow-gray-500 w-full h-2/3 p-3 outline-none placeholder-gray-500 bg-[#b0aea7] text-gray-900 rounded-xl text-xl ' name="description" id="" placeholder='Describe the Work that you want!'></textarea>
                    <div className='flex items-center mt-3'>
                        <p className='font-bold mx-3 mt-1 text-xl'>APT {person.price}</p>
                        <button className='shadow-2xl shadow-gray-900 mt-2 bg-[#73642b] text-white px-4 py-2 rounded-lg font-semibold hover:scale-110 transition-all'>HIRE</button>
                    </div>
                </div>
            </div>
            </GridLines>
        </div>  

      ) : (
        <p>No person data found</p>
      )}
    </div>
  );
};

export default HirePage;