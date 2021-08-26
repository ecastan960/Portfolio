import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import dateFormat from "dateformat";

function TaskView() {
  const location = useLocation();
  const [task, setTaskArray] = useState([]);
  const AuthStr = "Bearer " + location.state.token;
  const [status, setStatus] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [newTask, setNewTask] = useState({ description: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const taskCheck = (id, completed) => {
    if (completed === false) {
      updateTask(id, true);
    } else {
      updateTask(id, false);
    }
  };

  const fetchData = () => {
    axios
      .get("https://api-nodejs-todolist.herokuapp.com/task", {
        headers: { Authorization: AuthStr },
      })
      .then((res) => {
        setTaskArray(res.data.data);
        console.log(task);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setStatus(true);
    fetchData();
    setStatus(false);
  }, [setTaskArray, AuthStr]);

  const addTask = async () => {
    handleClickOpen();
    await axios.post(
      "https://api-nodejs-todolist.herokuapp.com/task",
      newTask,
      {
        headers: { Authorization: AuthStr },
      }
    );
    fetchData();
    handleClose();
  };

  const deleteTask = async (id) => {
    await axios.delete(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
      headers: { Authorization: AuthStr },
    });
    fetchData();
  };

  const updateTask = async (id, finished) => {
    await axios.put(
      `https://api-nodejs-todolist.herokuapp.com/task/${id}`,
      {
        completed: finished,
      },
      {
        headers: { Authorization: AuthStr },
      }
    );
    fetchData();
  };

  return (
    <div>
      {status && <p>Loading...</p>}
      {!status && (
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8.offset-lg-2">
              <div className="card">
                <div className="card-body text-center">
                  <span className="title">LIST OF TASKS</span>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClickOpen}
                    className="btn btn-success float-end"
                  >
                    New Task
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title"
                  >
                    <DialogTitle id="form-dialog-title">
                      Add New Task
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Enter the description of the new task
                      </DialogContentText>

                      <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Description"
                        value={newTask.description}
                        onChange={(e) =>
                          setNewTask({
                            ...newTask,
                            description: e.target.value,
                          })
                        }
                        type="text"
                        fullWidth
                        required
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={(e) => addTask(e)} color="primary">
                        Add
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Table striped bordered hover className="mt-4">
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th>Completed</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {task.map((t) => (
                        <tr key={t._id}>
                          <td>{t.description}</td>
                          <td>{t.completed ? "True" : "False"}</td>
                          <td>
                            {dateFormat(
                              t.createdAt,
                              "mmmm dS, yyyy, h:MM:ss TT"
                            )}
                          </td>
                          <td>
                            {dateFormat(
                              t.updatedAt,
                              "mmmm dS, yyyy, h:MM:ss TT"
                            )}
                          </td>
                          <td>
                            <EditIcon
                              className="actions text-primary"
                              onClick={(e) => taskCheck(t._id, t.completed, e)}
                            ></EditIcon>
                            <DeleteIcon
                              className="actions text-danger"
                              onClick={(e) => deleteTask(t._id, e)}
                            ></DeleteIcon>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskView;
