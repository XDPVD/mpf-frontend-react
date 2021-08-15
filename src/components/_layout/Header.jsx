import React from 'react';

import logo from '@assets/logo.svg';

import Avatar from '@material-ui/core/Avatar';

import { useStyles } from '@components/_layout/_styles';

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.headerContainer}>
            <div className={classes.headerLogo}>
                <img alt="labc_logo" src={logo} />
            </div>
            <div className={classes.headerUserContainer}>
                <p>username</p>
                <Avatar src="https://i.picsum.photos/id/128/200/300.jpg?hmac=7to6-3CeagytIcDSNoyBUAgdzKPBMw3CYRpVrm7DBSA">
                    Initial
                </Avatar>
            </div>
        </div>
    );
}

export default Header;
