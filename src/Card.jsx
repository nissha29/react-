/* eslint-disable react/prop-types */
// import React from 'react'

function Card({ imageUrl ,brand, category, price}) {
  return (
    <div className="bg-[#694f8ee9] rounded-lg overflow-hidden">
      <img 
        className="w-[250px] h-[200px]"
        src={imageUrl}
        alt="" 
      />
      <div className="flex flex-col items-center text-[#fff] text-[18px] font-semibold">
        <div>Brand: {brand}</div>
        <div>Category: {category}</div>
        <div>Price: ${price}</div>
      </div>
    </div>
  );
}

export default Card