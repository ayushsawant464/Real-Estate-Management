import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Filters = ({ categories, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState({
        type: [],
        size: [],
        status: []
  });

  const handleCategoryChange = (categoryType, categoryValue) => {
    const newSelectedCategories = selectedCategories[categoryType].includes(categoryValue)
      ? selectedCategories[categoryType].filter((c) => c !== categoryValue)
      : [...selectedCategories[categoryType], categoryValue];
    
    const updatedSelectedCategories = {
      ...selectedCategories,
      [categoryType]: newSelectedCategories
    };

    setSelectedCategories(updatedSelectedCategories);
    onFilterChange(updatedSelectedCategories);
  };

  const removeCategory = (categoryType, categoryValue) => {
    const newSelectedCategories = selectedCategories[categoryType].filter((c) => c !== categoryValue);
    const updatedSelectedCategories = {
      ...selectedCategories,
      [categoryType]: newSelectedCategories
    };

    setSelectedCategories(updatedSelectedCategories);
    onFilterChange(updatedSelectedCategories);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg ml-8">
      <h2 className="text-2xl font-bold mb-4">Filter by Category</h2>

      {Object.keys(categories).map((categoryType) => (
        <div key={categoryType} className="mb-4">
          <h3 className="text-xl font-bold mb-2 capitalize">{categoryType}</h3>
          <div className="grid grid-cols-2 gap-4 mb-2">
            {categories[categoryType].map((categoryValue) => (
              <div key={categoryValue} className="flex items-center">
                <input
                  type="checkbox"
                  id={`${categoryType}-${categoryValue}`}
                  value={categoryValue}
                  checked={selectedCategories[categoryType].includes(categoryValue)}
                  onChange={() => handleCategoryChange(categoryType, categoryValue)}
                  className="mr-2 w-4 h-4"
                />
                <label htmlFor={`${categoryType}-${categoryValue}`} className="text-gray-700">
                  {categoryValue}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      {Object.keys(selectedCategories).some((categoryType) => selectedCategories[categoryType].length > 0) && (
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Selected Filters:</h3>
          <div className="flex flex-wrap gap-2">
            {Object.keys(selectedCategories).map((categoryType) =>
              selectedCategories[categoryType].map((categoryValue) => (
                <div key={`${categoryType}-${categoryValue}`} className="flex items-center bg-gradient-to-r from-Red to-red-700 px-2 py-1 rounded text-white">
                  <span className="mr-2">{categoryValue}</span>
                  <button onClick={() => removeCategory(categoryType, categoryValue)}>
                    <FaTimes className="h-5 w-5 text-white hover:text-gray-400 transition-colors duration-200" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
