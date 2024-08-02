import React from "react";
import { ProductData } from "./Data";

function Product({ products }) {
  const cardData = ProductData.map((products) => (
    <li key={products.id}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={products.image}
          className="card-img-top"
          style={{ height: "200px", objectFit: "contain" }}
          alt={products.title}
        />
        <div className="card-body">
          <h5 className="card-title">{products.title.slice(0, 40)}</h5>
          <p className="card-text">{products.description.slice(0, 80)}</p>
          <a href="#" className="btn btn-primary">
            {products.price}
          </a>
        </div>
      </div>
    </li>
  ));

  return (
    <>
      <div className="container mt-5 p-4 text-bg-danger">
        <h1 className="text-center py-3 text-bg-black mb-5">Products Card</h1>
        <ul className="list-unstyled d-flex justify-content-between flex-wrap gap-5">
          {cardData}
        </ul>
      </div>
    </>
  );
}

export default Product;
