import React from "react";

function Slider() {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100 object-fit-cover" style={{height:550 }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100 object-fit-cover" style={{height:550}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100 object-fit-cover" style={{height:550}}
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
