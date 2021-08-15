import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    closeIcon: {
        position: 'absolute',
        right: 3,
        top: 8,
    },
    loadingWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100px',
    },
    notFoundWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50px',
    },
    fileTray: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        textAlign: 'left',
        backgroundColor: 'whitesmoke',
        border: '3px solid black',
        height: '300px',
    },
    dropZone: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(245, 245, 245)',
        border: '1px black',
        padding: '8px',
        width: '100%',
        boxSizing: 'border-box',
        '& *': {
            margin: '0px 10px',
        },
    },
    fileList: {
        margin: '0px',
        width: '100%',
        flex: 6,
        'list-style-type': 'none',
    },
    loading: {
        position: 'absolute',
        backgroundColor: 'rgba(221, 221, 221, 0.46)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '10',
        width: '100%',
        height: '100%',
    },
});
