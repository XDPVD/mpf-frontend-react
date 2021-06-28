import axios from "@settings/axios";

import {postsA, postsM, postsT, postsE} from '@settings/dataTest';

import instance from "@settings/axios";

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

export const getAllAnuncios = async (course_id) => {
    // TODO: AXIOS GET to get all 'anuncios'

    let res = await instance({
        'method':'GET',
        'url':'/publication/announcement/'+course_id,
    });
    
    return res.data;
  }

export const getAllMaterial = async (course_id) =>{
// TODO: AXIOS GET to get all 'publicacion'

    let res = await instance({
      'method':'GET',
      'url':'/publication/material/'+course_id,
    });
    
    return res.data;
}

export const getAllTareas = async (course_id) =>{
// TODO: AXIOS GET to get all 'tareas'

    let res = await instance({
      'method':'GET',
      'url':'/publication/assignment/'+course_id,
    });

    return res.data;
}

export const getAllExamen = async (course_id) =>{
// TODO: AXIOS GET to get all 'examen'

    let res = await instance({
      'method':'GET',
      'url':'/publication/exam/'+course_id,
    });

    return res.data;
}