import axios from "@settings/axios";

export async function postData(event, url, data) {
  event.preventDefault();

  const response = await axios
    .post(url, data)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((error) => console.error("There was an error!", error));
  console.log(response);
}
