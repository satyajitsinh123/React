import React from 'react'

function Women({img,title,pera,add,price}) {
  const imgUrl = "/src/assets/" + img + ".jpg";

  return (
    <>
     <div className="card-group" style={{ width: 300 }}>
        <div className="card">
          <img
            src={imgUrl}
            className="card-img-top"
            alt="..."
            style={{ height: 300, width: 200, margin: 50, objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{pera}</p>
            <p className="card-text">
              <b>{price}</b>
            </p>
            <button
              className="btn"
              style={{
                height: 50,
                width: 200,
                backgroundColor: "black",
                color: "white",
                margin:25
              }}
            >
              {add}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Women