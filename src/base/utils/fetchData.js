import axios from "@settings/axios";

export function fetchData(url, setState, setIsFetching) {
  axios
    .get(url)
    .then((res) => {
      const response = res.data;
      setState(response);
      console.log(response);
      setIsFetching(false);
    })
    .catch((err) => {
      console.log(err);
    });
}
