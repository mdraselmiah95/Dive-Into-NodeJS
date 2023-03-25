import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Product from "./Product";

axios.defaults.baseURL = "http://localhost:8080/api/v1";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhc2VsQGdtYWlsLmNvbSIsImlhdCI6MTY3OTc0NTc2M30.Lx7B2A78i3m3z3ahQpK7FaXfQRcN8rkrXaGOUYav0by0o3UqpqxAkS_3T_8D8Eix3JciZ7H-NOXxCJDSj5aHZ5B8FSLQftcS5tgAZEws0UB2AVkVL4BPbqPB9l4v3L1cpzokmgA5jEFvJhViziJ6tGZu0q1CRBt7tGgtVKM4km5g23j5fXTnB4QUf1z6v9w7-sk6l71qeAGd5tsWB_buoTQoGYN2IyQGV-3QSVB9ZVQoRg08aRjxAzzaCqtxXa5Qiy3nVlUaHooothHIn4YmqHhPk63iPRe5qwE65NjxoOiPuYBGzIWm9BfH0ie4qRtTjbg_b4rw7MguUSGe454ekw";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const getProducts = async () => {
    const data = await axios.get("/products");
    setProducts(data.data);
    setTotal(data.data.length);
  };

  const handlePage = async (page) => {
    const res = await axios.get("/products?page=" + page);
    setProducts(res.data.data);
  };

  // Sorting Front-end
  const handleSort = async (e) => {
    console.log(e.target.value);
    const field = e.target.value.split(".");
    const res = await axios.get(`/products?sort=${field[0]}&order=${field[1]}`);
    setProducts(res.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container my-5">
      <button className="btn btn-outline-dark my-3">
        <Link to="addProduct">Add-Product</Link>
      </button>
      <div className="py-5">
        <select name="" id="" onChange={handleSort}>
          <option value="price.desc">Price High to Low</option>
          <option value="price.asc">Price Low to High</option>
          <option value="rating.desc">Rating High to Low</option>
          <option value="rating.asc">Rating Low to High</option>
        </select>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-3 pt-5">
        {products?.map((product) => (
          <Product
            product={product}
            key={product._id}
            setProducts={setProducts}
            products={products}
          />
        ))}
      </div>
      <div className="py-3">
        {Array(Math.ceil(total / 4))
          .fill(0)
          .map((e, i) => (
            <button key={i} onClick={() => handlePage(i + 1)}>
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Home;
