import React from "react";

const Filter = ({ categories, onFilterChange }) => {
  return (
    <div className=" mx-auto flex justify-center mt-3 h-15 shadow-md pb-3">
    
      <div className="flex gap-5 flex-wrap">
        {categories.map((category) => (
          <button key={category} onClick={() => onFilterChange(category)} 
          className="text-gray-700 border-gray-700 rounded-full 
          font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700
          hover:text-white border-2 transition duration-300 ease-in">
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;