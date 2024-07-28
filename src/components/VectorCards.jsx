/* eslint-disable react/prop-types */
// import React from 'react'

function VectorCards({name, imageURL, desc}) {
  return (
    <div className=" bg-[#00aaff] rounded-xl overflow-hidden w-[200px] h-auto">
        <img 
        src={imageURL}
        className="w-[200px] h-[150px]"
        />
        <div className="px-2 text-[#232222] text-[17px] font-semibold">
            <h2 className="text-[19px]">{name}</h2>
            <h2 className="truncate">{desc}</h2>
        </div>
    </div>
  )
}

export default VectorCards
