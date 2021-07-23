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

// API endpoints
export const endP = ({
  courseId,
  userId,
  pubId,
  commentId,
  groupId,
  email,
  code,
}) => {
  console.log("endP commentId ", {
    courseId,
    userId,
    pubId,
    commentId,
    groupId,
  });
  return {
    createCourse: "/course",
    createGroup: `/group/create/${courseId}/default`,
    createUser: "/user",
    delegateUser: `/course/${courseId}/delegate/${userId}`,
    editUser: `user/${email}`,
    enrollCourseByMail: `/course/${courseId}/enroll/by_email/${email}`,
    enrollMeByCode: `/course/${code}/enroll_me`,
    getInscriptions: `/course/${courseId}/inscriptions`,
    getCourse: `/course/${courseId}`,
    getCourses: "/course",
    getGroups: `/group/${courseId}`,
    getUser: `/user/${userId}`,
    getUserByEmail: `/user/byemail/${email}`,
    getUsers: "/user",
    getComments: `/comment/publication/${pubId}`,
    getAnswers: `/comment/sub/${commentId}`,
    lockAllGroups: `/group/lock_all/${courseId}`,
    lockGroup: `/group/lock/${groupId}`,
    postAnnounce: `/publication/exam/${courseId}`,
    postAnswer: `/comment/${commentId}`,
    postComment: `/publication/${pubId}/comment`,
    postExam: `/publication/exam/${courseId}`,
    postMaterial: `/publication/material/${courseId}`,
    postTask: `/publication/assignment/${courseId}`,
  };
};
