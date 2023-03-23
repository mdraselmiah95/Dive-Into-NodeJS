import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Product from "./Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await axios.get("http://localhost:8080/api/v1/products");
    setProducts(data.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {products?.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
      <button className="btn btn-outline-dark">
        <Link to="addProduct">Add-Product</Link>
      </button>
    </div>
  );
};

export default Home;
