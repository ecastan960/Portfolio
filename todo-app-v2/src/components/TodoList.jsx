import React from "react";
import Todo from "./Todo";

function TodoList({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) {
  return (
    <div>
      <h2 className="text-right display-4">I'm TodoList</h2>
      {todos.length === 0 ? (
        <div className="alert alert-primary">
          {" "}
          No tasks. Please add a new one
        </div>
      ) : (
        todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoToogleCompleted={todoToogleCompleted}
            setTodoEdit={setTodoEdit}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
