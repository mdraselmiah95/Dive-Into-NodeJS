import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-3">
          <div class="card">
            <div class="image-container">
              <div class="first">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="discount">-25%</span>
                  <span class="wishlist">
                    <i class="fa fa-heart-o"></i>
                  </span>
                </div>
              </div>

              <img
                src="**url**"
                class="img-fluid rounded thumbnail-image"
                alt=""
              />
            </div>

            <div class="product-detail-container p-2">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="dress-name">**title**</h5>

                <div class="d-flex flex-column mb-2">
                  <span class="new-price">&#8377 **price**</span>
                  <small class="old-price text-right">&#8377 700</small>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center pt-1">
                <div>
                  <i class="fa fa-star-o rating-star"></i>
                  <span class="rating-number">**rating**</span>
                </div>

                <span class="buy">BUY +</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
