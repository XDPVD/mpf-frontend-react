import { COURSE_URLS } from '../base/settings/urls';
import CourseUsers from '../components/CourseUsers/CourseUsers';
import CourseNav from '@layout/CourseNav';
import useRouterInfo from '@utils/useRouterInfo';
import { Route, Switch } from 'react-router-dom';
import ResourcesList from '@components/CourseResources/ResourcesList';

function CourseDetailsPage() {
    const [, , params, routerMatch] = useRouterInfo();
    
    return (
        <>
            <CourseNav courseId={params.courseId}/>
            <Switch>
                <Route path={`${routerMatch.path}${COURSE_URLS.PEOPLE}`}>
                    <CourseUsers courseId={params.courseId} />
                </Route>
                
                <Route path={`${routerMatch.path}/:courseSection`}>
                    <ResourcesList courseId={params.courseId}/>
                </Route>
            </Switch>
        </>
    );
}

export default CourseDetailsPage;
