import { useMemo } from 'react';

// custom hook para generar los endpoints para su uso posterior
function useEndpoints(props) {
    const endpoints = useMemo(() => {
        
        let endPoints = {
            post: {
                createCourse: '/course',
                createUser: '/user',
            },
            get: {
                getCourses: '/course',
                getUsers: '/user',
            },
            put: {},    
        };

        if (props?.courseId) {
            endPoints = {
                post: {
                    ...endPoints.post,
                    createGroup: `/group/create/${props.courseId}/default`,
                    postAnnounce: `/publication/exam/${props.courseId}`,
                    postExam: `/publication/exam/${props.courseId}`,
                    postMaterial: `/publication/material/${props.courseId}`,
                    postTask: `/publication/assignment/${props.courseId}`,
                },
                get: {
                    ...endPoints.get,
                    getInscriptions: `/course/${props.courseId}/inscriptions`,
                    getCourse: `/course/${props.courseId}`,
                    getGroups: `/group/${props.courseId}`,
                    getAnnouncements: `publication/announcement/${props.courseId}`,
                    getMaterials: `publication/material/${props.courseId}`,
                    getAssignments: `publication/assignment/${props.courseId}`,
                    getExams: `publication/exam/${props.courseId}`,
                },
                put: {
                    ...endPoints.put,
                    editCourse: `/course/edit/${props.courseId}`,
                    lockAllGroups: `/group/lock_all/${props.courseId}`,
                },
            };
        }

        if (props?.userId) {
            endPoints.get.getUser = `/user/${props.userId}`;
            endPoints.put.delegateUser =
                props.courseId &&
                `/course/${props.courseId}/delegate/${props.userId}`;
        }

        if (props?.email) {
            endPoints.post.enrollCourseByMail =
                props.courseId &&
                `/course/${props.courseId}/enroll/by_email/${props.email}`;
            endPoints.get.getUserByEmail = `/user/byemail/${props.email}`;
            endPoints.put.editUser = `user/${props.email}`;
        }

        if (props?.courseCode) {
            endPoints.post.enrollMeByCode = `/course/${props.courseCode}/enroll_me`;
        }

        if (props?.pubId) {
            endPoints.post.postComment = `/publication/${props.pubId}/comment`;
            endPoints.get.getComments = `/comment/publication/${props.pubId}`;
        }
        if (props?.commentId) {
            endPoints.post.postAnswer = `/comment/${props.commentId}`;
            endPoints.get.getAnswers = `/comment/sub/${props.commentId}`;
        }

        if (props?.groupId) {
            endPoints.put.lockGroup = `/group/lock/${props.groupId}`;
        }

        return endPoints;
    }, [props]);

    // uso de memo para no estar generando muchos objetos por cada render
    return endpoints;
}

export default useEndpoints;
