import axios from "@settings/axios";

export function fetchData(url, state, setState) {
  axios
    .get(url)
    .then((res) => {
      const response = res.data;
      setState(response);
      console.log(state);
    })
    .catch((err) => {
      console.log(err);
    });
}
