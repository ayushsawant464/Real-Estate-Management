import React, { useState } from 'react';
import RealEstateCard from '../components/RealEstateCard';
import { FaEdit } from 'react-icons/fa'; // Importing edit icon from react-icons
import House1 from '../assets/House1.jpg'; // Placeholder image for user profile

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    profilePic: House1,
    properties: [
      {
        image: House1,
        title: "Ghar",
        location: "Mumbai",
        description: "A beautiful house in Mumbai.",
        price: "200",
        type: "House",
        status: "Available",
        size: "1RK"
      },
      {
        image: House1,
        title: "Villa",
        location: "Pune",
        description: "Luxurious villa in Pune.",
        price: "500",
        type: "Villa",
        status: "Available",
        size: "3BHK"
      },
      {
        image: House1,
        title: "Villa",
        location: "Pune",
        description: "Luxurious villa in Pune.",
        price: "500",
        type: "Villa",
        status: "Available",
        size: "3BHK"
      }
    ]
  });

  const [editFormVisible, setEditFormVisible] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({
      ...updatedUser,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUser(updatedUser);
    setEditFormVisible(false);
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-red-500 to-red-700 text-white flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p>{user.email}</p>
            </div>
          </div>
          <FaEdit
            className="text-2xl cursor-pointer"
            onClick={() => setEditFormVisible(!editFormVisible)}
          />
        </div>

        {editFormVisible && (
          <form onSubmit={handleFormSubmit} className="p-4 bg-gray-100">
            <div className="mb-4">
              <label className="block mb-2 font-bold">Name</label>
              <input
                type="text"
                name="name"
                value={updatedUser.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Email</label>
              <input
                type="email"
                name="email"
                value={updatedUser.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
              Save
            </button>
          </form>
        )}

        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Listed Properties</h2>
          <div className="flex flex-wrap">
            {user.properties.map((property, index) => (
              <RealEstateCard key={index} realEstate={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
