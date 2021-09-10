import React from "react";

function Todo({ todo, todoDelete, todoToogleCompleted, setTodoEdit }) {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title text-right ">
          {todo.title}
          <button
            onClick={() => todoToogleCompleted(todo.id)}
            className={`btn btn-sm ${
              todo.completed ? "btn-outline-success " : "btn-success"
            } ml-2`}
          >
            {todo.completed ? "Finished" : "Unfinished"}
          </button>
        </h3>
        <p className="card-text text-right ">{todo.description}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <button
            onClick={() => setTodoEdit(todo)}
            className="btn btn-sm btn-outline-primary mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => todoDelete(todo.id)}
            className="btn btn-sm btn-outline-danger "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
