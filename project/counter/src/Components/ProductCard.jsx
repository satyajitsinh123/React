import React from "react";

function ProductCard({ product }) {
  return (
    <>
      <div style={{width:"300px"}}>
        <div className="card product-card" style={{ objectFit:"cover"}}>
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            style={{ objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <h3 className="card-text description">{product.description}</h3>
            <h4 className="card-text price">
              <strong>Price:</strong> ${product.price}
            </h4>
            <p className="card-text rating">
              <strong>Rating:</strong> {product.rating.rate} (
              {product.rating.count} reviews)
            </p>
            <a href="#" className="btn btn-primary buy-btn">
              <b>Buy Now</b>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
