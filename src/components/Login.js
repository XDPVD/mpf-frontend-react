import React from 'react'

export const Login = () => {
    return (
        <div className="container p-">
            <h1 className="display-1">E-Learning Classroom</h1>
            <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
        </div>
    )
}
