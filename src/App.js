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
import * as config from '@settings/config'
import Courses from '@pages/Courses'
import Login from '@pages/Login'
import Configuration from '@pages/Configuration'

import theme from '@styles/theme'
import ThemeProvider from '@material-ui/styles/ThemeProvider'

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
        const checkCookies = async () => {
            let [userCookie, tokenCookie] = actions.getCookies()
            console.log('checkCookies ', userCookie, ' ', tokenCookie)
            if (userCookie || tokenCookie) {
                actions.removeUser() // set user null
                await actions.saveUser(userCookie) // save cookie without effects
                await actions.saveToken(tokenCookie)
                history.replace(config.urls.cursos)
            }
        }
        if (!user) checkCookies()
    }, [user, actions, history]);

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
                            <LateralBar />
                            <Route exact path={config.urls.login}>
                                <Login />
                            </Route>
                            <Route path={config.urls.cursos}>
                                <Courses />
                            </Route>
                            <Route path={config.urls.config}>
                                <Configuration />
                            </Route>
                            <Route path={config.urls.grupos}>Grupo</Route>
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
