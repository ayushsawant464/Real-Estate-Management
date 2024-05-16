import React, { useEffect, useState } from 'react';
import PropertyList from '../components/PropertyList';
import axiosInstance from '../utils/axiosInstance';

const SellPage = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [isRent,setisRent]=useState(false)
  const [refresh,setRefresh]= useState(false)
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({
      ...newProperty,
      [name]: value
    });
  };

  useEffect(()=>{},[refresh])


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const propertyData = { ...newProperty, isRent }; 
      const response = await axiosInstance.post('/property/create', propertyData);
      console.log(response.data);
      setNewProperty({
        name:"",
        imageUrl: "",
        title: "",
        location: "",
        description: "",
        price: "",
        type: "",
        status: "Available",
        size: ""
      });
      setFormVisible(false);
      // setRefresh((prevRefresh) => !prevRefresh); 
      window.location.reload(true);
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };
  

  return (
    <>
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
      )}
            <h2 className="text-2xl text-white font-bold mb-4">Listed Properties</h2>

        <PropertyList/>
    </div>
    </>
  );
};

export default SellPage;
