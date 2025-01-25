import React, { useState } from "react";
import axios from "axios";
import GridLines from "react-gridlines";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: null,
    description: "",
    domain: "",
    contact: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, image: file });

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.price ||
      !formData.image ||
      !formData.description ||
      !formData.domain ||
      !formData.contact
    ) {
      toast.error("All fields are required.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("domain", formData.domain);
    formDataToSend.append("contact", formData.contact.toString());

    try {
      const response = await axios.post(
        "http://localhost:3000/service/user",
        formDataToSend,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 201) {
        toast.success("Service added successfully!");
        setFormData({
          title: "",
          price: "",
          image: null,
          description: "",
          domain: "",
          contact: "",
        });
        setImagePreview(null);
      }
    } catch (err) {
      toast.error("Failed to add service.");
      console.error("Error:", err);
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-[#f5f2e5] font-mono">
      <GridLines
        className="min-h-screen h-full w-full flex justify-center pt-10 grid-area"
        cellWidth={20}
        strokeWidth={1}
      >
        <motion.div
          className="w-[600px] border-2 border-black rounded-lg p-8 bg-[#ffffff] shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-black text-center border-b-2 border-black pb-4 mb-6">
            Add New Service
          </h2>

          <Toaster position="top-center" reverseOrder={false} />

          <motion.form onSubmit={handleSubmit} className="space-y-6">
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-black font-bold mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 border-2 border-black rounded-md bg-[#f5f2e5] outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter service title"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-black font-bold mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full p-3 border-2 border-black rounded-md bg-[#f5f2e5] outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter price"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-black font-bold mb-1">Domain</label>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="w-full p-3 border-2 border-black rounded-md bg-[#f5f2e5] outline-none focus:ring-2 focus:ring-black"
              >
                <option value="">Select domain</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Graphic Designing">Graphic Designing</option>
              </select>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-black font-bold mb-1">
                Contact Number
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full p-3 border-2 border-black rounded-md bg-[#f5f2e5] outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter contact number"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-black font-bold mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border-2 border-black rounded-md bg-[#f5f2e5] outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter service description"
              ></textarea>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-black font-bold mb-1">
                Upload Image
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-2 border-2 border-black rounded-md bg-[#f5f2e5] outline-none focus:ring-2 focus:ring-black"
              />
              {imagePreview && (
                <div className="mt-4 border-2 border-black rounded-md p-3 bg-[#f5f2e5]">
                  <p className="text-black text-sm font-bold mb-2">
                    Image Preview:
                  </p>
                  <motion.img
                    src={imagePreview}
                    alt="Uploaded"
                    className="w-full h-64 object-cover rounded-md border border-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-[#ff6a5c] border-2 border-black text-black py-3 rounded-md font-bold hover:bg-[#DC483A] transition-all shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add Service
            </motion.button>
          </motion.form>
        </motion.div>
      </GridLines>
    </div>
  );
};

export default ServiceForm;
