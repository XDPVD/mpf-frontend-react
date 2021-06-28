import axios from "@settings/axios";
import instance from '@settings/axios';
import {dateStringToObj, dateObjToString} from '@utils/convertDate';

export async function postData(url, data) {
  await axios
    .post(url, data)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((error) => console.error("There was an error!", error));
}



export async function postAnuncio(obj){
    console.log(obj.titulo, " ", obj.descripcion, " ", obj.id_curso);
    let result = await instance({
      'method':'POST',
      'url': '/publication/announcement/'+obj.id_curso,
      'data':{
        'title':obj.titulo.toString(),
        'description': obj.descripcion.toString(),
      }
    });

    return result.data;
}

export async function postMaterial(obj){
  let result = await instance({
    'method':'POST',
    'url': '/publication/material/'+obj.id_curso,
    'data':{
      'title':obj.titulo.toString(),
      'description': obj.descripcion.toString(),
    }
  });

  return result.data;
}

export  async function postTarea(obj){

  let [date_max,time_max] = dateObjToString(obj.fechaEntrega);
  console.log('dateObjToString ', dateObjToString(obj.fechaEntrega));
  let result = await instance({
    'method':'POST',
    'url': '/publication/assignment/'+obj.id_curso,
    'data':{
      'title':obj.titulo,
      'description': obj.descripcion,
      'score_max':obj.notaMax,
      'date_max': date_max,
      'time_max': time_max,
      'group': obj.grupal,
    }
  });
  
  return result.data;
}

export  async function postExamen(obj){

  let [date_max,time_max] = dateObjToString(obj.fechaEntrega);

  let result = await instance({
    'method':'POST',
    'url': '/publication/exam/'+obj.id_curso,
    'data':{
      'title':obj.titulo,
      'description': obj.descripcion,
      'score_max':obj.notaMax,
      'date_max': date_max,
      'time_max': time_max,
    }
  });
  return result.data;
}

export async function postPub(recurso) {
    //const request = await axios.post("", recurso);
    let res;

    try{
      console.log(recurso);
      switch(recurso.tipo){
        case 'A': res= await postAnuncio(recurso) ;break;
        case 'M': res= await postMaterial(recurso) ;break;
        case 'E': res= await postExamen(recurso); break;
        case 'T': res= await postTarea(recurso); break;
        default: break;
      }
    }
    catch(e){
      let text = e.response?.status +" - "+e.response?.statusText;
      alert('ERROR: ' + text);
      return null;
    }
    console.log(res);

    return res.id;
  }