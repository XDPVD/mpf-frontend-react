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
import Courses from '@pages/CourseListPage';
import Login from '@pages/LoginPage';
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

export default function appWithContext() {
    return (
        <Router>
            <CookiesProvider>
                <UserProvider>
                    <App />
                </UserProvider>
            </CookiesProvider>
        </Router>
    );
}

function App() {
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
        { url: URLS.COURSES, Component: <Courses />, exact: true},
        { url: URLS.COURSES + '/:courseId', Component: <CourseDetailsPage /> },
        { url: URLS.CONFIG, Component: <Configuration /> },
        { url: URLS.GROUPS, Component: <p>Grupos</p> },
    ];
    return (
        <div className={classes.appContainer}>
            <ThemeProvider theme={theme}>
                <Header />
                <UpperBanner />
                <div className={classes.pageContainer}>
                    <Switch>
                        <Route exact path="/login">
                            <Login />
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
            </ThemeProvider>
        </div>
    );
}


