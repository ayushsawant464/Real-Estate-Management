import React,{useState} from 'react'
import RealEstateCard from '../components/RealEstateCard'
import House1 from "../assets/House1.jpg"
import House2 from "../assets/House2.jpg"
import Filters from '../components/Filters';
import { FaSearch } from 'react-icons/fa';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const data = [
  {
    image: House1,
    title: "Ghar",
    location: "Mumbai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
    price: "200",
    type: "House",
    status: "Available",
    size: '1RK'
  },
  {
    image: House2,
    title: "Ghat",
    location: "Mumbai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
    price: "300",
    type: "Villa",
    status: "Available",
    size: '1RK'
  },
  {
    image: House2,
    title: "Ghat",
    location: "Mumbai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
    price: "300",
    type: "Condo",
    status: "Available",
    size: '1BHK'
  },
  {
    image: House2,
    title: "Ghat",
    location: "Mumbai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
    price: "300",
    type: "Condo",
    status: "Sold Out",
    size: '1BHK'
  },
  {
    image: House2,
    title: "Ghat",
    location: "Mumbai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
    price: "300",
    type: "Condo",
    status: "Sold Out",
    size: '2BHK'
  },
  {
    image: House2,
    title: "Ghat",
    location: "Mumbai",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus quo deleniti fugit magnam provident odit explicabo nobis soluta hic, saepe voluptatibus facere enim, minima, corporis id blanditiis neque! Possimus.",
    price: "300",
    type: "Condo",
    status: "Sold Out",
    size: '2BHK'
  }
];

const categories = {
  type: ['Apartment', 'Villa', 'House', 'Condo'],
  size: ['1RK', '1BHK', '2BHK', '3BHK', '4BHK'],
  status: ['Sold Out', 'Available'],
};

const BuyPage = () => {
  const [filteredCategories, setFilteredCategories] = useState({
    type: [],
    size: [],
    status: []
  });
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (selectedCategories) => {
    setFilteredCategories(selectedCategories);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProperties = data.filter((property) => {
    const matchesCategory = 
      (filteredCategories.type.length === 0 || filteredCategories.type.includes(property.type)) &&
      (filteredCategories.size.length === 0 || filteredCategories.size.includes(property.size)) &&
      (filteredCategories.status.length === 0 || filteredCategories.status.includes(property.status));

    const matchesSearch = 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>  
    
      <div className='w-full flex flex-col items-center'>
        <div className='text-3xl text-white'>Buy Properties</div>
        <div className='w-full max-w-2xl my-4'>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search properties..." 
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 pl-10"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-500" />
          </div>
        </div>
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
      </div>
     
    </>
  );
};

export default BuyPage;