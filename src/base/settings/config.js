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

export const endP = ({ courseId, userId, pubId, commentId}) => {
  console.log("endP commentId ",{courseId, userId, pubId, commentId});
  return {
    getCourses: "/course",
    createCourse: "/course",
    enrollCourseByMail: `/course/${courseId}`,
    getInscriptions: `/course/${courseId}/inscriptions`,
    getCourse: `/course/${courseId}`,
    getUsers: "/user",
    createUser: "/user",
    getUser: `/user/${userId}`,
    getComments: `/comment/publication/${pubId}`,
    getAnswers:`/comment/sub/${commentId}`,
    postComment: `/publication/${pubId}/comment`,
    postAnswer: `/comment/${commentId}`
  };
};


