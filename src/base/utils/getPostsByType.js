import {postsA, postsM, postsT, postsE} from '@settings/dataTest';

export const getAllAnuncios = async () => {
    // TODO: AXIOS GET to get all 'anuncios'
    return postsA;
  }

export const getAllMaterial = async () =>{
// TODO: AXIOS GET to get all 'publicacion'
    return postsM;
}

export const getAllTareas = async () =>{
// TODO: AXIOS GET to get all 'tareas'
    return postsT;
}

export const getAllExamen = async () =>{
// TODO: AXIOS GET to get all 'examen'
    return postsE;
}