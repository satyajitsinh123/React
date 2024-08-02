import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-black">
        <div className="card-group mt-5 container">
          <div className="card bg-black text-light">
            <div className="card-body ">
              <h5 className="card-title mx-5">Contact us</h5>
              {/* <p className="card-text">About us</p> */}
              <ul className="list-unstyled mx-5 mt-3">
                About us
                <li>Corporate</li>
                <li>Careers</li>
                <li>Team</li>
                <li>Dineout</li>
                <li>burger one</li>
              </ul>
            </div>
          </div>
          <div className="card bg-black text-light">
            <div className="card-body">
              <h5 className="card-title mx-5">About us</h5>
              <ul className="list-unstyled mx-5 mt-3">
                Help & Support
                <li>Partner with us</li>
                <li>Ride with us</li>
                <li>Cookie policy</li>
                <li>Privacy policy</li>
                <li>Investor Relations</li>
              </ul>
            </div>
          </div>
          <div className="card bg-black text-light">
            <div className="card-body">
              <h5 className="card-title mx-5">Company</h5>
              <ul className="list-unstyled mx-5 mt-3">
                <li>Banglore</li>
                <li>Hydrabad</li>
                <li>Delhi</li>
                <li>Mumbai</li>
                <li>Pune</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
