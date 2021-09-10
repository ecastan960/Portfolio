import React, { useState, useEffect } from "react";

const initialFormValues = {
  title: "",
  description: "",
};

function TodoForm({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { title, description } = formValues;
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (todoEdit) {
      setFormValues(todoEdit);
    } else {
      setFormValues(initialFormValues);
    }
  }, [todoEdit]);

  const handleInputChange = (e) => {
    const changeFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changeFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("A Title is needed!");
      return;
    }
    if (description.trim() === "") {
      setError("A Description is needed!");
      return;
    }

    if (todoEdit) {
      todoUpdate(formValues);
      setSuccessMessage("Sucessfully updated!");
    } else {
      todoAdd(formValues);
      setSuccessMessage("Sucessfully added!");
      setFormValues(initialFormValues);
    }

    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000);
    setError(null);
  };

  return (
    <div>
      <h2 className="text-center display-5">
        {todoEdit ? "Edit task" : "New task"}
      </h2>

      {todoEdit && (
        <button
          onClick={() => setTodoEdit(null)}
          className="btn btn-sm btn-warning mb-2"
        >
          {" "}
          Cancel Edit
        </button>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          className="form-control"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        <textarea
          placeholder="Description"
          className="form-control mt-2"
          value={description}
          name="description"
          onChange={handleInputChange}
        ></textarea>
        <button className="btn btn-primary btn-block mt-2">
          {todoEdit ? "Edit Task" : "Add Task"}{" "}
        </button>
        {successMessage && (
          <div className="alert alert-success mt-2">{successMessage}</div>
        )}
        {error && <div className="alert alert-danger mt-2">{error}</div>}
      </form>
    </div>
  );
}

export default TodoForm;
