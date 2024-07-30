import Product from "@/app/components/Product";

async function generateStateParams() {
  const res = await fetch('https://dummyjson.com/products?limit=10&select=title,price');
  const data = await res.json();
  // console.log(data.products)
  return data.products.map((product) => ({
    id:product.id.toString(),
  }))

}
async function getProducts() {
  const res = await fetch('https://dummyjson.com/products/${id}');
  const data = await res.json();
  // console.log(data.products)
  return data

}



export default async function page(params) {
  const product = await getProducts(params.id)
  console.log(product)
  return (
    <div>
     < Product title ={Product.title} price={product.price}/>
    </div>
  )
}
