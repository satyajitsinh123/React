import React from "react";

function Card({ img, title, pera }) {
  return (
    <>
      <div className="main">
        <div class="card" style={{ width: 260 }}>
          <img src={img} style={{ height: 200 }} />
          <div class="card-body text-bg-danger bg-secondary">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{pera}</p>
            <a href="#!" class="btn btn-primary bg-dark border-0" data-mdb-ripple-init>
              Button
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
