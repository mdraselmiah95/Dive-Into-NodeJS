import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const data = await axios.get("http://localhost:8080/api/v1/products");
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Product />
    </div>
  );
};

export default Home;
