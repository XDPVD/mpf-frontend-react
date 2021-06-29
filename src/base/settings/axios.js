import axios from "axios";

const instance = axios.create({
  baseURL: "http://a61457cab5b0.ngrok.io",
});

export default instance;
