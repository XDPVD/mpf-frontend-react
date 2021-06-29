import axios from "axios";

const instance = axios.create({
  baseURL: "https://a61457cab5b0.ngrok.io",
});

export default instance;
