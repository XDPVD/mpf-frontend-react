import axios from "@settings/axios";
import instance from '@settings/axios';
import {dateStringToObj, dateObjToString} from '@utils/convertDate';

export async function postData(url, data, headers) {
  console.log(url, data, headers);
  let result = await instance({
    'method':'POST',
    'url': url,
    'headers': headers,
    'data': data 
  });
  
  console.log(url, " result POST -> ",result);
  return result.data;
}

export async function postAnuncio(obj,headers){
    
    let result = await instance({
      'method':'POST',
      'url': '/publication/announcement/'+obj.id_curso,
      headers,
      'data':{
        'title':obj.titulo.toString(),
        'description': obj.descripcion.toString(),
      }
    });

    return result.data;
}

export async function postMaterial(obj,headers){
  let result = await instance({
    'method':'POST',
    'url': '/publication/material/'+obj.id_curso,
    headers,
    'data':{
      'title':obj.titulo.toString(),
      'description': obj.descripcion.toString(),
    }
  });

  return result.data;
}

export  async function postTarea(obj,headers){

  let [date_max,time_max] = dateObjToString(obj.fechaEntrega);
  
  let result = await instance({
    'method':'POST',
    'url': '/publication/assignment/'+obj.id_curso,
    headers,
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

export  async function postExamen(obj,headers){

  let [date_max,time_max] = dateObjToString(obj.fechaEntrega);

  let result = await instance({
    'method':'POST',
    'url': '/publication/exam/'+obj.id_curso,
    headers,
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

// p
export async function postPub(recurso, headers) {
    //const request = await axios.post("", recurso);
    let res;

    try{
      console.log(recurso);
      switch(recurso.tipo){
        case 'A': res= await postAnuncio(recurso,headers) ;break;
        case 'M': res= await postMaterial(recurso,headers) ;break;
        case 'E': res= await postExamen(recurso,headers); break;
        case 'T': res= await postTarea(recurso,headers); break;
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