import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function Signup() {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = {
    backgroundColor: "#4ae1a6",
  };

  const btnStyle = {
    margin: "8px 0",
  };

  const [NewUser, setNewUser] = useState({
    email: "",
    password: "",
    age: "",
    name: "",
  });

  const [open, setOpen] = useState(false);
  const [post, setPostArray] = useState([]);
  const history = useHistory();

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    console.log(NewUser);
    e.preventDefault();
    axios
      .post("https://api-nodejs-todolist.herokuapp.com/user/register", NewUser)
      .then((res) => {
        console.log(res);
        setPostArray([res]);
        console.log(post);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        handleClick();
      });
  };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleIcon></AddCircleIcon>
            </Avatar>
            <h2>Sign Up</h2>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              label="Name"
              placeholder="Enter name"
              value={NewUser.name}
              onChange={(e) => setNewUser({ ...NewUser, name: e.target.value })}
              fullWidth
              required
            />
            <TextField
              type="email"
              label="Email"
              placeholder="Enter email"
              value={NewUser.email}
              onChange={(e) =>
                setNewUser({ ...NewUser, email: e.target.value })
              }
              fullWidth
              required
            />
            <TextField
              type="number"
              label="Age"
              placeholder="Enter age"
              value={NewUser.age}
              onChange={(e) => setNewUser({ ...NewUser, age: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              inputProps={{ minLength: 7 }}
              value={NewUser.password}
              onChange={(e) =>
                setNewUser({ ...NewUser, password: e.target.value })
              }
              fullWidth
              required
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              style={btnStyle}
            >
              Sign up
            </Button>
          </form>

          <Typography>
            <Link to="/">Go Back</Link>
          </Typography>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="User Exists"
            action={
              <React.Fragment>
                <Button color="secondary" size="small" onClick={handleClose}>
                  UNDO
                </Button>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </Paper>
      </Grid>
    </div>
  );
}

export default Signup;
