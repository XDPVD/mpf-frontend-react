import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkcHZpbGNhQGdtYWlsLmNvbSIsImV4cCI6MTYyNTI3MzM3NH0.aRlU8jIWiwhPta12NurEUInEaU8vcDAWHVyZw1Yr14M",
  },
});

export default instance;
