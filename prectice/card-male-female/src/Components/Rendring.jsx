import React from "react";
import Women from "./Women";
import Men from "./Men";

function Rendring() {
  let userValue = prompt("enter your product");
  const main = userValue.toUpperCase()
  if (main === "MEN") {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center gap-4 mt-5">
          <Men
            img="img-tshirst-2"
            title="black-tshirt"
            pera="Louis Philippe
            Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
            price="price : ₹929"
            add="Add to card"
          ></Men>
          <Men
            img="img-tshirst-3"
            title="yelllo-tshirt"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
            price="price : ₹1029"
            add="Add to card"
          ></Men>
          <Men
            img="img-tshirst-4"
            title="white-tshirt"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
            price="price : ₹4030"
            add="Add to card"
          ></Men>
          <Men
            img="img-shoes-2"
            title="army-shose"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
            price="price : ₹1340"
            add="Add to card"
          ></Men>
          <Men
            img="img-shoes-3"
            title="black puma"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
            price="price : ₹6050"
            add="Add to card"
          ></Men>
          <Men
            img="img-shoes-4"
            title="bata shose"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
            price="price : ₹1520"
            add="Add to card"
          ></Men>
          <Men
            img="img-shoes"
            title="rebook"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
            price="price : ₹2351"
            add="Add to card"
          ></Men>
          <Men
            img="img-watch"
            title="rado"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
            price="price : ₹4020"
            add="Add to card"
          ></Men>
          <Men
            img="img-watch-3"
            title="fast track"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
            price="price : ₹3500"
            add="Add to card"
          ></Men>
          <Men
            img="img-watch-4"
            title="rolex"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
            price="price : ₹2029"
            add="Add to card"
          ></Men>
        </div>
      </div>
    );
  } else if (main === "WOMEN") {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center gap-4 mt-5 "> 
          <Women
            img="women-beg-2"
            title="party-beg"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
            price="price : 6465"
            add="Add to card"
          ></Women>
          <Women
            img="women-beg-3"
            title="dnbdnfj"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
          price="price : 6465"
            add="Add to card"
          ></Women>
          <Women
            img="women-beg-4"
            title="dnbdnfj"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
          price="price : 6465"
            add="Add to card"
          ></Women>
          <Women
            img="women-beg"
            title="dnbdnfj"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
          price="price : 6465"
            add="Add to card"
          ></Women>
          <Women
            img="women-kurta-1"
            title="dnbdnfj"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
          price="price : 6465"
            add="Add to card"
          ></Women>
          <Women
            img="women-kurta-2"
            title="dnbdnfj"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
          price="price : 6465"
            add="add to card"
          ></Women>
          <Women
            img="women-kurta-4"
            title="dnbdnfj"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
          price="price : 6465"
            add="add to card"
          ></Women>
          <Women
            img="women-shirt"
            title="dnbdnfj"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
          price="price : 6465"
            add="add to card"
          ></Women>
          <Women
            img="women-shirt-2"
            title="dnbdnfj"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
          price="price : 6465"
            add="add to card"
          ></Women>
          <Women
            img="women-shirt-4"
            title="dnbdnfj"
            pera="Louis Philippe
          Slim Fit Solid 100% Cotton, Pique Polo T-shirt"
            price="price : 6465"
            add="add to card"
          ></Women>
        </div>
      </div>
    );
  }
}

export default Rendring;
