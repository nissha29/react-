/* eslint-disable react/prop-types */
// import React from 'react'

function Card({ imageUrl ,brand, category, price}) {
  return (
    <div className="bg-[#f1ca2da8] rounded-lg overflow-hidden">
      <img 
        className="w-[220px] h-[150px]"
        src={imageUrl}
        alt="" 
      />
      <div className="flex flex-col items-center text-[#000] text-[16px] font-semibold">
        <div>Brand: {brand}</div>
        <div>Category: {category}</div>
        <div>Price: ${price}</div>
      </div>
    </div>
  );
}

export default Card