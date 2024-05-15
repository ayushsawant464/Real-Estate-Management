import React from 'react';
import House1 from '../../assets/House1.jpg';

const data = {
  image: House1,
  title: "Ghar",
  location: "Mumbai",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
  price: "200",
  type: "House",
  status: "Sold Out",
  size: '1RK'
};

const PropertyDetail = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-l from-black to-Black text-white shadow-lg rounded-lg overflow-hidden mt-8 mb-8">
      <div className="aspect-w-16 aspect-h-9">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover object-center" />
      </div>
      <div className="p-6">
        <h2 className="text-3xl text-Red font-bold mb-2">{data.title}</h2>
        <p className="text-White mb-4">{data.location}</p>
        <p className="text-gray-400 mb-6">{data.description}</p>
        <div className="flex flex-col">
          <div className="flex mb-2">
            <p className="text-lg font-semibold w-1/3">Price:</p>
            <p className="text-lg font-semibold w-2/3"><span className="text-Red">${data.price}</span></p>
          </div>
          <div className="flex mb-2">
            <p className="text-lg font-semibold w-1/3">Type:</p>
            <p className="text-lg font-semibold w-2/3">{data.type}</p>
          </div>
          <div className="flex mb-2">
            <p className="text-lg font-semibold w-1/3">Status:</p>
            <p className={`text-lg font-semibold w-2/3 text-${data.status === 'Available' ? 'green' : 'red'}-600`}>{data.status}</p>
          </div>
          <div className="flex">
            <p className="text-lg font-semibold w-1/3">Size:</p>
            <p className="text-lg font-semibold w-2/3">{data.size}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;