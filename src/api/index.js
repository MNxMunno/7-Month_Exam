import axios from "axios";

const mainURL = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default mainURL;
