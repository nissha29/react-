// import React from 'react'

import { useEffect } from "react"
import { useState } from "react"
import Card from './components/Card'

function App() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.in/api/products")
    const resData = await res.json()
    setData(resData.products)
  }

  useEffect( () => {
    fetchData()
  },[])
  

  return (
    <div className="flex flex-wrap gap-7 justify-center">
      {data?.map((item, index) => {
        return (
          <Card
            key = {index}
            imageUrl = {item.image}
            brand = {item.brand}
            category = {item.category}
            price = {item.price}
          />
        );
      })}
    </div>
  );
}
export default App
