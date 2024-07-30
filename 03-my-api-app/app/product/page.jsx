import React from 'react'
import ProductButton from './product';


async function productList() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    return data.products;

}
export default function page() {
    let products =  productList();
    console.log(products)
    return (
      <>
    <div>
          <h1>ProductList</h1>
          {
            products.map((item) =>
                <div>
                  <h1>Name : {item.title}</h1>
                <ProductButton price={ item.price} />
                </div>
            )
          }
            </div>
        </>
  )
}
