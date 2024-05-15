import React, { useState } from 'react';
import RealEstateCard from '../components/RealEstateCard';
import House1 from "../assets/House1.jpg";
import House2 from "../assets/House2.jpg";
import Filters from '../components/Filters';

const data = [
  {
    image: House1,
    title: "Ghar",
    location: "Mumbai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
    price: "200/Month",
    type: "House",
    size: '1RK'
  },
  {
    image: House2,
    title: "Ghat",
    location: "Mumbai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
    price: "300/Month",
    type: "Villa",
    size: '1RK'
  },
  {
    image: House2,
    title: "Ghat",
    location: "Mumbai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
    price: "300/Month",
    type: "Condo",
    size: '1BHK'
  },
  {
    image: House2,
    title: "Ghat",
    location: "Mumbai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
    price: "300/Month",
    type: "Condo",
    size: '1BHK'
  },
  {
    image: House2,
    title: "Ghat",
    location: "Mumbai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
    price: "300/Month",
    type: "Condo",
    size: '2BHK'
  },
  {
    image: House2,
    title: "Ghat",
    location: "Mumbai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
    price: "300/Month",
    type: "Condo",
    size: '2BHK'
  }
];

const categories = {
  type: ['Apartment', 'Villa', 'House', 'Condo'],
  size: ['1RK', '1BHK', '2BHK', '3BHK', '4BHK'],
};

const BuyPage = () => {
  const [filteredCategories, setFilteredCategories] = useState({
    type: [],
    size: [],
    status: []
  });

  const handleFilterChange = (selectedCategories) => {
    setFilteredCategories(selectedCategories);
  };

  const filteredProperties = data.filter((property) => {
    return (
      (filteredCategories.type.length === 0 || filteredCategories.type.includes(property.type)) &&
      (filteredCategories.size.length === 0 || filteredCategories.size.includes(property.size)) &&
      (filteredCategories.status.length === 0 || filteredCategories.status.includes(property.status))
    );
  });

  return (
    <>  
      <div className='w-full flex'>
        <div className='w-[30%] my-16'>
          <Filters categories={categories} onFilterChange={handleFilterChange} />
        </div>
        <div className='flex flex-wrap justify-evenly w-full my-12'>
          {filteredProperties.map((realEstate, index) => (
            <RealEstateCard key={index} realEstate={realEstate} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BuyPage;