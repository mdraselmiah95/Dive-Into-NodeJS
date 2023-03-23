import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { handleSubmit, register, reset } = useForm({});

  const productCategory = ["smartphones", "laptops", "skincare", "fragrances"];
  const productBrand = [
    "Apple",
    "Samsung",
    "OPPO",
    "Huawei",
    "Microsoft Surface",
    "Impression of Acqua Di Gio",
    "HP",
  ];

  const onSubmit = (product) => {
    addProduct(product);
    reset();
  };

  const addProduct = async (product) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/products",
        product
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="pt-4">
      <div className="d-flex align-items-center justify-content-center p-5 overflow-scroll">
        <form
          className="flex-wrap justify-content-between  gap-3 p-5 shadow-lg bg-secondary rounded-2  d-flex"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-100 flex-column d-flex">
            <label className="mb-2 form-label" htmlFor="title">
              Product Title:
            </label>
            <input
              className=" form-control"
              type="text"
              id="title"
              {...register("title")}
            />
          </div>

          <div className="w-100 flex-column d-flex">
            <label className="mb-2 form-label" htmlFor="thumbnail">
              Product Thumbnail:
            </label>
            <input
              className=" form-control"
              type="text"
              id="thumbnail"
              {...register("thumbnail")}
            />
          </div>

          <div className="w-100 flex-column d-flex">
            <label className="mb-2 form-label" htmlFor="price">
              Product Price:
            </label>
            <input
              className=" form-control"
              type="number"
              id="price"
              {...register("price")}
            />
          </div>

          <div className="w-100 flex-column d-flex">
            <label className="mb-2 form-label" htmlFor="rating">
              Product Rating:
            </label>
            <input
              className=" form-control"
              type="number"
              id="rating"
              step="any"
              {...register("rating")}
            />
          </div>

          <div className="d-flex flex-column w-100">
            <label className="mb-3 form-label" htmlFor="category">
              Product Category :
            </label>
            <select
              className=" form-select"
              {...register("category")}
              id="category"
            >
              {productCategory
                .sort((a, b) => a.localeCompare(b))
                .map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
            </select>
          </div>

          <div className="d-flex  w-100 flex-column">
            <label className="mb-3 form-label" htmlFor="brand">
              Product Brand :
            </label>
            <select className=" form-select" {...register("brand")} id="brand">
              {productBrand
                .sort((a, b) => a.localeCompare(b))
                .map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div>

          <div className="w-100 flex-column d-flex">
            <label className="mb-2 form-label" htmlFor="discountPercentage">
              Product Discount:
            </label>
            <input
              className=" form-control"
              type="number"
              step="any"
              id="discountPercentage"
              {...register("discountPercentage")}
            />
          </div>

          <button className="btn btn-outline-warning mx-auto" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
