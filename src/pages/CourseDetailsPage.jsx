import { COURSE_URLS } from '../base/settings/urls';
import CourseUsers from '../components/CourseUsers/CourseUsers';
import CourseNav from '@layout/CourseNav';
import useRouterInfo from '@utils/useRouterInfo';
import { Route, Switch } from 'react-router-dom';
import ResourcesList from '@components/CourseResources/ResourcesList';
import { useGlobalStyles } from '../styles/globalStyles';
import { useUser } from '../base/utils/useUser';
import { useEffect, useState } from 'react';

function CourseDetailsPage() {
    const [, , params, routerMatch] = useRouterInfo();
    const globalClasses = useGlobalStyles();
    const [, actions] = useUser();
    const [isOwner, setOwner] = useState(false);

    useEffect(() =>{
        actions.isCreator(params.courseId).then((res) => {
            setOwner(res);
        });
    },[actions, params]);

    return (
        <div className={globalClasses.genericContainer} style={{'display':'flex', 'flexFlow':'column'}}>
            <CourseNav courseId={params.courseId} isOwner={isOwner}/>
            <div style={{'overflowY':'scroll'}}>
                <Switch>
                    <Route path={`${routerMatch.path}${COURSE_URLS.PEOPLE}`}>
                        <CourseUsers courseId={params.courseId} isOwner={isOwner}/>
                    </Route>
                    {/* TODO: Fix the component unmounted process */}
                    <Route path={`${routerMatch.path}/:courseSection`}>
                        <ResourcesList courseId={params.courseId} isOwner={isOwner}/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default CourseDetailsPage;
