import axios from "axios";

const instance = axios.create({
  baseURL: "http://ea62533cc8c3.ngrok.io",
});

export default instance;
