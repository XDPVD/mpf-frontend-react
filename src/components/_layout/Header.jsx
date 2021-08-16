import React from 'react';

import logo from '@assets/logo.svg';

import Avatar from '@material-ui/core/Avatar';

import { useStyles } from '@components/_layout/_styles';
import { useGlobalStyles } from '../../styles/globalStyles';
import { useUser } from '../../base/utils/useUser';

function Header() {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();
    const user = useUser()[0];
    
    return (
        <div className={globalStyles.headerContainer}>
            <div className={classes.headerLogo}>
                <img alt="labc_logo" src={logo} />
            </div>
            {user && <div className={classes.headerUserContainer}>
                <p>{user.givenName}</p>
                <Avatar src={user.imageUrl}>
                    {user.givenName}
                </Avatar>
            </div>}
        </div>
    );
}

export default Header;
