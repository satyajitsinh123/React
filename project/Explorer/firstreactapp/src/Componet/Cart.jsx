import React from "react";

function Cart() {
  return (
    <>
      <div className="container mt-5">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
                class="card-img-top"
                alt="..." style={{height:"200px", objectFit:"contain"}}
              />
              <div class="card-body">
                <h5 class="card-title">Chinese Wok</h5>
                <p class="card-text">
                  A wok (Chinese: 鑊; pinyin: huò; Cantonese Yale: wohk) is a
                  deep round-bottomed cooking pan of Chinese origin. It is
                  believed to be derived from the South Asian karahi.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_81814.JPG"
                class="card-img-top"
                alt="..." style={{height:"200px", objectFit:"contain"}}
              />
              <div class="card-body">
                <h5 class="card-title">Burger king</h5>
                <p class="card-text">
                  McDonald's and Burger King started in the franchise food
                  business in 1955 and 1954, respectively. 1﻿2﻿ McDonald's has
                  always been the larger company
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_636895.JPG"
                class="card-img-top" 
                alt="..."  style={{height:"200px", objectFit:"contain"}}
              />
              <div class="card-body">
                <h5 class="card-title">Big Bowl</h5>
                <p class="card-text">
                  Any fish without scales are haram (forbidden) but fish that do
                  have scales are permissible. Shia scholars tend to teach that
                  no other aquatic creatures are halal
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nengejcwr1mhpjjgladx"
                class="card-img-top"
                alt="..."  style={{height:"200px", objectFit:"contain"}}
              />
              <div class="card-body">
                <h5 class="card-title">Rotlo Gujrati rasthal</h5>
                <p class="card-text">
                  Rotlo Gujarati Rasthal was an incredible experience! Jain
                  Jumbo Parcel was especially good! Every dish was cooked
                  perfectly and had amazing flavors. Service was ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
