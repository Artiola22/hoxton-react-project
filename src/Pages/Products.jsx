import { useEffect, useState } from "react";

import ProductList from "../components/ProductList";

function Products() {
  //fetch products
  const [products, setProducts] = useState([])

  useEffect (() => {
fetch('http://localhost:3000/products')
.then(resp => resp.json())
.then(productsFromServer => setProducts(productsFromServer))
  }, [])
  return (
    <section className="products-container main-wrapper">
      <ProductList products={products}/>
    </section>
  );
}
export default Products;
