import BookIcon from '@material-ui/icons/Book';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';

import { URLS } from '@settings/urls';
import { useStyles } from '@components/_layout/_styles';
import { Avatar, Button } from '@material-ui/core';
import { useUser } from '@utils/useUser';
import { useLocation } from 'react-router-dom';
function LateralBar() {
    const classes = useStyles();

    const location = useLocation();
    const [, actions] = useUser();

    // Array of Buttons { IconComponent, url }
    const topButtons = [
        {
            url: URLS.COURSES,
            component: <BookIcon />,
        },
        {
            url: URLS.GROUPS,
            component: <GroupIcon />,
        },
    ];

    const settingButton = {
        component: <SettingsIcon />,
        url: URLS.CONFIG,
    };

    // TODO: Refactor user managment
    const closeSession = () => {
        actions.logout();
    };

    // TODO disabled button
    return (
        <div className={classes.lateralBarContainer}>
            <div className={classes.lateralBarTop}>
                <Avatar src="https://i.picsum.photos/id/128/200/300.jpg?hmac=7to6-3CeagytIcDSNoyBUAgdzKPBMw3CYRpVrm7DBSA"></Avatar>
                <div className={classes.separator} />
                {topButtons.map((e, index) => {
                    return (
                        <Button
                            className={classes.lateralBarButton}
                            key={index}
                            disabled={location.pathname.includes(e.url)}
                        >
                            {e.component}
                        </Button>
                    );
                })}
            </div>

            <div className={classes.lateralBarBottom}>
                <Button
                    className={classes.lateralBarButton}
                >
                    {settingButton.component}
                </Button>

                <Button style={{ color: 'red' }} onClick={() => closeSession()}>
                    <ExitToAppIcon />
                </Button>
            </div>
        </div>
    );
}

export default LateralBar;
