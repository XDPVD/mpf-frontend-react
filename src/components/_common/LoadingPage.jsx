import { makeStyles } from '@material-ui/core'
import React from 'react'
// sed orci vel, pulvinar luctus justo. Morbi ullamcorper ac quam quis consequat. Proin imperdiet euismod cur
const useStyles = makeStyles({
    loadingPage: {
        position: 'absolute',
        backgroundColor: 'lightblue',
        display: 'flex',
        width: '100%',
        height: '100vh',
        zIndex: '9999',
    },
    
})
// sed orci vel, pulvinar luctus justo. Morbi ullamcorper ac quam quis consequat. Proin imperdiet euismod cur
function LoadingPage() {
    const classes = useStyles();
    return (
        <div className={classes.loadingPage}>
            
        </div>
    )
}

export default LoadingPage
