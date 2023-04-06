import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const EditUser = () => {
  let {id} = useParams()
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.users)
  console.log(user);


  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const [error, setError] = useState(""); 

  const { name, email, contact, address } = state;

  useEffect(() => {
    dispatch(getSingleUser(id))
  }, [])

  useEffect(() => {
    if(user) {
        setState({...user});
    }
  }, [user])

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !address || !email || !contact) {
        setError('Please input all input Field');
    } else{
        dispatch(updateUser(state, id))
        navigate('/');
        setError('');
        console.log("ok");
    }
  }

  return (
    <div>
      <h2>edit user</h2>
      {error && <h3 style={{color: "red"}}>{error}</h3>}
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Name"
          value={name || "" }
          name="name"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email || "" }
          name="email"
          type="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact || "" }
          name="contact"
          type="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address || "" }
          name="address"
          type="text"
          onChange={handleInputChange}
        />
        <br />
        <Button variant="contained" color="primary" type="submit" > update ! </Button>
      </form>
    </div>
  );
};

export default EditUser;
