import React, { useEffect, useState } from "react";

function Display() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const itemStore = JSON.parse(localStorage.getItem("task"));
    if (itemStore) {
      setItems(itemStore);
    }
  }, []);

  function DeletHendler(id) {
    setItems(items.filter((e) => e.id !== id));
  }
  const itemData = items.map((item) => (
    <div
      key={item.id}
      className="container text-bg-dark d-flex justify-content-between p-2 rounded-2 mt-2"
    >
      <h4>{item.task}</h4>
      <div>
        <button
          className="btn btn-danger me-3"
          onClick={() => {
            DeletHendler(item.id);
          }}
        >
          Delete
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            EditHendler(item.id, item.task);
          }}
        >
          Edit
        </button>
      </div>
    </div>
  ));

  return (
  <>
  
      <div className="container p-2">{itemData}</div>
      
  
  </>
  );
}

export default Display;
