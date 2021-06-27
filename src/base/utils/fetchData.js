import axios from "@settings/axios";

export function fetchData(url, state, setState) {
  axios
    .get(url)
    .then((res) => {
      const resCursos = res.data;
      setState(resCursos);
      console.log(state);
    })
    .catch((err) => {
      console.log(err);
    });
}
