import React, { useEffect } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory,
} from 'react-router-dom';

import Header from '@layout/Header';
import LateralBar from '@layout/LateralBar';
import UpperBanner from '@layout/UpperBanner';
import CoursesListPage from '@pages/CourseListPage';
import LoginPage from '@pages/LoginPage';
import Configuration from '@pages/ConfigurationPage';

import theme from '@styles/theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import { URLS } from './base/settings/urls';

import { UserProvider } from './base/context/userContext';
import { CookiesProvider } from 'react-cookie';
import { useGlobalStyles } from '@styles/globalStyles';
import { useUser } from '@utils/useUser';
import CourseDetailsPage from './pages/CourseDetailsPage';

import PrivateRouter from './components/_common/PrivateRouter';
// Components

export default function App() {
    return (
        <Router>
            <CookiesProvider>
                <UserProvider>
                    <AppContainer />
                </UserProvider>
            </CookiesProvider>
        </Router>
    );
}

function AppContainer() {
    // Use global styles
    const classes = useGlobalStyles();
    // TODO: change a userReducer and useContext
    const [user, actions] = useUser();
    // use history
    const history = useHistory();

    useEffect(() => {
        if(user){
            history.replace(history.location.state);
        }
    },[user, history])

    // if there is a cookie, the app login that info on its state
    useEffect(() => {
        let userCookie = actions.getCookies();
        if(userCookie){
            actions.login(userCookie)
        }
    },[actions])

    const privatePages = [
        { url: URLS.COURSES, Component: <CoursesListPage />, exact: true},
        { url: URLS.COURSES + '/:courseId', Component: <CourseDetailsPage /> },
        { url: URLS.CONFIG, Component: <Configuration /> },
        { url: URLS.GROUPS, Component: <p>Grupos</p> },
    ];

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.appContainer}>
                <Header />
                <UpperBanner />
                <div className={classes.pageContainer}>
                    <Switch>
                        <Route exact path="/login">
                            <LoginPage />
                        </Route>
                        {privatePages.map((page) => {
                            return (
                                <PrivateRouter exact={page.exact} path={page.url}>
                                    <LateralBar />
                                    {page.Component}
                                </PrivateRouter>
                            );
                        })}
                    </Switch>
                </div>
            </div>
        </ThemeProvider>
    );
}


