import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { title, thumbnail, rating, price, discountPercentage } = product;
  const discounted_price = Math.round(
    price - (price * discountPercentage) / 100
  );
  return (
    <div className="col">
      <div className="card">
        <div className="image-container">
          <div className="first">
            <div className="d-flex justify-content-between align-items-center">
              <span className="discount">-25%</span>
              <span className="wishlist">
                <i className="bi bi-heart"></i>
              </span>
            </div>
          </div>

          <img
            style={{ width: "300px", height: "220px" }}
            src={thumbnail}
            className="img-fluid rounded thumbnail-image"
            alt=""
          />
        </div>

        <div className="product-detail-container p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="dress-name">{title}</h5>

            <div className="d-flex flex-column mb-2">
              <span className="new-price"> $ {price}</span>
              <small className="old-price text-right">
                $ {discounted_price}
              </small>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center pt-1">
            <div>
              <i className="fa fa-star-o rating-star"></i>
              <span className="rating-number">{rating}</span>
            </div>

            <span className="buy">BUY +</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
