// import React from 'react'

import { useEffect } from "react"
import { useState } from "react"
import Card from '../components/Card.jsx'

function App() {
  const [data, setData] = useState([])
  const [device, setDevice] = useState("")
  const [filter, setFiltered]  = useState([])

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.in/api/products")
    const resData = await res.json()
    setData(resData.products)
  }

  useEffect( () => {
    fetchData()
  },[])
  
  const filterProducts = (getDevice) => {
    setDevice(getDevice);
  };

  useEffect(() => {
    const filtered = data.filter((item) => {
      return item.category === device
    });
    setFiltered(filtered);
  }, [data, device]);


  return (
    <div>
      <div className="flex justify-center items-center">
        <button className="bg-[#fffffda5] rounded-md w-32 h-10 font-semibold text-[17px]">Apply Filters</button>
      </div>
      <div className="flex gap-4 justify-center items-center font-semibold text-[17px] mt-10 flex-wrap">
        <button onClick={() => filterProducts("audio")} className="bg-[#f5cd3da5] rounded-md w-32 h-10">audio</button>
        <button onClick={() => filterProducts("gaming")} className="bg-[#f5cd3da5] rounded-md w-32 h-10">gaming</button>
        <button onClick={() => filterProducts("tv")} className="bg-[#f5cd3da5] rounded-md w-32 h-10">tv</button>
        <button onClick={() => filterProducts("mobile")} className="bg-[#f5cd3da5] rounded-md w-32 h-10">mobile</button>
      </div>

      <div className="flex flex-wrap gap-7 justify-center mt-10 mx-14">
        {device ? (
          filter?.map((item, index) => (
            <Card
              key={index}
              imageUrl={item.image}
              brand={item.brand}
              category={item.category}
              price={item.price}
            />
          ))
        ) : (
          data?.map((item, index) => (
            <Card
              key={index}
              imageUrl={item.image}
              brand={item.brand}
              category={item.category}
              price={item.price}
            />
          ))
        )}
      </div>

    </div>
  );
}
export default App
