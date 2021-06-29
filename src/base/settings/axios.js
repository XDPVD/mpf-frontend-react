import axios from "axios";

const instance = axios.create({
  baseURL: "https://95f9e6707c54.ngrok.io/"
});

export default instance;
