'use client'
import { useEffect, useState } from "react";

export default function Home() {

  const [Product, setProduct] = useState([]);
  useEffect(async () => {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    console.log(data)
    setProduct(data.products);
  }, [])
  
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Product List</h1>
        {
          Product.map((item) => { // Changed 'product' to 'Product'
            return <h1> Name: {item.title}</h1>
          })
        }

      </div>
    </main>
  )
}
