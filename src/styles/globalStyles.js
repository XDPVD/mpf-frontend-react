import { makeStyles } from '@material-ui/core';

const componentsHeightPX = {
    header: 60,
    navbar: 100,
};

export const useGlobalStyles = makeStyles({
    appContainer: {
        height: '100vh',
        overflow: 'hidden',
    },
    genericContainer:{
        height: '100%'
    },
    headerContainer: {
        height: `${componentsHeightPX.header}px`,
        display: 'flex',
        flexBasis: '60px',
        flexShrink: '0',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    navbarContainer: {
        height: `${componentsHeightPX.navbar}px`,
        backgroundColor: '#131313',
        padding: '20px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        color: '#ddd',
        backgroundImage:
            'url(https://images.unsplash.com/photo-1623602406812-10cbd27715b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)',
        backgroundSize: 'cover',
        boxShadow: '5px 5px 5px 0px rgba(200, 200, 200, 1)',
        zIndex: 999,
        
    },
    pageContainer: {
        marginLeft: '60px',
        height: `calc(100vh - ${componentsHeightPX.header}px - ${componentsHeightPX.navbar}px)`,
        padding: '5px',
    },
    logo: {
        marginLeft: '30px',
    },
});
