import React, { useState } from "react";
import ProductData from "../../public/data.json";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState(ProductData);

  return (
    <div>
      {products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};

export default Home;
