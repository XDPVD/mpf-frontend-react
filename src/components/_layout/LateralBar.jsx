import BookIcon from '@material-ui/icons/Book';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';

import { URLS } from '@settings/urls';
import { useStyles } from '@components/_layout/_styles';
import { Avatar, Button } from '@material-ui/core';
import { useUser } from '@utils/useUser';
import { useHistory, useLocation } from 'react-router-dom';
function LateralBar() {
    const classes = useStyles();
    const user = useUser()[0];
    const location = useLocation();
    const history = useHistory();
    const [, actions] = useUser();

    // TODO: Refactor user managment
    const closeSession = () => {
        actions.logout();
    };

    // TODO disabled button
    return (
        <div className={classes.lateralBarContainer}>
            <div className={classes.lateralBarTop}>
                <Avatar src={user.imageUrl}></Avatar>
                <div className={classes.separator} />

                <Button
                    className={classes.lateralBarButton}
                    disabled={location.pathname.includes(URLS.COURSES)}
                    onClick={() => { history.push(URLS.COURSES) }}
                >
                    <BookIcon />
                </Button>
            </div>

            <div className={classes.lateralBarBottom}>
                <Button
                    className={classes.lateralBarButton}
                    disabled={location.pathname.includes(URLS.CONFIG)}
                    onClick={() => { history.push(URLS.CONFIG) }}
                >
                    <SettingsIcon />
                </Button>

                <Button
                    className={classes.lateralBarButton}
                    style={{ color: 'red' }}
                    onClick={() => closeSession()}
                >
                    <ExitToAppIcon />
                </Button>
            </div>
        </div>
    );
}

export default LateralBar;
