import React, { useEffect, useState } from 'react';

const PropertyForm = ({ onSubmit , data }) => {
    console.log("hello")
const [isRent,setisRent]=useState(false)
  const [newProperty, setNewProperty] = useState({
    imageUrl: "",
    title: "",
    location: "",
    description: "",
    price: "",
    type: "",
    status: "Available",
    size: ""
  });
  useEffect(() => {
    setNewProperty({
        ...newProperty,
        imageUrl: data.imageUrl,
        title: data.title,
        location: data.location,
        description: data.description,
        price: data.price,
        type: data.type,
        status: "Available",
        size: data.size,
    });
}, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({
      ...newProperty,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({...newProperty,isRent});
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-gradient-to-l from-black to-black p-4 shadow rounded">
      <div className='flex gap-6 text-2xl text-white font-bold mb-8'>
    <div className={`${!isRent?"border-t-4 border-t-red-600 ":"border-t-4 border-transparent hover:text-slate-300 "}`}  onClick={()=>{setisRent(false)}}>Sell</div>
    <div className={`${isRent?"border-t-4 border-t-red-600 ":"border-t-4 border-transparent hover:text-slate-300"}`} onClick={()=>{setisRent(true)}}>Rent</div>
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
      type="text"
      name="imageUrl"
      value={newProperty.imageUrl}
      onChange={handleInputChange}
      className="w-full p-2 border-2 rounded border-red-600"
    />
  </div>
  <button type="submit" className="bg-red-600 font-bold text-white px-4 py-2 rounded">
    Add Property
  </button>
    </form>
  );
};

export default PropertyForm;
