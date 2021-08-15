import { makeStyles } from '@material-ui/core'
import React from 'react'

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

function LoadingPage() {
    const classes = useStyles();
    return (
        <div className={classes.loadingPage}>
            
        </div>
    )
}

export default LoadingPage
