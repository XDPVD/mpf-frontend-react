import instance from "@settings/axios";
import { dateObjToString } from "@utils/convertDate";

export async function postData(url, data, headers) {
  //gue in tincidunt commodo
  let result = await instance({
    method: "POST",
    url: url,
    headers: headers,
    data: data,
  });

  
  return result.data;
}

// per ipsum vel tincidunt porttitor. Etia
export async function postAnuncio(obj, headers) {
  let result = await instance({
    method: "POST",
    url: "/publication/announcement/" + obj.id_curso,
    headers,
    data: {
      title: obj.titulo.toString(),
      description: obj.descripcion.toString(),
    },
  });

  return result.data;
}

//dales tempus. Donec tincidunt, odio a mollis semper, 
export async function postMaterial(obj, headers) {
  let result = await instance({
    method: "POST",
    url: "/publication/material/" + obj.id_curso,
    headers,
    data: {
      title: obj.titulo.toString(),
      description: obj.descripcion.toString(),
    },
  });

  return result.data;
}

//tor, et bibendum sapien mi ac ipsum. Nullam convallis vel mi ac auctor. Etiam euismod augue posuere orci b
export async function postTarea(obj, headers) {
  let [date_max, time_max] = dateObjToString(obj.fechaEntrega);
  console.log("dateObjToString ", dateObjToString(obj.fechaEntrega));
  let result = await instance({
    method: "POST",
    url: "/publication/assignment/" + obj.id_curso,
    headers,
    data: {
      title: obj.titulo,
      description: obj.descripcion,
      score_max: obj.notaMax,
      date_max: date_max,
      time_max: time_max,
      group: obj.grupal,
    },
  });

  return result.data;
}

export async function postExamen(obj, headers) {
  let [date_max, time_max] = dateObjToString(obj.fechaEntrega);

  let result = await instance({
    method: "POST",
    url: "/publication/exam/" + obj.id_curso,
    headers,
    data: {
      title: obj.titulo,
      description: obj.descripcion,
      score_max: obj.notaMax,
      date_max: date_max,
      time_max: time_max,
    },
  });
  return result.data;
}

//placerat. Praesent rhoncus leo vel enim sodales tempus. Donec tincidunt, odio a m
export async function postPub(recurso, headers) {
  //const request = await axios.post("", recurso);
  let res;

  try {
    switch (recurso.tipo) {
      case "A":
        res = await postAnuncio(recurso, headers);
        break;
      case "M":
        res = await postMaterial(recurso, headers);
        break;
      case "E":
        res = await postExamen(recurso, headers);
        break;
      case "T":
        res = await postTarea(recurso, headers);
        break;
      default:
        break;
    }
  } catch (e) {
    let text = e.response?.status + " - " + e.response?.statusText;
    alert("ERROR: " + text);
    return null;
  }
  console.log(res);

  return res.id;
}
