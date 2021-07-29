import axios from "axios";

const instance = axios.create({
  baseURL: "https://learnabc21.herokuapp.com/",
});

export default instance;
