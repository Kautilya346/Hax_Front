import React, { useState } from "react";
import axios from "axios";
import GridLines from "react-gridlines";
import toast, { Toaster } from "react-hot-toast";

const ServiceForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    image: null,
    description: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, image: file });

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
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
      !formData.description
    ) {
      toast.error("All fields are required.");
      return;
    }

    const formDataToSend = new FormData();
    console.log(formData);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("image", formData.image);
    formDataToSend.append("description", formData.description);

    try {
      const response = await axios.post(
        "http://localhost:3000/service/user",
        formDataToSend,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
        }
    });

      if (response.status === 201) {
        toast.success("Service added successfully!");
        setFormData({
          title: "",
          price: "",
          image: null,
          description: "",
        });
        setImagePreview(null);
      }
    } catch (err) {
      console.error("Error:", err);
      setError(err.response.data.message);
      setSuccess("");
    }
  };

  return (
    <GridLines
      className="grid-area"
      cellWidth={30}
      strokeWidth={5}
      cellWidth2={30}
    >
      <div className="max-w-xl mx-auto backdrop-blur-lg shadow-lg border p-6 rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Service</h2>

        {/* Toaster component to show toast messages */}
        <Toaster position="top-center" reverseOrder={false} />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter service title"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter price"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter service description"
            ></textarea>
          </div>

          {/* Upload Image */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Upload Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
            {imagePreview && (
              <div className="mt-4">
                <p className="text-gray-600 text-sm mb-2">Image Preview:</p>
                <img
                  src={imagePreview}
                  alt="Uploaded"
                  className="w-full h-64 object-cover rounded-md border border-gray-300 shadow-md"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Add Service
          </button>
        </form>
      </div>
    </GridLines>
  );
};

export default ServiceForm;