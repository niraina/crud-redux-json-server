import axios from "axios";
import * as types from "./actionType";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USER
})

const userAdded = () => ({
  type: types.ADD_USER
})

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
})

const userUpdated = () => ({
  type: types.UPDATE_USER,
})

export const loadUsers = () => {
  return function (dispacth) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        dispacth(getUsers(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
  return function (dispacth) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispacth(userDeleted());
        dispacth(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};

export const addUser = (user) => {
  return function (dispacth) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        dispacth(userAdded());
        dispacth(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};

export const getSingleUser = (id) => {
  return function (dispacth) {
    axios
    .get(`${process.env.REACT_APP_API}/${id}`)
    .then((res) => {
      // console.log("res", res.data.id);
      dispacth(getUser(res.data));
    })
    .catch((err) => console.log(err));
  };
};

export const updateUser = (user, id) => {
  return function (dispacth) {
    axios
    .put(`${process.env.REACT_APP_API}/${id}`, user)
    .then((res) => {
      dispacth(userUpdated());
    })
    .catch((err) => console.log(err));
  };
};