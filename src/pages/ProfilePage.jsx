import React, { useEffect, useState } from "react";
import banner from "../assets/banner.png";
import dp from "../assets/dp.jpg";
import { ThreeCircles } from "react-loader-spinner"; // Import the loader
import { FaPaste, FaStar } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [copied, setCopied] = useState(false);
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  const handleCopy = () => {
    if (user?.publicKey) {
      navigator.clipboard.writeText(user.publicKey).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const navigate = useNavigate();

  const handleNavigate = (projectId) => {
    navigate("/transact", { state: { projectId } });
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/profile", {
          withCredentials: true,
        });
        const { user, projects } = response.data;
        const { username, publicKey } = user;
        setUser({ username, publicKey });
        setProjects(projects);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch user profile");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <ThreeCircles
          visible={true}
          height={100}
          width={100}
          color="#DC483A"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="bg-[#f5f2e5] min-h-screen font-sans text-black">
      {/* Banner Section */}
      <div className="relative rounded-lg px-2 py-1 bg-[#f5f2e5]">
        <img
          src={banner}
          alt="banner"
          className="w-full h-[250px] object-cover rounded-lg"
        />
      </div>

      {/* Profile Section */}
      <div className="flex flex-col p-10 gap-6 border-b-2 border-black">
        <div className="flex gap-10">
          <div className="relative">
            <img
              src={dp}
              alt="profile"
              className="w-36 h-36 border-4 border-black rounded-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-[#1fff45] rounded-full w-6 h-6 border-2 border-black"></div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold">{user.username}</h1>
            <div className="flex gap-4 mt-2">
              <div className="px-4 py-2 bg-[#f5f2e5] border-2 border-black rounded-md flex justify-center items-center gap-2">
                <div className="w-44 px-3 py-1 text-gray-700 text-lg tracking-widest font-mono select-none overflow-hidden">
                  {user.publicKey}
                </div>
                <FaPaste
                  className="cursor-pointer text-[#dc483a]"
                  onClick={handleCopy}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="w-[70%] font-mono text-lg">
          Free3Lance is a decentralized freelancing platform that connects
          clients and freelancers directly using blockchain technology.
        </div>
      </div>

      {/* Active Projects Section */}
      <div className="p-10 border-t-2 mt-2 border-black">
        <h2 className="text-3xl font-bold mb-6">Active Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div key={project._id} className="bg-[#f5f2e5] border-2 p-6">
                <h3 className="text-xl font-bold">Service {index + 1}</h3>
                <p className="text-sm font-mono">{project.description}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No active projects.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
