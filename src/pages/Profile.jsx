import React, { useContext } from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
import { AuthContext } from "../auth/AuthProvider";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const btnStyle = {
  margin: "10px 0",
};

function Profile() {
  const classes = useStyles();
  const contextValue = useContext(AuthContext);
  const { authUser, setAuthUser } = contextValue;
  const history = useHistory();
  const AuthStr = "Bearer " + authUser.token;
  const [open, setOpen] = React.useState(false);
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "20px auto",
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Tview = () => {
    history.push("/taskview", {
      name: authUser.name,
      token: `${authUser.token}`,
      age: `${authUser.token}`,
      email: authUser.email,
    });
  };

  const upUser = () => {
    axios.put(
      `https://api-nodejs-todolist.herokuapp.com/user/me`,
      {
        name: authUser.name,
        age: authUser.age,
      },
      {
        headers: { Authorization: AuthStr },
      }
    );
  };

  const Update = () => {
    upUser();
    handleClose();
  };

  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center" className="mb-3">
            <Avatar className={classes.orange}>
              {authUser.name.slice(0, 2).toUpperCase()}
            </Avatar>
          </Grid>
          <div>
            <span>
              <b>Name:</b> {authUser.name.slice(0, 1).toUpperCase()}
              {authUser.name.slice(1)}
            </span>
          </div>
          <div>
            <span>
              <b>Email: </b> {authUser.email}
            </span>
          </div>
          <div className="mb-4">
            <span>
              <b>Age:</b> {authUser.age}
            </span>
          </div>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            onClick={handleClickOpen}
            fullWidth
            style={btnStyle}
          >
            Update
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Update User profile
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                Update the user information:
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                value={authUser.name}
                onChange={(e) =>
                  setAuthUser({
                    ...authUser,
                    name: e.target.value,
                  })
                }
                type="text"
                fullWidth
                required
              />
              <TextField
                autoFocus
                margin="dense"
                type="number"
                id="age"
                label="Age"
                value={authUser.age}
                onChange={(e) =>
                  setAuthUser({
                    ...authUser,
                    age: e.target.value,
                  })
                }
                fullWidth
                required
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={(e) => Update()} color="primary">
                Change
              </Button>
            </DialogActions>
          </Dialog>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={btnStyle}
            onClick={Tview}
          >
            Go Back
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default Profile;
