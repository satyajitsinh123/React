import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from '../App';

function Todo() {
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState(null);
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            if (editId) {
                dispatch(editTodo({ id: editId, newText: input }));
                setEditId(null);
            } else {
                dispatch(addTodo(input));
            }
            setInput('');
        }
    };


    const handleEdit = (todo) => {
        setInput(todo.text);
        setEditId(todo.id);
    };

    return (
        <div className='container text-center mt-4 bg-secondary rounded rounded-4 p-3'>
            <h1 className='text-white'>Todo List</h1>
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center mb-4">
                <div className="input-group w-100">
                    <input
                        className="form-control rounded rounded-2 shadow-sm"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Add or edit a task"
                        aria-label="Todo input"
                    />
                    <button
                        className={`btn ${editId ? 'btn-success' : 'btn-primary'} ms-2 shadow-sm`}
                        type="submit"
                    >
                        {editId ? 'Update Todo' : 'Add Todo'}
                    </button>
                </div>
            </form>

            <ul className="list-group">
                {todos.map((todo) => (
                    <li
                        className="list-group-item d-flex justify-content-between align-items-center"
                        key={todo.id}
                    >
                        <span
                            className={`p-2 rounded rounded-2 text-white ${todo.completed ? "bg-success text-decoration-line-through" : "bg-dark"
                                }`}
                            onClick={() => dispatch(toggleTodo(todo.id))}
                            style={{ cursor: "pointer", flexGrow: 1 }}
                        >
                            {todo.text}
                        </span>
                        <div className="button-group ml-3">
                            <button
                                className="btn btn-outline-primary btn-sm mx-1"
                                onClick={() => handleEdit(todo)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => dispatch(deleteTodo(todo.id))}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Todo;
