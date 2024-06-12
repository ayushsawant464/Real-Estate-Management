import React,{useEffect, useState} from 'react'
import RealEstateCard from '../components/RealEstateCard'
import House1 from "../assets/House1.jpg"
import House2 from "../assets/House2.jpg"
import Filters from '../components/Filters';
import { FaSearch } from 'react-icons/fa';
import axiosInstance from '../utils/axiosInstance'


const categories = {
  type: ['Apartment', 'Villa', 'House', 'Condo'],
  size: ['1RK', '1BHK', '2BHK', '3BHK', '4BHK'],
  status: ['Sold Out', 'Available'],
};

const BuyPage = () => {
  const [data,setData]=useState(null)
  async function fetchData() {
    try {
      const response = await axiosInstance.get('/user/buy');
      console.log(response.data);
      setData(response.data)
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }
  useEffect(()=>{
    fetchData()
  },[])
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

  const filteredProperties = data?.filter((property) => {
    const matchesCategory = 
      (filteredCategories.type.length === 0 || filteredCategories.type.includes(property.type)) &&
      (filteredCategories.size.length === 0 || filteredCategories.size.includes(property.size)) &&
      (filteredCategories.status.length === 0 || filteredCategories.status.includes(property.status));
  
    const matchesSearch = 
      property &&
      ((property.title?.toLowerCase().includes(searchQuery.toLowerCase()) ??[]) ||
      property.description.toLowerCase().includes(searchQuery.toLowerCase()));
  
    return matchesCategory && matchesSearch;
  }) ?? [];
  
  

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