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

export const endP = ({ courseId, userId, pubId, commentId, email}) => {
  console.log("endP commentId ",{courseId, userId, pubId, commentId, email});
  return {
    getCourses: "/course",
    createCourse: "/course",
    enrollCourseByMail: `/course/${courseId}/enroll/by_email/${email}`,
    enrollMeByCode: `/course/${courseId}/enroll_me`,
    delegateUser: `/course/${courseId}/delegate/${userId}`,
    getInscriptions: `/course/${courseId}/inscriptions`,
    getCourse: `/course/${courseId}`,
    getUsers: "/user",
    createUser: "/user",
    getUser: `/user/${userId}`,
    getComments: `/comment/publication/${pubId}`,
    getAnswers: `/comment/sub/${commentId}`,
    postComment: `/publication/${pubId}/comment`,
    postAnswer: `/comment/${commentId}`,
    postAnnounce: `/publication/exam/${courseId}`,
    postMaterial: `/publication/material/${courseId}`,
    postTask: `/publication/assignment/${courseId}`,
    postExam: `/publication/exam/${courseId}`,
  };
};
