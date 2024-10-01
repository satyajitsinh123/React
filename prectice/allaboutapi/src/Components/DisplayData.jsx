import axios from "axios";
import React, { useEffect, useState } from "react";


function DisplayData() {

  const [col, setCol] = useState([]);
  const [data, setData] = useState([])


  useEffect(() => {
    axios
      .get(`http://localhost:4040/users`)
      .then((res) => {
        console.log(res.data)
        setCol(Object.keys(res.data[0]))
        setData(res.data)
      })
      .catch((err) => console.log("Bad Request"));
  }, []);


  function handlerDelete() {

  }


  return (
    <>
      <div className="container bg-dark text-white p-5 my-5 rounded shadow-lg">
        <h1 className="display-4 text-center mb-4">User Data</h1>
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                {col.map((e, i) => (
                  <th key={i}>{e}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>
                      <Link to={`/update/${element.id}`} className="btn btn-success me-3">Update</Link>
                      <button className="btn btn-danger ms-2" onClick={() => handlerDelete(element.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DisplayData;
