import axios from "@settings/axios";

export function fetchData(url, setState) {
  axios
    .get(url)
    .then((res) => {
      const response = res.data;
      setState(response);
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
