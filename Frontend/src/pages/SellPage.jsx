import React, { useState } from 'react';
import RealEstateCard from '../components/RealEstateCard';
import HousePlaceholder from '../assets/House1.jpg'; // Placeholder image for newly added properties
import Navbar from '../components/Navbar';

const SellPage = () => {
  const [properties, setProperties] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [isRent,setisRent]=useState(false)
  const [newProperty, setNewProperty] = useState({
    image: HousePlaceholder,
    title: "",
    location: "",
    description: "",
    price: "",
    type: "",
    status: "Available",
    size: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({
      ...newProperty,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProperty({
          ...newProperty,
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProperties([...properties, newProperty]);
    setNewProperty({
      image: HousePlaceholder,
      title: "",
      location: "",
      description: "",
      price: "",
      type: "",
      status: "Available",
      size: ""
    });
    setFormVisible(false);
  };

  return (
    <>
    <Navbar/>
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-white">Add Property for Selling</h1>

      <button
        onClick={() => setFormVisible(!formVisible)}
        className="bg-red-600 font-bold text-white px-4 py-2 rounded mb-4"
      >
        {formVisible ? "Cancel" : "List a Property"}
      </button>

      {formVisible && (
        <form onSubmit={handleSubmit} className="mb-8 bg-gradient-to-l from-black to-black p-4 shadow rounded">
          <div className='flex text-white font-bold'>
            <div  onClick={()=>{setisRent(false)}}>Sell</div>
            <div onClick={()=>{setisRent(true)}}>Rent</div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white font-bold">Title</label>
            <input
              type="text"
              name="title"
              value={newProperty.title}
              onChange={handleInputChange}
              className="w-full p-2 border-2 rounded border-red-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white font-bold">Location</label>
            <input
              type="text"
              name="location"
              value={newProperty.location}
              onChange={handleInputChange}
              className="w-full p-2 border-2 rounded border-red-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white font-bold">Description</label>
            <textarea
              name="description"
              value={newProperty.description}
              onChange={handleInputChange}
              className="w-full p-2 border-2 rounded border-red-600"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white font-bold">Price</label>
            <input
              type="number"
              name="price"
              value={newProperty.price}
              onChange={handleInputChange}
              className="w-full p-2 border-2 rounded border-red-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white font-bold">Type</label>
            <select
              name="type"
              value={newProperty.type}
              onChange={handleInputChange}
              className="w-full p-2 border-2 rounded border-red-600"
              required
            >
              <option value="">Select Type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="House">House</option>
              <option value="Condo">Condo</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white font-bold">Size</label>
            <select
              name="size"
              value={newProperty.size}
              onChange={handleInputChange}
              className="w-full p-2 border-2 rounded border-red-600"
              required
            >
              <option value="">Select Size</option>
              <option value="1RK">1RK</option>
              <option value="1BHK">1BHK</option>
              <option value="2BHK">2BHK</option>
              <option value="3BHK">3BHK</option>
              <option value="4BHK">4BHK</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-white font-bold">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border-2 rounded border-red-600"
            />
          </div>
          <button type="submit" className="bg-red-600 font-bold text-white px-4 py-2 rounded">
            Add Property
          </button>
        </form>
      )}

      <h2 className="text-xl font-bold mb-4 text-white">Listed Properties</h2>
      <div className="flex flex-wrap justify-evenly">
        {properties.map((property, index) => (
          <RealEstateCard key={index} realEstate={property} />
        ))}
      </div>
    </div>
    </>
  );
};

export default SellPage;
