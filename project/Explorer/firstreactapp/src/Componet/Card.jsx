import React from "react";

function Card() {
  return (
    <>
    <h1 className="text-center">Populer Disese</h1>
      <div class="container m-auto row row-cols-1 row-cols-md-4 g-3 m-4">
        <div class="col">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="card-img-top" style={{height:200}}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Pasta</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This  bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/2983099/pexels-photo-2983099.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="card-img-top object-fit-cover" style={{height:200}}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">burger</h5>
              <p class="card-text">
                Are Burgers Healthy? Though burgers provide protein and other
                nutrients, they're not seen as a healthy food option.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="card-img-top object-fit-cover" style={{height:200}}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Spy burger</h5>
              <p class="card-text">
                A “burger” is a simple enough concept—put a ground beef patty on
                a bun with , and perhaps cheese (just
                kidding).
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img
              src="https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=600"
              class="card-img-top object-fit-cover" style={{height:200}}
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Chips</h5>
              <p class="card-text">
                There’s nothing more deflating than going to all the effort of
                making your own fries from scratch, only to find table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
