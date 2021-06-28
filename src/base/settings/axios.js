import axios from "axios";

const instance = axios.create({
  baseURL: "http://95f9e6707c54.ngrok.io/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkcHZpbGNhQGdtYWlsLmNvbSIsImV4cCI6MTYyNTI3MzM3NH0.aRlU8jIWiwhPta12NurEUInEaU8vcDAWHVyZw1Yr14M",
  },
});

export default instance;
