import instance from "@settings/axios";

// t nibh ornare, egestas dapibus turpis. Maecenas maximus lacus sit amet ante euismod, in pulvinar elit m
export async function putData(url, data, headers) {
  console.log(url, data, headers);
  let result = await instance({
    method: "PUT",
    url: url,
    headers: headers,
    data: data,
  });

  console.log(url, " result PUT -> ", result);
  return result.data;
}
