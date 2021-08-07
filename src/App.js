import React, { useEffect } from 'react'

import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    useHistory,
} from 'react-router-dom'

import Header from '@layout/Header'
import LateralBar from '@layout/LateralBar'
import UpperBanner from '@layout/UpperBanner'
import Courses from '@pages/CourseListPage'
import Login from '@pages/LoginPage'
import Configuration from '@pages/Configuration'

import theme from '@styles/theme'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import { URLS } from './base/settings/urls';

import { UserProvider } from './base/context/userContext'
import { CookiesProvider, useCookies } from 'react-cookie'
import { useStyles } from '@styles/Styles'
import { useUser } from './base/context/userContext'
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
    )
}

function App() {
    const classes = useStyles();

    const [user, actions] = useUser();

    const history = useHistory();

    useEffect(() => {
        //TODO: FIX the login session
        const checkCookies = async () => {
            let [userCookie, tokenCookie] = actions.getCookies()
            console.log('checkCookies ', userCookie, ' ', tokenCookie)
            if (userCookie || tokenCookie) {
                console.log('user');
                await actions.saveUser(userCookie) // save cookie without effects
                await actions.saveToken(tokenCookie)
                history.replace(URLS.COURSES)
            }
        }
        if (!user) checkCookies()
    }, [user, actions, history]);

    const privatePages = [
        { url: URLS.COURSES, Component: <Courses /> },
        { url: URLS.CONFIG, Component: <Configuration /> },
        { url: URLS.GROUPS, Component: <p>Grupos</p>  },
    ]

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Header />
                <UpperBanner />
                <div className={classes.root}>
                    <Switch>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <PrivateRouter>
                            <LateralBar / >
                            { privatePages.map((page)=>(
                                <Route exact path={page.url}>
                                    {page.component}
                                </Route>
                            )) }
                        </PrivateRouter>
                    </Switch>
                </div>
            </ThemeProvider>
        </div>
    )
}

function PrivateRouter({ children, ...rest }) {
    const user = useUser()[0]

    return (
        <Route
            {...rest}
            render={() =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                        }}
                    />
                )
            }
        />
    )
}
