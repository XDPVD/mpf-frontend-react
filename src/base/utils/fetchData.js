import axios from "@settings/axios";
import instance from "@settings/axios";
export async function fetchData(url, setState) {
  try{
    let res = await axios.get(url)  
    const response = res.data;
    setState(response);
  }
  catch(e){
    setState(e.response);
  }
}

export function fetchingData(url, setState, setIsFetching) {
  axios
    .get(url)
    .then((res) => {
      let response = res.data;
      if(Array.isArray(response)) response=response.reverse();
      setState(response);
      
      setIsFetching?.(false);
    })
    .catch((err) => {
      console.log(err);
    });
}

export const getCoursesByEmail = async (email) => {
  let res = await instance({
    'method':'GET',
    'url':`/user/byemail/${email}`
  });
  let courses = [...res.data.courses_created];

  res.data.inscriptions.forEach((elem) => {
    courses.push({
      "id": elem.course.id, 
      "name": elem.course.name
    })
  })

  return courses;
}

export const getCourse = async (course_id) => {
  
  let res = await instance({
    'method':'GET',
    'url':'/course/'+course_id,
  });

  return res.data;
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