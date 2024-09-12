import React, { useEffect, useState } from "react";

let nextId = 0;

function TodoApp() {
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
      className="container text-bg-danger d-flex justify-content-between p-2 rounded-5 px-4 mt-2"
    >
      <h4>{item.task}</h4>
      <div>
        <button
          className="btn btn-danger  me-3"
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


  function DeletHendler(id) {
    setItems(items.filter((e) => e.id !== id));
  }

  function EditHendler(id) {
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
      <div className="container bg-dark p-5 rounded-5 text-center p-2 mt-3 w-50">
        <h2 className="text-danger mb-4">TodoList</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="form-control mb-2 px-2 rounded-5 px-3"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            className="btn btn-danger mx-1 rounded-4 mt-2"
            onClick={EditId !== null ?  UpdetHendler : addHandlers}
          >
            {EditId !== null ? "Update" : "Add"}
          </button>
        </form>
        <div className="container p-2">{itemData}</div>
      </div>
    </>
  );
}

export default TodoApp;
