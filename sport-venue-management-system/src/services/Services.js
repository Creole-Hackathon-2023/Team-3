import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response;
};

export const createUser = async (data) => {
  const response = await axios.post("http://localhost:3000/users", data);
  return response;
};
