import React, { useState, useEffect } from 'react';
import House1 from '../../assets/House1.jpg';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { Link } from 'react-router-dom';

const PropertyDetail = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`/property/get/${id}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching property:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      console.log(data.isRent)
      if (data.isRent) {
        const response = await axiosInstance.post(`/user/rentProperty/${id}`);
      } else {
        const response = await axiosInstance.post(`/user/buyProperty/${id}`);
      }
      console.log('Transaction completed');
      fetchData(); // Refresh property details after the transaction
    } catch (error) {
      console.error('Error completing transaction: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    data && (
      <div className="w-full max-w-2xl mx-auto bg-gradient-to-l from-black to-Black text-white shadow-lg rounded-lg overflow-hidden mt-8 mb-8">
        <div className="aspect-w-16 aspect-h-9">
          <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover object-center" />
        </div>
        <div className="p-6">
          <h2 className="text-3xl text-Red font-bold mb-2">{data.title}</h2>
          <p className="text-White mb-4">{data.location}</p>
          <p className="text-gray-400 mb-6">{data.description}</p>
          <div className="flex flex-col">
            <div className="flex mb-2">
              <p className="text-lg font-semibold w-1/3">Price:</p>
              <p className="text-lg font-semibold w-2/3">
                <span className="text-Red">${data.price}</span>
              </p>
            </div>
            <div className="flex mb-2">
              <p className="text-lg font-semibold w-1/3">Type:</p>
              <p className="text-lg font-semibold w-2/3">{data.type}</p>
            </div>
            <div className="flex mb-2">
              <p className="text-lg font-semibold w-1/3">Status:</p>
              <p className={`text-lg font-semibold w-2/3 text-${data.status === 'Available' ? 'green' : 'red'}-600`}>
                {data.status}
              </p>
            </div>
            <div className="flex">
              <p className="text-lg font-semibold w-1/3">Size:</p>
              <p className="text-lg font-semibold w-2/3">{data.size}</p>
            </div>
            {data.status === 'Available' && (
              <div className="bg-Red p-2 px-4 rounded-md text-white mx-auto mt-4 w-auto">
                {data.isRent && (
                  <button onClick={handleSubmit}>
                    Rent
                  </button>
                )}
                {!data.isRent && (
                  <button onClick={handleSubmit}>
                    Buy
                  </button>
                )}
              </div>
            )}
            {data.status === 'Sold Out' && (
              <div className="bg-gray-700 p-2 px-4 rounded-md text-slate-400 mx-auto mt-4 w-auto cursor-not-allowed">
                <button disabled>{data.isRent ? 'Rent' : 'Buy'}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default PropertyDetail;
