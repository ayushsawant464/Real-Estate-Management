import React, { useEffect, useState } from 'react'
import RealEstateCard from './RealEstateCard'
import axiosInstance from '../utils/axiosInstance';

const PropertyList = () => {
    const [properties, setProperties] = useState(null);
    const fetchData = async()=>{
        try {
            const response = await axiosInstance.get('/user/listings');
            console.log(response.data);
            setProperties(response.data);
          } catch (error) {
            console.error('Error fetching todos:', error);
          }


    }
    useEffect(()=>{fetchData()},[])
  return (
    <div className="p-4">
    <div className="flex flex-wrap">
      {properties && properties.map((property, index) => (
        <RealEstateCard key={index} realEstate={property} isSeller={true}/>
      ))}
    </div>
  </div>
  )
}

export default PropertyList