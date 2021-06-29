export const urls = {
  home: "/",
  login: "/login",
  register: "/register",
  cursos: "/cursos",
  calendario: "/calendario",
  grupos: "/grupos",
  config: "/configuracion",
};

export const courseUrls = {
  dashboard: "/dash",
  material: "/materiales",
  tareas: "/tareas",
  examenes: "/examenes",
  personas: "/personas",
};

export const endP = ({ courseId, userId, pubId }) => {
  return {
    getCourses: "/course",
    createCourse: "/course",
    getInscriptions: `/course/${courseId}/inscriptions`,
    getCourse: `/course/${courseId}`,
    getUsers: "/user",
    createUser: "/user",
    getUser: `/user/${userId}`,
  };
};


