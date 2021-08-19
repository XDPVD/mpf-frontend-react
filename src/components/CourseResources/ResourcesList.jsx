import React, { useState } from 'react';
import ResourceCard from './ResourceCard';

import Loading from '@common/Loading';
import NotFound from '@common/NotFound';
import useEndpoints from '../../base/utils/useEndpoints';
import { COURSE_URLS } from '../../base/settings/urls';
import useFetch from '../../base/utils/useFetch';
import useRouterInfo from '@utils/useRouterInfo';
import { useUser } from '@utils/useUser';

const ResourcesList = (props) => {
    const actions = useUser()[1];
    const [, , params, ] = useRouterInfo();

    React.useEffect(() => {
        return () => console.log('UNMOUNTED');
    },[])

    const endpoint = useEndpoints({
        courseId: props.courseId,
    });

    const queryMode = useState({
        [COURSE_URLS.DASHBOARD.slice(1)]: endpoint.get.getAnnouncements,
        [COURSE_URLS.MATERIAL.slice(1)]: endpoint.get.getMaterials,
        [COURSE_URLS.TASKS.slice(1)]: endpoint.get.getAssignments,
        [COURSE_URLS.EXAMS.slice(1)]: endpoint.get.getExams,
    })[0];

    const headers = useState(() => {
        return actions.getHeader();
    })[0]

    const [posts,,] = useFetch({
        endpoint: queryMode[params.courseSection],
        headers
    });
    
    return (
        <div>
            {!posts ? (
                <Loading />
            ) : (
                posts?.map((elem) => {
                    return (
                        <ResourceCard
                            key={elem.id}
                            kind={props.kind}
                            post={elem}
                            isOwner={props.isOwner}
                            courseId= {props.courseId}
                        />
                    );
                })
            )}
            {posts && posts.length === 0 && (
                <NotFound>No hay publicaciones para mostrar</NotFound>
            )}
        </div>
    );
};

export default ResourcesList;
