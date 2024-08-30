import React, { useEffect, useState } from "react";

function ProductData() {
  const [userId, setUserId] = useState(1);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("running");

      try {
        const respons = await fetch(
          `https://fakestoreapi.com/products/${userId}`
        );
        const data = await respons.json();
        setUserData(data);
      } catch (error) {
        console.log("error");
      }
    };

    fetchData();

    return () => {
      console.log("cleanup......");
    };
  }, [userId]);

  return (
    <>
      <h1 className="container text-bg-secondary text-center py-1">
        ProductCard
      </h1>
      {userData ? (
        <div className="container border border-2 border-black bg-black ">
          <div
            className="card my-4  text-center text-bg-black w-50 m-auto"
            //   style={{ width: "20rem" }}
          >
            <img
              src={userData.image}
              className="card-img-top m-auto"
              alt="..."
              style={{ height: "200px", width: "200px", objectFit: "contain" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                title : {userData.title.slice(0, 40)}
              </h5>
              <h2 className="card-text">
                {" "}
                Description : {userData.description.slice(0, 35)}
              </h2>
              <h2> Price : {userData.price}</h2>
            </div>
          </div>
        </div>
      ) : (
        <p className="container text-center"><b>loding.....</b></p>
      )}
      ;
      <div className="container text-center">
      <button
        type="button"
        className="btn btn-dark me-2"
        onClick={() => setUserId(userId - 1)}
      >
        Decrement
      </button>
      <button
        type="button"
        className="btn btn-danger ms-5"
        onClick={() => setUserId(userId + 1)}
      >
        Increment
      </button>
      </div>
    </>
  );
}

export default ProductData;
