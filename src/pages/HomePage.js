import React from 'react'
import {
    Link
} from 'react-router-dom';

function HomePage(props) {
    return (
        <div>
            Home Page -
            <Link to="/login">Login</Link> -
            <Link to="/register">registro</Link>
        </div>
    )
}

export default HomePage