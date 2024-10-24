import React, { useEffect, useState } from "react";

let nextId = 0;

function Todolist() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const [EditId, setEditId] = useState(null);

  function addHandlers() {
    setItems([...items, { id: nextId++, task: task }]);
    setTask("");
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

  useEffect(() => {
    const itemStore = JSON.parse(localStorage.getItem("task"));
    if (itemStore) {
      setItems(itemStore);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(items));
  }, [items]);


  function DeletHendler(id) {
    setItems(items.filter((e) => e.id !== id));
  }

  function EditHendler(id, task) {
    const editedTask = items.find((item) => item.id === id);
    setTask(editedTask.task);
    setEditId(id); d
  }

  function UpdetHendler() {
    let NewList = items.map((item) => {
      if (item.id === EditId) {
        return { ...item, task: task };
      }
      return item;
    })
    setItems(NewList);
    setTask("");
    setEditId(null);
  }



  return (
    <>
      <div className="container bg-danger rounded-5 text-center p-4 mt-3 w-50">
        <h2>TodoList</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="form-control mb-2 px-2 "
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            className="btn btn-dark mx-1"
            onClick={EditId !== null ? UpdetHendler : addHandlers}
          >
            {EditId !== null ? "Updet" : "Add"}
          </button>
        </form>
        <div className="container p-2">{itemData}</div>
      </div>
    </>
  );
}

export default Todolist;
