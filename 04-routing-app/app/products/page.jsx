import React from 'react'
import Product from '../components/Product';
import ProductButton from '../components/ProductButton';

async function getProducts(){
    const res = await fetch('https://dummyjson.com/products?limit=10&select=title,price');
    const data = await res.json();
    // console.log(data.products)
    return data.products

}
export default async function Products() {
    const products = await getProducts()
    console.log(products);
  return (
    <div>
          <h2>Products</h2>
          {
              products.length > 0 && (
                  products.map(({ id, title, price }) =>
                  {
                      // return <h2>Title:{title}</h2>; 
                      return
                      <>
                          <Product key={id} title={title} price={price} />
                          <ProductButton key={id} id={id } />
                      </>
                })
            )
          }
    </div>
  )
}
