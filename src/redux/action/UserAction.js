import axios from "axios";

export const dispatchUsers = (response) => {
  return {
    type: "users",
    payload: response,
  };
};

export const fetchUsers = (name, year, errorCallback) => {
  return function action(dispatch) {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios.get(url).then((res) => {
      const users = res.data;
      dispatch(dispatchUsers(users));
    });
  };
};
