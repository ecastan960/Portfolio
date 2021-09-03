import React, { useEffect, useState, useContext } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { AuthContext } from "../auth/AuthProvider";

function Home() {
  const contextValue = useContext(AuthContext);
  const { authUser, setAuthUser } = contextValue;

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "20px auto",
  };

  const avatarStyle = {
    backgroundColor: "#4ae1a6",
  };

  const btnStyle = {
    margin: "8px 0",
  };

  const [user, setUser] = useState({ email: "", password: "" });
  const [open, setOpen] = useState(false);
  const [post, setPostArray] = useState([]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    console.log(authUser);
    setAuthUser(true);

    e.preventDefault();
    axios
      .post("https://api-nodejs-todolist.herokuapp.com/user/login", user)
      .then((res) => {
        console.log(res);
        setPostArray([res]);
      })
      .catch((error) => {
        console.log(error);
        handleClick();
      });
  };

  useEffect(() => {
    if (post.length > 0) {
      console.log(authUser);
      setAuthUser({
        name: post[0].data.user.name,
        token: `${post[0].data.token}`,
        age: `${post[0].data.user.age}`,
        email: post[0].data.user.email,
        id: post[0].data.user._id,
        image: "",
      });
      history.push("/taskview", {
        name: post[0].data.user.name,
        token: `${post[0].data.token}`,
        age: `${post[0].data.user.age}`,
        email: post[0].data.user.email,
      });
    }
  }, [post, history]);

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon></LockOutlinedIcon>{" "}
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              type="email"
              label="Email"
              placeholder="Enter email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              inputProps={{ minLength: 7 }}
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
              Sign in
            </Button>
          </form>

          <Typography>
            Do you have an account?
            <Link to="/signup">Sign up</Link>
          </Typography>
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="User not found"
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

export default Home;
